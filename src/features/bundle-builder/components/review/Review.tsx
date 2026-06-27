import { SummaryFooter } from "./summary-footer/SummaryFooter";
import ReviewHeader from "./ReviewHeader";
import ReviewContentList from "./ReviewContentList";

export default function Review() {
  return (
    <div className="bg-primary-glance sticky top-0 flex h-fit flex-col gap-x-12 gap-y-2.5 px-[15px] pt-[15px] pb-[31px] md:flex-row lg:flex-col lg:rounded-[10px]">
      <div className="flex-1">
        <span className="mb-[5px] block text-[10px] font-medium tracking-[1.6px] text-neutral-700 uppercase">
          Review
        </span>
        <div className="px-[5px] pt-[20px]">
          <ReviewHeader />
          <ReviewContentList />
        </div>
      </div>
      <SummaryFooter />
    </div>
  );
}
