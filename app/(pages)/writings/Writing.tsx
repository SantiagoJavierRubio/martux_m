"use client";

import React, { useState } from "react";
import _ from 'lodash';

type WritingProps = {
  title: string;
  date: Date;
  text: string;
};

const LIMIT = 350;

export default function Writing({ title, date, text }: WritingProps) {
  const parsedText = _.unescape(text)
  const [isExpanded, setExpanded] = useState<boolean>(parsedText.length <= LIMIT);

  return (
    <div
      className={`overflow-y-hidden w-full text-ellipsis p-3 border-2 border-slate-500 rounded-xl`}
    >
      <h3 className="text-3xl">
        {title} -{" "}
        {date.toLocaleDateString("en-US", {
          month: "2-digit",
          year: "numeric",
          day: "2-digit",
        })}
      </h3>

      <p className="font-lato max-w-full text-pretty whitespace-pre-wrap">
        {isExpanded ? parsedText : parsedText.slice(0, LIMIT).trimEnd() + "..."}
      </p>
      {parsedText.length > 350 && (
        <>
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
              Read more
            </button>
          )}
        </>
      )}
    </div>
  );
}
