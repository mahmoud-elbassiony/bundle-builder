export default function StepNavigationButton({
  buttonText,
  toggleItem,
}: {
  buttonText: string;
  toggleItem: () => void;
}) {
  return (
    <div className="mt-6 flex justify-center">
      <button
        className="text-primary border-primary cursor-pointer rounded-[7px] border px-6 py-[7.5px] leading-normal font-semibold lg:text-lg"
        onClick={toggleItem}
      >
        {buttonText}
      </button>
    </div>
  );
}
