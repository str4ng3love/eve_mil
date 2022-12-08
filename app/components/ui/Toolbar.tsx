'use client'
import { FaCog } from "react-icons/fa";
import React, { useState } from "react";
import GuideForm from "./GuideForm";
import ToolbarItem from "./ToolbarItem";
import ToolbarItemVertical from "./ToolbarItemVertical";

export default function Toolbar() {
  const [showForm, setForm]=useState(false)

  const displayForm = (event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
   setForm(true)
  }
  return (
    <>
    <GuideForm/>
    {/* {showForm? <GuideForm/> : <></>} */}
      <div className="group absolute translate-y-[100%] ease-out transition-all delay-100 duration-500 flex w-[5rem] h-[5rem] rounded-md bg-black/80 items-center justify-center hover:bg-white hover:shadow-linkB">
        <span className="transition-all   duration-300 ease group-hover:rotate-180  group-hover:text-black translate-x">
          <FaCog size="2em" />
        </span>
        <ToolbarItem text="Sort" elementsArray={['title', 'date', 'author' ]}/>
        <ToolbarItemVertical text="add" dir="-" handleClick={displayForm} />
        <ToolbarItemVertical text="filter" dir="y" elementsArray={['title', 'date', 'author' ]}/>
  
      </div>
    </>
  );
}
