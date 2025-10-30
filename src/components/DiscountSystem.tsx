import { Progress } from "@/components/ui/progress";

export function DiscountSystem() {
  const currentSpent = 150;
  const nextLevelRequired = 1500;
  const progress = (currentSpent / nextLevelRequired) * 100;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Ваш уровень</p>
          <p className="text-lg font-bold">Базовый</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-1">Всего потрачено</p>
          <p className="text-lg font-bold">150 ₽</p>
        </div>
      </div>

      <div className="bg-secondary rounded-lg p-3">
        <p className="text-xs text-muted-foreground mb-1">Ваши бонусы:</p>
        <p className="text-sm font-normal">Скидок нет</p>
      </div>

      <div className="bg-secondary rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-muted-foreground">Следующий уровень</p>
          <p className="text-lg font-bold text-primary">Бронзовый</p>
        </div>
        <p className="text-xs text-muted-foreground mb-2">Потратьте до получения бонусов</p>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold">{currentSpent} ₽</span>
          <span className="text-lg text-muted-foreground">{nextLevelRequired} ₽</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Скидки на уровне:</p>
        <div className="flex flex-wrap gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-normal">
            Продление −10%
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-normal">
            Локации −30%
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-normal">
            Трафик −15%
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-normal">
            Устройства −5%
          </div>
        </div>
      </div>
    </div>
  );
}
