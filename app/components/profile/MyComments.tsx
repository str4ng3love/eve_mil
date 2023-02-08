"use client";
import CoolerHeading, { TAlign } from "../headings/CoolerHeading";
import Button, { BType } from "../ui/Button";
import {useState} from 'react'
import CommentsPanel from "./CommentsPanel";
export default function MyComments() {
    const [displayComments, setDisplayComments] = useState(false)
    const [showComments, setShowComments] = useState(true)
  return (
    <>
      <div className="p-4 w-full h-fit  font-Abel font-semibold">
        <div className=" text-white p-4 flex flex-col ">
          <div>
            <CoolerHeading text={"My comments"} align={TAlign.start} />
          </div>
            {!displayComments ?     <div
            className="flex justify-between items-center

        "
          >
            <span className="capitalize">number Comments</span>
            <Button
              type={BType.button}
              text={"show all"}
              handleClick={(e) => {
                setDisplayComments(true);
              }}
            />
          </div>: <>{showComments ? (<>
              <div
                className="flex justify-between items-center

        "
              >
                <span className="capitalize">number Comments</span>
                <Button
                  type={BType.button}
                  text={"hide all"}
                  handleClick={(e) => {
                    setShowComments(false);
                  }}
                />
              </div>
              <div className="visible h-fit">
              <CommentsPanel />
              </div>
            </>) : (<>
              <div
                className="flex justify-between items-center

        "
              >
                <span className="capitalize">number Comments</span>
                <Button
                  type={BType.button}
                  text={"show all"}
                  handleClick={(e) => {
                    setShowComments(true);
                  }}
                />
              </div>
              <div className="hidden h-0">
                <CommentsPanel />
              </div>
            </>)}</>}
        </div>
      </div>
    </>
  );
}
