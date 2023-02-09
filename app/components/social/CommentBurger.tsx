"use client";
import { useState } from "react";
export default function CommentBurger() {
  const [showMenu, setShowMenu] = useState(false);
  const [isSpace, setIsSpace] = useState(true);
  return (
    <>
      <div
        onPointerDown={(e) => {
          const rects = e.currentTarget.getClientRects();

          if (window.innerHeight - rects[0].bottom < 115) {
            setIsSpace(false);
          } else {
            setIsSpace(true);
          }

          setShowMenu(!showMenu);
        }}
        className="relative active:bg-white group hover:shadow-link group flex flex-col rounded-[50%] bg-black p-3  hover:bg-white transition-all ease duration-300"
      >
        <span
          className="transition-all ease duration-300 group-hover:border-black w-2 h-1 border-b-2 border-white border-solid
    "
        ></span>
        <span
          className="transition-all ease duration-300 group-hover:border-black w-2 h-1 border-b-2 border-white border-solid
    "
        ></span>
        <span
          className="transition-all ease duration-300 group-hover:border-black w-2 h-1 border-b-2 border-white border-solid
    "
        ></span>
        {/* TODO somehow make the menu render depending on position of the parent div in the viewport onMouse event might not be the best solution //go with state , needs some more work*/}
        {showMenu ? (
          <>
            {isSpace ? (
              <div className="left-[50%] rounded-md   translate-x-[-50%] flex flex-col  justify-center absolute h-[6rem]  p-1  translate-y-8">
                <div className="p-1 rounded-sm w-full bg-white text-black hover:bg-black hover:text-white hover:shadow-link">Edit</div>
                <div className="p-1 rounded-sm w-full bg-white text-black hover:bg-black hover:text-white hover:shadow-link">Delete</div>
                <div className="p-1 rounded-sm w-full bg-white text-black hover:bg-black hover:text-white hover:shadow-link">Report</div>
              </div>
            ) : (
              <div className="left-[50%] rounded-md  translate-x-[-50%] flex flex-col  justify-center absolute h-[6rem]  p-1  -translate-y-[7rem]">
                <div className="p-1 rounded-sm w-full bg-white text-black hover:bg-black hover:text-white hover:shadow-link">Edit</div>
                <div className="p-1 rounded-sm w-full bg-white text-black hover:bg-black hover:text-white hover:shadow-link">Delete</div>
                <div className="p-1 rounded-sm w-full bg-white text-black hover:bg-black hover:text-white hover:shadow-link">Report</div>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
