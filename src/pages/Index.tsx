import { VPNHeader } from "@/components/VPNHeader";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { CollapsibleSection } from "@/components/CollapsibleSection";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";
import { DiscountSystem } from "@/components/DiscountSystem";
import { SubscriptionOptions } from "@/components/SubscriptionOptions";
import { ReferralProgram } from "@/components/ReferralProgram";
import { CreditCard, Gift, Settings, FileText, RefreshCw, History, Grid3x3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <div className="max-w-md mx-auto">
        <VPNHeader username="Bedolaga_user" isExpired={true} />

        <div className="px-4 space-y-4">
          <StatsCard
            subscriptionExpires="30.11.2025"
            daysLeft={365}
            trafficUsed={200}
            trafficTotal={250}
            devicesUsed={7}
            devicesTotal={10}
            balance={0}
          />

          <div className="space-y-3">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Пополнить
            </Button>
            <Button variant="outline" className="w-full border-primary text-foreground bg-card hover:bg-secondary">
              Введите промокод
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Активировать
            </Button>
          </div>

          <h2 className="text-xl font-bold mt-8 mb-4">Управление услугами</h2>

          <CollapsibleSection
            icon={<CreditCard className="w-5 h-5 text-primary-foreground" />}
            title="Продлить подписку"
            defaultOpen={true}
          >
            <SubscriptionPlans />
          </CollapsibleSection>

          <CollapsibleSection
            icon={<Gift className="w-5 h-5 text-primary-foreground" />}
            title="Система скидок"
          >
            <DiscountSystem />
          </CollapsibleSection>

          <CollapsibleSection
            icon={<Settings className="w-5 h-5 text-primary-foreground" />}
            title="Опции подписки"
          >
            <SubscriptionOptions />
          </CollapsibleSection>

          <CollapsibleSection
            icon={<RefreshCw className="w-5 h-5 text-primary-foreground" />}
            title="Реферальная программа"
          >
            <ReferralProgram />
          </CollapsibleSection>

          <CollapsibleSection
            icon={<Grid3x3 className="w-5 h-5 text-primary-foreground" />}
            title="Ваши устройства"
          >
            <p className="text-sm text-muted-foreground">Остается без изменений</p>
          </CollapsibleSection>

          <CollapsibleSection
            icon={<History className="w-5 h-5 text-primary-foreground" />}
            title="История операций"
          >
            <p className="text-sm text-muted-foreground">Остается без изменений</p>
          </CollapsibleSection>

          <h2 className="text-lg font-bold mt-8 mb-4">Правовые документы</h2>

          <div className="space-y-2">
            <CollapsibleSection
              icon={<FileText className="w-5 h-5 text-primary-foreground" />}
              title="Публичная оферта"
            >
              <p className="text-sm text-muted-foreground">Содержание документа...</p>
            </CollapsibleSection>

            <CollapsibleSection
              icon={<FileText className="w-5 h-5 text-primary-foreground" />}
              title="Правила сервиса"
            >
              <p className="text-sm text-muted-foreground">Содержание документа...</p>
            </CollapsibleSection>

            <CollapsibleSection
              icon={<FileText className="w-5 h-5 text-primary-foreground" />}
              title="Политика конфиденциальности"
            >
              <p className="text-sm text-muted-foreground">Содержание документа...</p>
            </CollapsibleSection>
          </div>

          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-6">
            Подключиться
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
