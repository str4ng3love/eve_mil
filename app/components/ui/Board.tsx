"use client";
import { v4 } from "uuid";

import { Suspense, useState, useEffect } from "react";
import GridCard from "./GridCard";
import SpinnerMini from "./SpinnerMini";
import Toolbar from "./Toolbar";
type Props = {
  guides?: {
    id: string;
    description: string;
    title: string;
    category: string;
    createdAt: string;
    authorName: string;
    language: string;
  }[];
};

export default function Board(props: Props) {
  const [filter, setFilter] = useState<string>("ALL");
  const [langFilter, setLangFilter] = useState<string>("NO SELECTION");
  const [sorter, setSorter] = useState<string>("date");
  const [compareFn, setCompareFn] = useState<any>();
  const [order, setOrder] = useState<boolean>(true);



  const getFilter = (e: React.PointerEvent<HTMLDivElement>) => {
    const selectedFilter = e.currentTarget.innerText;
    setFilter(selectedFilter);
  };
  const getLangFilter = (e: React.PointerEvent<HTMLDivElement>) => {
    let selectedFilter = e.currentTarget.innerText;
    setLangFilter(selectedFilter);
  };
  const getSorter = (e: React.PointerEvent<HTMLDivElement>) => {
    const selectedSorter = e.currentTarget.innerText.toLowerCase();
    if (selectedSorter === sorter) {
      return setOrder(!order);
    }
    setSorter(selectedSorter);
    setOrder(true);
  };
  const compareFunc = (a: any, b: any) => {
    let sorterA;
    let sorterB;
    if (sorter === "date") {
      sorterA = a.createdAt;
      sorterB = b.createdAt;
      if (order) {
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
    } else if (sorter === "author") {
      sorterA = a.authorName;
      sorterB = b.authorName;
    } else {
      sorterA = a[sorter];
      sorterB = b[sorter];
    }
    if (order) {
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

  return (
    <>
      <Toolbar
        langFilterFn={getLangFilter}
        filterFn={getFilter}
        sortFn={getSorter}
      />
{/* Complicated matter, probably there's an easier way of achieving it */}
      <div className=" grid grid-cols-auto gap-4  mx-5 p-4">
        {filter === "ALL" && langFilter === "NO SELECTION" ? (
          props.guides?.sort(compareFunc).map((guide) => (
            <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />}>
              <GridCard
                authorName={guide.authorName}
                createdAt={guide.createdAt.toString()}
                category={guide.category}
                description={guide.description}
                heading={guide.title}
                key={guide.id}
                url={`/guides/community/${guide.title}`}
              />
            </Suspense>
          ))
        ) : (
          <></>
        )}
        {filter === "ALL" && langFilter !== "NO SELECTION" ? (
          props.guides
            ?.filter((guide) => guide.language === langFilter)
            .map((guide) => (
              <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />}>
                <GridCard
                  authorName={guide.authorName}
                  createdAt={guide.createdAt.toString()}
                  category={guide.category}
                  description={guide.description}
                  heading={guide.title}
                  key={guide.id}
                  url={`/guides/community/${guide.title}`}
                />
              </Suspense>
            ))
        ) : (
          <></>
        )}
        {filter !== "ALL" && langFilter !== "NO SELECTION" ? (
          props.guides
            ?.filter(
              (guide) =>
                guide.category === filter && guide.language === langFilter
            )
            .map((guide) => (
              <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />}>
                <GridCard
                  authorName={guide.authorName}
                  createdAt={guide.createdAt.toString()}
                  category={guide.category}
                  description={guide.description}
                  heading={guide.title}
                  key={guide.id}
                  url={`/guides/community/${guide.title}`}
                />
              </Suspense>
            ))
        ) : (
          <></>
        )}
         {filter !== "ALL" && langFilter === "NO SELECTION" ? (
          props.guides
            ?.filter(
              (guide) =>
                guide.category === filter
            )
            .map((guide) => (
              <Suspense key={v4()} fallback={<SpinnerMini key={v4()} />}>
                <GridCard
                  authorName={guide.authorName}
                  createdAt={guide.createdAt.toString()}
                  category={guide.category}
                  description={guide.description}
                  heading={guide.title}
                  key={guide.id}
                  url={`/guides/community/${guide.title}`}
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
