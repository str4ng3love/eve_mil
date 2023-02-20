"use client";
import React, { useEffect, useState } from "react";
import FormComponent from "./FormComponent";
import CoolHeading, { TAlign } from "../headings/CoolestHeading";
import Button from "../ui/Button";
import { BType } from "../ui/Button";
import { useSession } from "next-auth/react";



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
  handleClick?: (e: React.PointerEvent<HTMLButtonElement>) => void;
  id?: string;
};

export default function EditGuideForm({ handleClick, id }: Props) {
// TODO: Add DL hook
  const [guide, setGuide] = useState<unknown>()
  const [compType, setType] = useState(0);
  const [formComponents, setComponents] = useState<JSX.Element[]>([]);
  const [category, setCategory] = useState(`BASICS`);
  const [language, setLanguage] = useState("EN");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [compData, setCompData] = useState<CDType>({ objects: {} });
  const [componentToDelete, setCompToDel] = useState("");
  const [display, setDisplay] = useState(`flex`);
  const [response, setResponse] = useState("");


  


  
  let session = useSession();

  let portraitUrl = session.data?.user?.image;

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    let data = {
      authorName: session.data?.user?.name,
      title,
      description,
      category,
      language,
      portraitUrl,
      content: compData,
    };
    try {
      const res = await fetch("/api/guides/guides", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
      });
      const msg = await res.json();
      setResponse(msg.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const addComponent = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    let randomId =crypto.randomUUID()
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
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
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
  useEffect(() => {
    delComponent(componentToDelete);
  }, [componentToDelete]);


 if(id){
    // TODO: Modify the code so the component is able to make changes to Guide
    return(
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
  
                  <Button text="X" type={BType.erase} handleClick={handleClick} />
                </div>
              </div>
            ) : (
              <div className="p-4 top-[100%] left-[85%] absolute justify-between">
                <div></div>
                <div>
                  <Button
                    text="▢"
                    type={BType.erase}
                    handleClick={(e) => setDisplay("flex")}
                  />
  
                  <Button text="X" type={BType.erase} handleClick={handleClick} />
                </div>
              </div>
            )}
            <div className="flex justify-center">
              <form
                onSubmit={(e) => handleSubmit(e)}
                className={`${display} flex-col items-center  justify-center h-full w-full `}
              >
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
                      <option value={Category.BASICS}>Basics</option>
                      <option value={Category.FW}>FW</option>
                      <option value={Category.FLIGHT}>Flight School</option>
                      <option value={Category.BUSINESS}>Business</option>
                    </select>
                  </div>
                  <div>
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
                    title="Type of a component that you wish to add."
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
                    <option
                      title="Simple subtitle. Use to divide your ideas."
                      value="0"
                    >
                      Subtitle
                    </option>
                    <option
                      title="Where chunks of your text should be."
                      value="1"
                    >
                      Paragraph
                    </option>
                    <option title="URL to a hosted image." value="2">
                      Image
                    </option>
                    <option title="Disabled." value="3" disabled>
                      Video
                    </option>
                  </select>
  
                  <Button
                    type={BType.button}
                    text="Add Component"
                    handleClick={addComponent}
                  />
                </div>
                {response ? (
                  <div className="py-4">
                    <span className="p-4 font-Abel bg-emerald-300 uppercase rounded-md text-lg font-bold border-emerald-700 border-solid border-2">
                      {response}
                    </span>
                  </div>
                ) : (
                  <></>
                )}
                <Button text="submit" type={BType.submit} />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
 }
  return (
    <div className="absolute top-0 right-0 z-50 min-w-[560px] w-full">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center rounded-lg border-solid border-white/50 border-2 backdrop-blur-sm w-full bg-black/40 ">
          {display === "flex" ? (
            <div className="p-4 w-full flex justify-between">
              <CoolHeading text="Create a Guide" align={TAlign.center} />
              <div>
                <Button
                  text="_"
                  type={BType.erase}
                  handleClick={(e) => setDisplay("hidden")}
                />

                <Button text="X" type={BType.erase} handleClick={handleClick} />
              </div>
            </div>
          ) : (
            <div className="p-4 top-[100%] left-[85%] absolute justify-between">
              <div></div>
              <div>
                <Button
                  text="▢"
                  type={BType.erase}
                  handleClick={(e) => setDisplay("flex")}
                />

                <Button text="X" type={BType.erase} handleClick={handleClick} />
              </div>
            </div>
          )}
          <div className="flex justify-center">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className={`${display} flex-col items-center  justify-center h-full w-full `}
            >
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
                    <option value={Category.BASICS}>Basics</option>
                    <option value={Category.FW}>FW</option>
                    <option value={Category.FLIGHT}>Flight School</option>
                    <option value={Category.BUSINESS}>Business</option>
                  </select>
                </div>
                <div>
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
                  title="Type of a component that you wish to add."
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
                  <option
                    title="Simple subtitle. Use to divide your ideas."
                    value="0"
                  >
                    Subtitle
                  </option>
                  <option
                    title="Where chunks of your text should be."
                    value="1"
                  >
                    Paragraph
                  </option>
                  <option title="URL to a hosted image." value="2">
                    Image
                  </option>
                  <option title="Disabled." value="3" disabled>
                    Video
                  </option>
                </select>

                <Button
                  type={BType.button}
                  text="Add Component"
                  handleClick={addComponent}
                />
              </div>
              {response ? (
                <div className="py-4">
                  <span className="p-4 font-Abel bg-emerald-300 uppercase rounded-md text-lg font-bold border-emerald-700 border-solid border-2">
                    {response}
                  </span>
                </div>
              ) : (
                <></>
              )}
              <Button text="submit" type={BType.submit} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
