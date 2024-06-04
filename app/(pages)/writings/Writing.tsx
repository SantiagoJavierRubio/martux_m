"use client";

import _ from "lodash";
import React, { useState } from "react";

type WritingProps = {
  title: string;
  text: string;
};

export default function Writing({ title, text }: WritingProps) {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  console.log(text)
  return (
    <div
      className={`w-full text-ellipsis p-3 border-2 border-slate-500 rounded-xl`}
    >
      <h3 className="text-3xl capitalize">
        {title}
      </h3>
      <iframe src={`/interviews/${text}`} className={`w-full overflow-clip transition-all ${isExpanded ? 'h-[50svh]':'h-min'}`} onLoad={(e) => console.log(e.target)} />
      {isExpanded ? (
        <button
          type="button"
          className="font-semibold text-blue-500 w-full text-right px-3"
          onClick={() => setExpanded(false)}
        >
          Show less
        </button>
      ) : (
        <button
          type="button"
          className="font-semibold text-blue-500 w-full text-right px-3"
          onClick={() => setExpanded(true)}
        >
          Show more
        </button>
      )}
    </div>
  );
}
