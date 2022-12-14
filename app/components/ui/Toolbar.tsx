'use client'
import { useSession, signIn } from "next-auth/react";
import { FaCog } from "react-icons/fa";
import React, { useState } from "react";
import GuideForm from "./GuideForm";
import ToolbarItem from "./ToolbarItem";
import ToolbarItemVertical from "./ToolbarItemVertical";

export default function Toolbar() {
  const [showForm, setForm]=useState(false)
const session = useSession()
  const displayForm = (event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
   setForm(true)
  }
 
  return (
    <>
     {/* <GuideForm handleClick={(e)=>setForm(!showForm)}/>  */}
    {showForm?  <GuideForm handleClick={(e)=>setForm(!showForm)}/>  : <></>}
      <div className="group absolute md:-translate-x-[160%] translate-y-[100%] ease-out transition-all delay-100 duration-500 flex w-[5rem] h-[5rem] rounded-md bg-black/80 items-center justify-center hover:bg-white hover:shadow-linkB">
        <span className="transition-all   duration-300 ease group-hover:rotate-180  group-hover:text-black translate-x">
          <FaCog size="2em" />
        </span>
        <ToolbarItem text="Sort" elementsArray={['title', 'date', 'author' ]}/>
        {session.data? <ToolbarItemVertical text="add" dir="-" handleClick={displayForm} /> : <ToolbarItemVertical text="add" dir="-" handleClick={()=>signIn()} />}
        <ToolbarItemVertical text="filter" dir="y" elementsArray={['title', 'date', 'author' ]}/>
  
      </div>
      <div onClick={()=>signIn()}></div>
     
    </>
  );
}
