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
    createdAt: string;
    authorName: string;
    
  }[];
};

export default function Board(props: Props) {
  const [filter, setFilter] = useState<string>("ALL");
  const [sorter, setSorter] = useState<string>("date");
  const [compareFn, setCompareFn] = useState<any>();
  const [order, setOrder] = useState<boolean>(true);

  const getFilter = (e: React.PointerEvent<HTMLDivElement>) => {
    const selectedFilted = e.currentTarget.innerText;
    setFilter(selectedFilted);
  };
  const getSorter = (e: React.PointerEvent<HTMLDivElement>) => {
    const selectedSorter = e.currentTarget.innerText.toLowerCase();
    if (selectedSorter === sorter) {
      return setOrder(!order);
    }
    setSorter(selectedSorter);
    setOrder(true)
  };
  const compareFunc = (a: any, b: any) => {
    let sorterA
    let sorterB
    if(sorter === "date"){
      sorterA = a.createdAt
      sorterB = b.createdAt
      if(order){

        if (sorterA > sorterB) {
          return -1;
        }
        if (sorterA < sorterB) {
          return +1;
        }
        
        return 0;
      } else {
        if (sorterA > sorterB) {
          return +1;
        }
        if (sorterA < sorterB) {
          return -1;
        }
        
        return 0;
      }
    } else if(sorter === "author"){
      sorterA = a.authorName
      sorterB = b.authorName
    } else {
      sorterA = a[sorter]
      sorterB = b[sorter]
    }
  if(order){

    if (sorterA > sorterB) {
      return +1;
    }
    if (sorterA < sorterB) {
      return -1;
    }
    
    return 0;
  } else {
    if (sorterA > sorterB) {
      return -1;
    }
    if (sorterA < sorterB) {
      return +1;
    }
    
    return 0;
  }
  };
  // useEffect(()=>{
  //   console.log(order)
  // })

  return (
    <>
      <Toolbar filterFn={getFilter} sortFn={getSorter} />
      <div className=" grid grid-cols-auto gap-4  mx-5 p-4">
        {filter === "ALL" ? (
          props.guides?.sort(compareFunc).map((guide) => (
            <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />}>
              <GridCard
                authorName={guide.authorName}
                createdAt={guide.createdAt.slice(0, 24)}
                category={guide.category}
                description={guide.description}
                heading={guide.title}
                key={guide.id}
                url="#"
              />
            </Suspense>
          ))
        ) : (
          <></>
        )}
        {filter === "FW" ? (
          props.guides
            ?.filter((guide) => guide.category === "FW")
            .map((guide) => (
              <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />}>
                <GridCard
                  createdAt={guide.createdAt}
                  category={guide.category}
                  description={guide.description}
                  heading={guide.title}
                  key={guide.id}
                  url="#"
                />
              </Suspense>
            ))
        ) : (
          <></>
        )}
        {filter === "BUSINESS" ? (
          props.guides
            ?.filter((guide) => guide.category === "BUSINESS")
            .map((guide) => (
              <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />}>
                <GridCard
                  category={guide.category}
                  description={guide.description}
                  heading={guide.title}
                  key={guide.id}
                  url="#"
                />
              </Suspense>
            ))
        ) : (
          <></>
        )}
        {filter === "FLIGHT SCHOOL" ? (
          props.guides
            ?.filter((guide) => guide.category === "FLIGHT")
            .map((guide) => (
              <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />}>
                <GridCard
                  category={guide.category}
                  description={guide.description}
                  heading={guide.title}
                  key={guide.id}
                  url="#"
                />
              </Suspense>
            ))
        ) : (
          <></>
        )}
        {filter === "BASICS" ? (
          props.guides
            ?.filter((guide) => guide.category === "BASICS")
            .map((guide) => (
              <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />}>
                <GridCard
                  category={guide.category}
                  description={guide.description}
                  heading={guide.title}
                  key={guide.id}
                  url="#"
                />
              </Suspense>
            ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
