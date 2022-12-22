"use client";
import { v4 } from "uuid";

import { Suspense, useState, useEffect } from "react";
import GridCard from "./GridCard";
import SpinnerMini from "./ui/SpinnerMini";
import Toolbar from "./ui/Toolbar";
type Props = {
  guides?: {
    id: string;
    description: string;
    title: string;
    category: string;
  }[];
};

export default function Board(props: Props) {
  const [filter, setFilter] = useState<string>("ALL");

  const getFilter = (e: React.PointerEvent<HTMLDivElement>) => {
    const selectedFilted = e.currentTarget.innerText;
    setFilter(selectedFilted);
    console.log(filter)
  };


  return (
    <>
      <Toolbar filterFn={getFilter} />
      <div className=" grid grid-cols-auto gap-4  mx-5 p-4">
        {filter === "ALL" ? props.guides?.map((guide)=> (
          <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />} >
          <GridCard category={guide.category} description={guide.description} heading={guide.title} key={guide.id} url='#'/>
          </Suspense>
        )): <></>}
           {filter === "FW" ? props.guides?.filter(guide => guide.category === 'FW').map((guide)=> (
          <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />} >
          <GridCard category={guide.category} description={guide.description} heading={guide.title} key={guide.id} url='#'/>
          </Suspense>
        )): <></>}
                 {filter === "BUSINESS" ? props.guides?.filter(guide => guide.category === 'BUSINESS').map((guide)=> (
          <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />} >
          <GridCard category={guide.category} description={guide.description} heading={guide.title} key={guide.id} url='#'/>
          </Suspense>
        )): <></>}
                 {filter === "FLIGHT SCHOOL" ? props.guides?.filter(guide => guide.category === 'FLIGHT').map((guide)=> (
          <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />} >
          <GridCard category={guide.category} description={guide.description} heading={guide.title} key={guide.id} url='#'/>
          </Suspense>
        )): <></>}
                 {filter === "BASICS" ? props.guides?.filter(guide => guide.category === 'BASICS').map((guide)=> (
          <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />} >
          <GridCard category={guide.category} description={guide.description} heading={guide.title} key={guide.id} url='#'/>
          </Suspense>
        )): <></>}
      </div>
    </>
  );
}
