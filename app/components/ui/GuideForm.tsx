"use client";
import React, { useEffect, useState } from "react";
import FormComponent from "./FormComponent";
import CoolHeading from "../headings/CoolestHeading";
import Button from "./Button";
import { BType } from "./Button";

type CDType = {
  objects: {
    [key: string]: {
      id?: string;
      value?: string;
    };
  };
};

export default function GuideForm() {
  const [compType, setType] = useState(0);
  const [formComponents, setComponents] = useState<JSX.Element[]>([]);
  const [compData, setCompData] = useState<CDType>({ objects: {} });
  const [componentToDelete, setCompToDel] = useState("");

  const addComponent = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let randomId = Date.now().toString();
    setComponents((prevState) => [
      ...prevState,
      <FormComponent
        key={randomId}
        id={randomId}
        handleErase={eraseComponent}
        handleChange={handleChange}
        type={compType}
      />,
    ]);
  };
  const eraseComponent = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    //!SORCERY: Calling state from formComponents renders pevious state
    let el = event.currentTarget.parentElement?.id;

    //@ts-ignore
    setCompToDel(el);
  };
  const delComponent = (id: string) => {
    let filteredArray = formComponents.filter((comp) => {
      return comp.key !== id;
    });
    setComponents(filteredArray);
    if(compData.objects[`${id}`]){
    const compDataCopy = JSON.parse(JSON.stringify(compData)) 
    delete compDataCopy.objects[`${id}`]

    setCompData(compDataCopy)
    }

  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let id: string = event.currentTarget.parentElement?.id as string;
    let value: string = event.currentTarget.value;

    setCompData((prevState) => {
      const newObj = { ...prevState.objects };
      newObj[`${id}`] = { id, value };
      console.log(newObj);
      return { objects: newObj };
    });
  };
  useEffect(() => {
    delComponent(componentToDelete);
  }, [componentToDelete]);

  return (
    <div className="overflow-visible bg-slate-600 ">
      <form className="flex flex-col items-center justify-center">
        <CoolHeading text="Create a Guide" align="center" />
        <div className="flex w-[100%] justify-center p-2 mx-2 ">
          <label className="p-2 font-bold w-[14ch]">Title</label>
          <input className=" rounded-md w-[70%] p-2 text-black" />
        </div>
        <div className="flex w-[100%] justify-center p-2 mx-2 ">
          <label
            className="p-2 font-bold w-[14ch]"
            title="Short description of the guide."
          >
            Description
          </label>
          <textarea className=" rounded-md w-[70%] p-2 text-black min-h-[5rem] max-h-[20rem]" />
        </div>
        {formComponents.map((c) => c)}
        <div className="flex w-[100%] items-center justify-center p-2 mx-2 ">
          <label
            className="p-2 font-bold w-[14ch]"
            title="Short description of the guide."
          >
            Type
          </label>
          <select
            value={compType}
            onChange={(e: React.FormEvent<HTMLSelectElement>) => {
              let value = parseInt(e.currentTarget.value);
              //TODO: style select
              setType(value);
            }}
            className=" rounded-md w-fit h-fit p-2 text-black resize-none "
          >
            <option value="0">Subtitle</option>
            <option value="1">Paragraph</option>
            <option value="2">Image</option>
            <option value="3" disabled>
              Video
            </option>
          </select>
          <Button
            key={"1"}
            text="Test"
            type={BType.button}
            handleClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => console.log(compData)}
          />
          <Button
            type={BType.button}
            text="Add Component"
            handleClick={addComponent}
          />
        </div>

        <Button text="submit" type={BType.submit} />
      </form>
    </div>
  );
}
