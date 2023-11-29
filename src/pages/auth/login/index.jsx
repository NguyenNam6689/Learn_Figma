import * as React from "react";

export const MyComponent = () => {
  return (
    <div className="bg-white flex flex-col items-center px-5">
      <div className="border bg-neutral-100 flex w-[691px] max-w-full flex-col mt-52 mb-40 pl-20 pr-8 pt-5 pb-12 rounded-2xl border-solid border-black border-opacity-30 max-md:my-10 max-md:px-5">
        <div className="flex w-[388px] max-w-full pr-0 justify-between gap-5 self-end">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[1.2] object-contain object-center w-[151px] overflow-hidden shrink-0 max-w-full mt-2.5"
          />
          <div className="z-[1] flex grow basis-[0%] flex-col">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/805b9221-91b2-418d-b845-b1d032562698?"
              className="aspect-square object-contain object-center w-[18px] overflow-hidden max-w-full"
            />
            <div className="bg-sky-600 self-stretch shrink-0 h-px" />
          </div>
        </div>
        <div className="rounded border bg-neutral-100 self-center flex w-[442px] max-w-full pt-0 flex-col mt-44 pb-12 px-4 border-solid border-zinc-400 max-md:mt-10">
          <div className="bg-neutral-100 z-[1] flex w-[118px] shrink-0 h-[7px] flex-col mb-2.5" />
        </div>
        <div className="rounded border bg-neutral-100 self-center flex w-[442px] max-w-full pt-0 flex-col mt-9 pb-12 px-4 border-solid border-zinc-400">
          <div className="bg-neutral-100 z-[1] flex w-[118px] shrink-0 h-[7px] flex-col mb-2.5" />
        </div>
        <div className="border bg-neutral-100 flex w-4 shrink-0 h-4 flex-col ml-12 mt-5 border-solid border-zinc-400 self-start max-md:ml-2.5" />
        <div className="bg-sky-600 self-center flex w-[434px] shrink-0 h-[46px] flex-col mt-4 rounded-[50px] max-md:max-w-full" />
        <div className="flex items-stretch gap-4 ml-5 mt-6 pr-20 self-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="bg-blue-500 flex grow basis-[0%] flex-col items-stretch py-1">
            <div className="bg-white flex flex-col items-center py-2">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[8.85] object-contain object-center w-[230px] overflow-hidden"
              />
            </div>
          </div>
          <div className="bg-indigo-800 flex grow basis-[0%] flex-col items-stretch py-1">
            <div className="bg-white flex flex-col px-4 py-1.5">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[4.7] object-contain object-center w-[141px] overflow-hidden max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


