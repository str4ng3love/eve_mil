"use client";
import { useSession, signIn } from "next-auth/react";
import { FaCog } from "react-icons/fa";
import React, { useState } from "react";
import GuideForm from "../forms/GuideForm";
import ToolbarMenu from "./ToolbarMenu";
import { ECur  ,EDir } from "./ToolbarMenu";


export default function Toolbar() {
  const [showForm, setForm] = useState(false);
  const session = useSession();
  const displayForm = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setForm(true);
  };
  const filterComps = [
    {
      text: 'Author'
    },   {
      text: 'Date'
    },  
    {
      text: 'Theme'
    },  
    {
      text: 'george clooney'
    },  
  ]
  

  return (
    <>
      {/* <GuideForm handleClick={(e)=>setForm(!showForm)}/>  */}
      {showForm ? <GuideForm handleClick={(e) => setForm(!showForm)} /> : <></>}
      <div className=" group transform-3d absolute md:-translate-x-[160%] translate-y-[200%] ease-out transition-all delay-100 translate-z-3 duration-500 flex w-[5rem] h-[5rem] rounded-md bg-black items-center justify-center hover:rounded-none hover:bg-white hover:shadow-linkB">
        <span className="transition-all  duration-300 ease group-hover:rotate-180  group-hover:text-black">
          <FaCog size="2em" />
        </span>
        {session.data ? (
          
          <ToolbarMenu
       
            text="add"
            cursor={ECur.pointer}
            dir={EDir.yNegative}
            handleClick={displayForm}
            components={[]}
          />
        ) : (
          <ToolbarMenu
       
            text="add"
            cursor={ECur.pointer}
            dir={EDir.yNegative}
            handleClick={() => signIn()}
            components={[]}
          />
        )}
        <ToolbarMenu dir={EDir.yPositive} text="filter"  components={filterComps} />
        <ToolbarMenu dir={EDir.xPositive} text="sort"  components={filterComps} />
        
      </div>
      <div onClick={() => signIn()}></div>
    </>
  );
}
