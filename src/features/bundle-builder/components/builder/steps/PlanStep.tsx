import { useBundle } from "@/features/bundle-builder/hooks/useBundle";
import type { Plan } from "@/features/bundle-builder/types";
import { formatPrice } from "@/shared/utils/formatPrice";

export default function PlanStep({ plans }: { plans: Plan[] }) {
  const { state, dispatch } = useBundle();

  const handleSelectPlan = (planId: string) => {
    dispatch({
      type: "SELECT_PLAN",
      payload: {
        planId,
      },
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => handleSelectPlan(plan.id)}
            className={`relative cursor-pointer rounded-2xl border-2 bg-white p-6 transition-colors duration-150 ${
              state.selectedPlanId === plan.id
                ? "border-primary/70"
                : "border-transparent"
            } `}
          >
            <div className="mx-auto mb-2 grid aspect-[4] max-w-[150px] place-content-center">
              <img
                src={plan.image}
                alt={plan.name}
                className="object-contain"
              />
            </div>
            <div className="flex items-baseline justify-center">
              <span className="text-3xl font-bold text-neutral-950">
                {formatPrice(plan.price)}
              </span>
              <span className="text-neutral-600">/month</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
