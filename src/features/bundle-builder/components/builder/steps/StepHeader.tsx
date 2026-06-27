type StepHeaderProps = {
  stepNumber: number;
  icon: string;
  title: string;
  selectedCount: number;
  isOpen: boolean;
  stepsCount: number;
};
export default function StepHeader({
  stepNumber,
  icon,
  title,
  selectedCount,
  isOpen,
  stepsCount,
}: StepHeaderProps) {
  return (
    <>
      <div className="px-[15px] py-[5px] text-[10px] font-medium tracking-[1.6px] text-neutral-700 uppercase lg:text-xs">
        Step {stepNumber} of {stepsCount}
      </div>

      <div className="flex items-center justify-between gap-2 border-t-[0.5px] border-neutral-900 px-[15px] py-5">
        <div className="flex items-center gap-2">
          <div className="size-[26px]">
            <img src={icon} alt={title} className="object-contain" />
          </div>
          <span className="text-[18px] leading-none font-semibold text-neutral-950 lg:text-[22px]">
            {title}
          </span>
        </div>

        <div className="text-primary flex items-center gap-[5px]">
          <span className="min-w-fit text-sm font-medium">
            {selectedCount} selected
          </span>
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-current transition-transform duration-200 ease-in-out ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M4.93612 6.43039C4.73671 6.70956 4.32179 6.70956 4.12238 6.43038L0.094018 0.790617C-0.142362 0.459682 0.0942011 0 0.500886 0L8.5577 0C8.96438 0 9.20095 0.459687 8.96456 0.790621L4.93612 6.43039Z" />
          </svg>
        </div>
      </div>
    </>
  );
}
