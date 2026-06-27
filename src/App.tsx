import Builder from "./features/bundle-builder/components/builder/Builder";
import Review from "./features/bundle-builder/components/review/Review";
import { BundleProvider } from "./features/bundle-builder/state/BundleProvider";
import { useBundleData } from "./features/bundle-builder/hooks/useBundleData";

export default function App() {
  const { data, loading, error } = useBundleData();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    return <div>Error: {error?.message || "Failed to load bundle data."}</div>;
  }
  return (
    <BundleProvider bundleData={data}>
      <div className="mx-auto flex max-w-[1196px] flex-col py-[31px] lg:flex-row lg:gap-[29px] lg:py-[50px]">
        <Builder />
        <Review />
      </div>
    </BundleProvider>
  );
}
