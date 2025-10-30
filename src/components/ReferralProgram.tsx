import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export function ReferralProgram() {
  return (
    <div className="space-y-4">
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2">
        <Copy className="w-4 h-4" />
        Скопировать реферальную ссылку
      </Button>

      <div>
        <p className="text-sm font-medium mb-3">Статистика</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Приглашено</span>
            <span className="font-semibold">17</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Активные пользователи</span>
            <span className="font-semibold">16</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Оплачивают</span>
            <span className="font-semibold">13</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Заработано за месяц</span>
            <span className="font-semibold">170 ₽</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Заработано всего</span>
            <span className="font-semibold">530 ₽</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Конверсия</span>
            <span className="font-semibold">70%</span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-3">Условия программы</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Минимальная сумма активации</span>
            <span className="font-semibold">100 ₽</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Бонус: реферал (первое пополнение)</span>
            <span className="font-semibold">100 ₽</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Ваш бонус за пополнение</span>
            <span className="font-semibold">150 ₽</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Комиссия с пополнений реферала</span>
            <span className="font-semibold">25%</span>
          </div>
        </div>
      </div>

      <Button variant="outline" className="w-full border-primary text-foreground bg-card hover:bg-secondary">
        Показать мои рефералов
      </Button>
    </div>
  );
}
