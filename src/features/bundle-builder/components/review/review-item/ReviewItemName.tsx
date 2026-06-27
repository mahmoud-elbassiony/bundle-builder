export default function ReviewItemName({ name }: { name: string }) {
  return (
    <p className="text-xs leading-4 font-medium tracking-[0.5%] text-neutral-950 lg:text-sm">
      {name}
    </p>
  );
}
