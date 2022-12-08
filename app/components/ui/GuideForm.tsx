'use client'
import React, { useEffect, useState } from "react"
import FormComponent from "./FormComponent"
import CoolHeading from "../headings/CoolestHeading"
import Button from "./Button"
import { stringify } from "querystring"



export default function GuideForm(){
    const [compType, setType ] = useState(0)
    const [formComponents, setComponents] = useState<JSX.Element[]>([])
  
    
    

    const addComponent =(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
       
        //TODO: think of a way to add iterable key prop to the component
        //TODO: style and prepare <FormComponent
        setComponents(prevState=>[...prevState, <FormComponent type={compType}/>])
    }

    return(
       <div className="overflow-visible bg-slate-600 ">
        <form className="flex flex-col items-center justify-center" >
            <CoolHeading text="Create a Guide" align="center" />
            <div className="flex w-[100%]  p-2 mx-2 ">
                <label className="p-2 w-[14ch]">Title</label>
                <input className="w-[70%] p-2 text-black" />
            </div>
            <div className="flex w-[100%]  p-2 mx-2 ">
                <label className="p-2 w-[14ch]" title="Short description of the guide." >Description</label>
                <textarea className="w-[70%] p-2 text-black resize-none " />
            </div>
            {formComponents.map(c=>c)}
            <div className="flex w-[100%] items-center p-2 mx-2 ">
                <label className="p-2 w-[14ch]" title="Short description of the guide." >Type</label>
                <select value={compType} onChange={(e: React.FormEvent<HTMLSelectElement>)=>{
                    let value = parseInt(e.currentTarget.value)
                    setType(value)}}  className="w-[70%] h-fit p-2 text-black resize-none " >
                    <option value="0" >Subtitle</option>
                    <option value="1" >Paragraph</option>
                    <option value="2" >Image</option>
                    <option value="3" disabled>Video</option>
                </select>
                
                <Button type="button" text="test" handleClick={addComponent}  />
            </div>
           
        <Button text="submit" type="submit" />
            
        </form>
       </div>
    )
}