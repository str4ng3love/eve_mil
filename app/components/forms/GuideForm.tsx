"use client";
import React, { useEffect, useState } from "react";
import FormComponent from "./FormComponent";
import CoolHeading, { TAlign } from "../headings/CoolestHeading";
import Button from "../ui/Button";
import { BType } from "../ui/Button";

type CDType = {
  objects: {
    [key: string]: {
      id?: string;
      value?: string;
      type?: string;
    };
  };
};
type Props = {
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function GuideForm({ handleClick }: Props) {
  const [compType, setType] = useState(0);
  const [formComponents, setComponents] = useState<JSX.Element[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [compData, setCompData] = useState<CDType>({ objects: {} });
  const [componentToDelete, setCompToDel] = useState("");
  const [display, setDisplay] = useState(`flex`);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("submitting");
    let data = {
      title,
      description,
      content: compData,
    };
    try {
      await fetch("/api/guides", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

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
    if (compData.objects[`${id}`]) {
      const compDataCopy = JSON.parse(JSON.stringify(compData));
      delete compDataCopy.objects[`${id}`];

      setCompData(compDataCopy);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let id: string = event.currentTarget.parentElement?.id as string;
    let value: string = event.currentTarget.value;
    let type: string = event.currentTarget.parentElement?.firstChild
      ?.textContent as string;

    setCompData((prevState) => {
      const newObj = { ...prevState.objects };
      newObj[`${id}`] = { id, value, type };
      console.log(newObj);
      return { objects: newObj };
    });
  };
  useEffect(() => {
    delComponent(componentToDelete);
  }, [componentToDelete]);

  return (
    <div className="absolute  top-[8rem] z-50 w-full overflow-visible md:-translate-x-[12.5%] ">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center rounded-lg border-solid border-white/50 border-2 backdrop-blur-sm w-full md:w-[75%] bg-black/40 ">
            { display === 'flex'? 
          <div className="p-4 w-full flex justify-between">
            <CoolHeading text="Create a Guide" align={TAlign.center}/>
            <div>
              <Button
                text="_"
                type={BType.erase}
                handleClick={(e) => setDisplay("hidden")}
              />
              
              
              <Button text="X" type={BType.erase} handleClick={handleClick} />
            </div> 
            
          </div>
          : 
          <div className="p-4 top-[100%] left-[85%] absolute justify-between">
            <div>

            </div>
            <div>
              <Button
                text="▢"
                type={BType.erase}
                handleClick={(e) => setDisplay("flex")}
              />
              
              <Button text="X" type={BType.erase} handleClick={handleClick} />
            </div> 
            
          </div>
          }
          <div className="flex justify-center">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className={`${display} flex-col items-center  justify-center h-full w-full `}
            >
              <div className="flex w-[100%] justify-center p-2 mx-2 ">
                <label className="p-2 font-bold w-[14ch]">Title</label>
                <input
                  required
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  className="rounded-md w-[70%] p-2 text-black"
                />
              </div>
              <div className="flex w-[100%] justify-center p-2 mx-2 ">
                <label
                  className="p-2 font-bold w-[14ch]"
                  title="Short description of the guide."
                >
                  Description
                </label>
                <textarea
                  required
                  onChange={(e) => setDescription(e.currentTarget.value)}
                  className=" rounded-md w-[70%] p-2 text-black min-h-[5rem] max-h-[20rem]"
                />
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
                  type={BType.button}
                  text="Add Component"
                  handleClick={addComponent}
                />
              </div>

              <Button text="submit" type={BType.submit} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
