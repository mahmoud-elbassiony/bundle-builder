import type { BundleState } from "@/features/bundle-builder/state/bundleReducer";
import type { Bundle } from "@/features/bundle-builder/types";
import step1Icon from "@/assets/images/steps/step-1.svg";
import step2Icon from "@/assets/images/steps/step-2.svg";
import step3Icon from "@/assets/images/steps/step-3.svg";
import step4Icon from "@/assets/images/steps/step-4.svg";
import ProductsStepItems from "./ProductsStepItems";
import PlanStep from "./PlanStep";
import { selectStepCount } from "@/features/bundle-builder/state/selectors";

type Step = {
  title: string;
  icon: string;
  key: keyof BundleState;
  buttonText?: string;
  getSelectedCount: (state: BundleState) => number;
  renderContent: (bundle: Bundle) => React.ReactNode;
};

export const steps: Step[] = [
  {
    title: "Choose your cameras",
    icon: step1Icon,
    key: "cameras",
    buttonText: "Next: Choose your plan",
    getSelectedCount: (state) => selectStepCount(state, "cameras"),
    renderContent: (data) => (
      <ProductsStepItems categoryData={data.cameras} categoryKey="cameras" />
    ),
  },
  {
    title: "Choose your plan",
    icon: step2Icon,
    key: "selectedPlanId",
    buttonText: "Next: Choose your sensors",
    getSelectedCount: () => 1,
    renderContent: (data) => <PlanStep plans={data.plans} />,
  },
  {
    title: "Choose your sensors",
    icon: step3Icon,
    key: "sensors",
    buttonText: "Next: Choose your accessories",
    getSelectedCount: (state) => selectStepCount(state, "sensors"),
    renderContent: (data) => (
      <ProductsStepItems categoryData={data.sensors} categoryKey="sensors" />
    ),
  },
  {
    title: "Choose your accessories",
    icon: step4Icon,
    key: "accessories",
    getSelectedCount: (state) => selectStepCount(state, "accessories"),
    renderContent: (data) => (
      <ProductsStepItems
        categoryData={data.accessories}
        categoryKey="accessories"
      />
    ),
  },
];
