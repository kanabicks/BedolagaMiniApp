interface StatsCardProps {
  subscriptionExpires: string;
  daysLeft: number;
  trafficUsed: number;
  trafficTotal: number;
  devicesUsed: number;
  devicesTotal: number;
  balance: number;
}

export function StatsCard({
  subscriptionExpires,
  daysLeft,
  trafficUsed,
  trafficTotal,
  devicesUsed,
  devicesTotal,
  balance,
}: StatsCardProps) {
  return (
    <div className="bg-card rounded-xl p-4 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Подписка истекает</p>
          <p className="text-sm font-semibold">{subscriptionExpires}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-1">Дней осталось:</p>
          <p className="text-sm font-semibold">{daysLeft}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Расход трафика</p>
          <p className="text-sm font-semibold">{trafficUsed} из {trafficTotal} GB</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-1">Мои устройства</p>
          <p className="text-sm font-semibold">{devicesUsed} из {devicesTotal}</p>
        </div>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-1">Ваш баланс</p>
        <p className="text-2xl font-bold">{balance} ₽</p>
      </div>
    </div>
  );
}
