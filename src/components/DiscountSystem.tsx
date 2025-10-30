export function DiscountSystem() {
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
        <p className="text-sm">Скидок нет</p>
      </div>

      <div className="bg-secondary rounded-lg p-3">
        <p className="text-xs text-muted-foreground mb-2">Следующий уровень</p>
        <p className="text-lg font-bold mb-2">Бронзовый</p>
        <p className="text-xs">Потратьте до получения бонусов</p>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-2xl font-bold">150 ₽</span>
          <span className="text-lg text-muted-foreground">1500 ₽</span>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Скидки на уровне:</p>
        <div className="flex flex-wrap gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-[#4a2f4f] text-[#d896e3] text-sm">
            Продление −10%
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-[#4a2f4f] text-[#d896e3] text-sm">
            Локации −30%
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-[#4a2f4f] text-[#d896e3] text-sm">
            Трафик −15%
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-[#4a2f4f] text-[#d896e3] text-sm">
            Устройства −5%
          </div>
        </div>
      </div>
    </div>
  );
}
