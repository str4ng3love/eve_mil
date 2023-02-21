"use client";

import { useState } from "react";
import CoolerHeading, { TAlign } from "../headings/CoolerHeading";
import Button, { BType } from "../ui/Button";
import GuidePanel from "./GuidePanel";

export default function MyGuides() {
  const [displayGuides, setDisplayGuides] = useState(false);
  const [showGuides, setShowGuides] = useState(true);

  return (
    <div className="p-4 w-full h-fit font-Abel font-semibold">
      <div className=" text-white p-4 flex flex-col ">
        <div>
          <CoolerHeading text={"My guides"} align={TAlign.start} />
        </div>

        {!displayGuides ? (
          <div
            className="flex justify-between items-center

        "
          >
            <span className="capitalize">number guides</span>
            <Button
              type={BType.button}
              text={"show all"}
              handleClick={(e) => {
                setDisplayGuides(true);
              }}
            />
          </div>
        ) : (
          <></>
        )}
        {displayGuides ? (
          <>
            {showGuides ? (<>
              <div
                className="flex justify-between items-center

        "
              >
                <span className="capitalize">number guides</span>
                <Button
                  type={BType.button}
                  text={"hide all"}
                  handleClick={(e) => {
                    setShowGuides(false);
                  }}
                />
              </div>
              <div className="visible h-fit">
                <GuidePanel />
              </div>
            </>) : (<>
              <div
                className="flex justify-between items-center

        "
              >
                <span className="capitalize">number guides</span>
                <Button
                  type={BType.button}
                  text={"show all"}
                  handleClick={(e) => {
                    setShowGuides(true);
                  }}
                />
              </div>
              <div className="hidden h-0">
                <GuidePanel />
              </div>
            </>)}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
