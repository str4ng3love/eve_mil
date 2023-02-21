"use client";
import CoolerHeading, { TAlign } from "../headings/CoolerHeading";
import CoolHeading from "../headings/CoolestHeading";
import { useState, useEffect } from "react";
import Button, { BType } from "../ui/Button";
import FormComponent, { EType } from "../forms/FormComponent";
import useGuide from "../../../hooks/useGuide";

type CDType = {
  objects: {
    [key: string]: {
      id?: string;
      value?: string;
      type?: string;
    };
  };
};
enum Category {
  FW = `FW`,
  BUSINESS = `BUSINESS`,
  FLIGHT = `FLIGHT`,
  BASICS = `BASICS`,
}
enum Language {
  EN = "EN",
  PL = "PL",
}
interface Props {
  id: string;
  handleClick?: (e: React.PointerEvent<HTMLButtonElement>) => void;
}
export default function EditGuide({ id, handleClick }: Props) {
  const { guide, isLoading, isError } = useGuide(id);
// TODO: map fetched guide's content in editable fields || no progress


  const [category, setCategory] = useState(guide?.category);
  const [title, setTitle] = useState(guide?.title);
  const [description, setDescription] = useState(guide?.description);
  const [language, setLanguage] = useState(guide?.language);

  const [importedData, setimportedData] =useState<JSX.Element[]>([])
  const [compType, setType] = useState(EType.Subtitle);
  const [formComponents, setComponents] = useState<JSX.Element[]>([]);
  const [compData, setCompData] = useState<CDType>({ objects: {} });
  const [componentToDelete, setCompToDel] = useState("");
  const [response, setResponse] = useState("");
  const [display, setDisplay] = useState(`flex`);

  const eraseComponent = (event: React.PointerEvent<HTMLButtonElement>) => {
    //!SORCERY: Calling state from formComponents renders pevious state
    let el = event.currentTarget.parentElement?.id;

    setCompToDel(el as string);
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

      return { objects: newObj };
    });
  };
  const addComponent = (event: React.PointerEvent<HTMLButtonElement>) => {
    let randomId = crypto.randomUUID();
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
  const ContentToArray = (contentSource:object)=>{
    if(contentSource !== undefined){

      const content = Object.values(contentSource)
  
      const contentJSX = content.map((c)=> <FormComponent id={c.id} type={c.type} key={c.id} text={c.value} handleChange={handleChange} handleErase={eraseComponent}  />)
      return contentJSX
    }
  }


  useEffect(() => {
    delComponent(componentToDelete);
  }, [componentToDelete]);
  useEffect(()=>{
    let contentJSX=ContentToArray(guide?.content.objects as object)
    if(contentJSX){
      setComponents(contentJSX)

    }
  }, [guide])
  if (isLoading) {
    return (
      <>
        <div className="absolute top-0 right-0 z-50 min-w-[560px] w-full ">
          <div className="flex justify-center">
            <div className="min-h-[500px] flex flex-col justify-center items-center rounded-lg border-solid border-white/50 border-2 backdrop-blur-sm w-full bg-black/40 ">
              <CoolHeading text="loading ..." />
            </div>
          </div>
        </div>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <div className="absolute top-0 right-0 z-50 min-w-[560px] w-full ">
          <div className="flex justify-center">
            <div className="min-h-[500px] flex flex-col justify-center items-center rounded-lg border-solid border-red-700/50 border-2 backdrop-blur-sm w-full bg-black/40 ">
              <div className="p-8 bg-red-600 rounded-md">
                <CoolHeading text="error loading data" />
              </div>
              <Button text="x" type={BType.erase} handleClick={handleClick} />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="absolute top-0 right-0 z-50 min-w-[560px] w-full">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center rounded-lg border-solid border-white/50 border-2 backdrop-blur-sm w-full bg-black/40 ">
            {display === "flex" ? (
              <div className="p-4 w-full flex justify-between">
                <CoolHeading text="Edit Guide" align={TAlign.center} />
                <div>
                  <Button
                    text="_"
                    type={BType.erase}
                    handleClick={(e) => setDisplay("hidden")}
                  />

                  <Button
                    text="X"
                    type={BType.erase}
                    handleClick={handleClick}
                  />
                </div>
              </div>
            ) : (
              <div className="p-4 top-[100%]  md:left-[85%] left-[75%] absolute justify-between">
                <div className="flex">
                  <Button
                    text="▢"
                    type={BType.erase}
                    handleClick={(e) => setDisplay("flex")}
                  />

                  <Button
                    text="X"
                    type={BType.erase}
                    handleClick={handleClick}
                  />
                </div>
              </div>
            )}
            <div className="flex justify-center">
              <form className="flex flex-col">
                <div className="flex w-[100%] items-center justify-center p-2 mx-2 ">
                  <div className="p-4">
                    <label
                      className="p-2 font-bold w-[14ch]"
                      title="Select guide's topic."
                    >
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                        let value = e.currentTarget.value;
                        //TODO: style select

                        setCategory(value);
                      }}
                      className=" rounded-md w-fit h-fit p-2 text-black resize-none "
                    >
                      {" "}
                      <option value={Category.BASICS}>Basics</option>
                      <option value={Category.FW}>FW</option>
                      <option value={Category.FLIGHT}>Flight School</option>
                      <option value={Category.BUSINESS}>Business</option>
                    </select>
                  </div>
                  <div className="p-4">
                    <label
                      className="p-2 font-bold w-[14ch]"
                      title="Language in which the guide will be written."
                    >
                      Language
                    </label>
                    <select
                      value={language}
                      onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                        let value = e.currentTarget.value;
                        //TODO: style select

                        setLanguage(value);
                      }}
                      className=" rounded-md w-fit h-fit p-2 text-black resize-none "
                    >
                      {(
                        Object.keys(Language) as Array<keyof typeof Language>
                      ).map((key, index) => (
                        <option value={key} key={index}>
                          {key}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex w-[100%] justify-center p-2 mx-2 ">
                  <label title="Title." className="p-2 font-bold w-[14ch]">
                    Title
                  </label>
                  <input
                    value={title}
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
                    value={description}
                    required
                    onChange={(e) => setDescription(e.currentTarget.value)}
                    className=" rounded-md w-[70%] p-2 text-black min-h-[5rem] max-h-[20rem]"
                  />
                </div>
            
                {formComponents.map((c) => c)}
                <div className="flex w-[100%] items-center justify-center p-2 mx-2 ">
                  <label
                    className="p-2 font-bold w-[14ch]"
                    title="Type of a component that you wish to add."
                  >
                    Type
                  </label>
                  <select
                    value={compType}
                    onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                      let value = e.currentTarget.value;
                      //TODO: style select
                      setType(value as EType);
                    }}
                    className=" rounded-md w-fit h-fit p-2 text-black resize-none "
                  >
                    {(
                        Object.keys(EType) as Array<keyof typeof EType>
                      ).map((key, index) => (
                        <option value={key} key={index}>
                          {key}
                        </option>
                      ))}
                  </select>
                    <Button text="testo" type={BType.button} handleClick={(e)=>console.log(formComponents)}/>
                  <Button
                    type={BType.button}
                    text="Add Component"
                    handleClick={addComponent}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
