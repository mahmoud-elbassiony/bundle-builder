type ReviewSectionProps = {
  title?: string;
  children: React.ReactNode;
};

export default function ReviewSection({ title, children }: ReviewSectionProps) {
  return (
    <div className="border-t border-neutral-200 pt-[15px]">
      {/* Gray-C/500 */}
      {title && (
        <p className="mb-2 text-xs leading-4 tracking-[3%] text-neutral-400 uppercase">
          {title}
        </p>
      )}
      {children}
    </div>
  );
}
