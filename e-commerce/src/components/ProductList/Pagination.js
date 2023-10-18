import React from "react";

export default function Pagination() {
  return (
    <div className="py-6 flex justify-center items-center">
      <ul className="flex list-style-none text-lg">
        <li>
          <a className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-neutral-500 transition-all duration-300 dark:text-neutral-400">
            Previous
          </a>
        </li>
        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white "
            href="#!"
          >
            1
          </a>
        </li>
        <li aria-current="page">
          <a
            className="relative block rounded bg-primary-100 px-3 py-1.5 font-medium text-primary-700 transition-all duration-300"
            href="#!"
          >
            2
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
              (current)
            </span>
          </a>
        </li>
        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href="#!"
          >
            3
          </a>
        </li>
        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white text-[#23A6F0] p-[25px]"
            href="#!"
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}
