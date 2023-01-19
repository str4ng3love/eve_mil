"use client";
import { useSession, signIn } from "next-auth/react";
import { FaCog } from "react-icons/fa";
import React, { useState } from "react";
import GuideForm from "../forms/GuideForm";
import ToolbarMenu from "./ToolbarMenu";
import { ECur, EDir } from "./ToolbarMenu";

interface Props {
  sortFn?: (e: React.PointerEvent<HTMLDivElement>) => void;
  filterFn?: (e: React.PointerEvent<HTMLDivElement>) => void;
  langFilterFn?: (e: React.PointerEvent<HTMLDivElement>) => void;
}
export default function Toolbar(props: Props) {
  const [showForm, setForm] = useState(false);
  const session = useSession();
  const sortArray = () => {};

  const displayForm = (event: React.PointerEvent<HTMLDivElement>) => {
    setForm(true);
  };

  const langComps = [
    {
      text: "no selection",
      fn: props.langFilterFn,
    },
    {
      text: "EN",
      fn: props.langFilterFn,
    },
    {
      text: "PL",
      fn: props.langFilterFn,
    },
  ];
  const filterComps = [
    {
      text: "ALL",
      fn: props.filterFn,
    },
    {
      text: "Basics",
      fn: props.filterFn,
    },
    {
      text: "fw",
      fn: props.filterFn,
    },
    {
      text: "flight school",
      fn: props.filterFn,
    },
    {
      text: "business",
      fn: props.filterFn,
    },
  ];
  const sortComps = [
    {
      text: "Title",
      fn: props.sortFn,
    },
    {
      text: "Category",
      fn: props.sortFn,
    },
    {
      text: "Date",
      fn: props.sortFn,
    },
    {
      text: "Author",
      fn: props.sortFn,
    },
    {
      text: "likes",
      fn: props.sortFn,
    },
  ];

  return (
    <>
      {showForm ? <GuideForm handleClick={(e) => setForm(!showForm)} /> : <></>}
      <div className="z-10 group transform-3d absolute md:-translate-x-[160%] translate-y-[200%] ease-out transition-all delay-100 translate-z-3 duration-500 flex w-[5rem] h-[5rem] rounded-md bg-black items-center justify-center hover:rounded-none hover:bg-white hover:shadow-linkB">
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
            xOffSet={"0rem"}
          />
        ) : (
          <ToolbarMenu
            text="add"
            cursor={ECur.pointer}
            dir={EDir.yNegative}
            handleClick={() => signIn()}
            components={[]}
            xOffSet={"0rem"}
          />
        )}
        <ToolbarMenu
          dir={EDir.yPositive}
          cursor={ECur.auto}
          text="category"
          xOffSet={"0rem"}
          components={filterComps}
        />
        <ToolbarMenu
          dir={EDir.yPositive}
          cursor={ECur.auto}
          text="Language"
          xOffSet={"5rem"}
          components={langComps}
        />
        <ToolbarMenu
          dir={EDir.xPositive}
          cursor={ECur.auto}
          text="sort by"
          xOffSet={"5rem"}
          components={sortComps}
        />
      </div>
    </>
  );
}
