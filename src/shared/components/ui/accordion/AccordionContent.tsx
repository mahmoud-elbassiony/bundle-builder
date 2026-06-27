import React from "react";
import { useAccordionItem } from "./context";

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function AccordionContent({
  children,
  className = "",
  ...props
}: AccordionContentProps) {
  const { value, isOpen } = useAccordionItem();

  return (
    <div
      id={`content-${value}`}
      role="region"
      aria-labelledby={`trigger-${value}`}
      className={`grid transition-all duration-200 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      } ${className}`}
      {...props}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
