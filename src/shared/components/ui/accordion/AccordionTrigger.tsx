import React from "react";
import { useAccordion, useAccordionItem } from "./context";

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function AccordionTrigger({
  children,
  className = "",
  ...props
}: AccordionTriggerProps) {
  const { toggleItem } = useAccordion();
  const { value, isOpen } = useAccordionItem();

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls={`content-${value}`}
      id={`trigger-${value}`}
      onClick={() => toggleItem(value)}
      className={`w-full text-left transition-all focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
