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
    <div className="bg-card rounded-2xl p-5 space-y-4 border border-border/50">
      <div className="bg-muted rounded-xl p-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-muted-foreground mb-2">Подписка истекает</p>
          <p className="text-base font-bold text-foreground">{subscriptionExpires}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2">Дней осталось:</p>
          <p className="text-base font-bold text-foreground">{daysLeft}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-muted rounded-xl p-4">
          <p className="text-xs text-muted-foreground mb-2">Расход трафика</p>
          <p className="text-sm font-bold text-foreground">{trafficUsed} из {trafficTotal} GB</p>
        </div>
        <div className="bg-muted rounded-xl p-4">
          <p className="text-xs text-muted-foreground mb-2">Мои устройства</p>
          <p className="text-sm font-bold text-foreground">{devicesUsed} из {devicesTotal}</p>
        </div>
      </div>

      <div className="bg-muted rounded-xl p-4">
        <p className="text-xs text-muted-foreground mb-2">Ваш баланс</p>
        <p className="text-2xl font-bold text-foreground">{balance} ₽</p>
      </div>
    </div>
  );
}
