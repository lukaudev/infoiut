"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  date: string;
  title: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  items: TimelineItem[];
}

export function Timeline({ items, className, ...props }: TimelineProps) {
  return (
    <ol
      className={cn("relative border-l border-gray-200 ml-3 space-y-8", className)}
      {...props}
    >
      {items.map((item, i) => (
        <li key={i} className="ml-6">
          <span className="absolute -left-3 flex h-20 w-20 items-center justify-center rounded-full bg-black text-white ring-4 ring-white text-xs ">
            {item.icon ?? i + 1}
          </span>
          <time className="block text-xs font-medium uppercase tracking-wide text-gray-500">
            {item.date}
          </time>
          <h3 className="mt-1 text-base font-semibold text-gray-900">{item.title}</h3>
          {item.description && (
            <div className="mt-1 text-sm text-gray-600">{item.description}</div>
          )}
        </li>
      ))}
    </ol>
  );
}
