import React, { useState } from "react";
import type { AccordionType } from "./context";
import { AccordionContext } from "./context";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AccordionType;
  defaultValue?: string | string[];
  children: React.ReactNode;
}

export function Accordion({
  type = "single",
  defaultValue,
  children,
  className = "",
  ...props
}: AccordionProps) {
  const [value, setValue] = useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggleItem = (itemValue: string) => {
    setValue((prev) => {
      if (type === "single") {
        return prev.includes(itemValue) ? [] : [itemValue];
      } else {
        return prev.includes(itemValue)
          ? prev.filter((v) => v !== itemValue)
          : [...prev, itemValue];
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ value, toggleItem }}>
      <div className={`w-full ${className}`} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}
