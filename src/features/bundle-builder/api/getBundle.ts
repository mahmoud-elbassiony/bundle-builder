import bundleData from "../data/bundle.json";

export async function getBundle() {
  await new Promise((res) => setTimeout(res, 300));

  return bundleData;
}
