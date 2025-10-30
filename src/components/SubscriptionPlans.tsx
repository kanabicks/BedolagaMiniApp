import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const plans = [
  { duration: "12 месяцев", price: 3600, featured: true },
  { duration: "1 месяц", price: 300, featured: false },
  { duration: "3 месяца", price: 900, featured: false },
  { duration: "6 месяцев", price: 1800, featured: false },
];

export function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(1);

  const total = selectedPlan !== null ? plans[selectedPlan].price : 0;
  const shortfall = 300;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {plans.map((plan, index) => (
          <button
            key={index}
            onClick={() => setSelectedPlan(index)}
            className={`relative p-4 rounded-xl border-2 transition-all ${
              selectedPlan === index
                ? "border-primary bg-secondary"
                : "border-border bg-card"
            }`}
          >
            {plan.featured && (
              <Star className="absolute -top-2 -left-2 w-6 h-6 text-star fill-star" />
            )}
            <div className="text-sm mb-2">{plan.duration}</div>
            <div className="text-lg font-bold">{plan.price.toLocaleString()} ₽</div>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm px-1">
        <span>Итого</span>
        <span className="font-bold text-lg">{total} ₽</span>
      </div>

      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Оплатить
      </Button>

      <p className="text-destructive text-sm text-center">
        Недостаточно средств — не хватает {shortfall} ₽
      </p>
    </div>
  );
}
