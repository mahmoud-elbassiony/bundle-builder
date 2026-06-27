export type ReviewItemImageProps = {
  image: string;
  alt: string;
};
export default function ReviewItemImage({ image, alt }: ReviewItemImageProps) {
  return (
    <div className="grid size-[41px] min-w-[41px] place-content-center overflow-hidden rounded-[5px] bg-white">
      <img alt={alt} src={image} className="object-contain" />
    </div>
  );
}
