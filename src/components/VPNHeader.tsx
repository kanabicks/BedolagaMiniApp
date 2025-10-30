import { Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface VPNHeaderProps {
  username: string;
  isExpired: boolean;
}

export function VPNHeader({ username, isExpired }: VPNHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 pt-6 pb-8">
      <div className="flex items-center justify-between w-full px-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Shield className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-sm font-medium">
          RU
        </div>
      </div>

      <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center">
        <Shield className="w-10 h-10 text-foreground" />
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-bold mb-1">Bedolaga VPN</h1>
        <p className="text-sm text-muted-foreground">Безопасное и быстрое подключение</p>
      </div>

      <div className="flex items-center gap-3 bg-card px-4 py-3 rounded-xl w-full max-w-sm">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Shield className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="flex-1 text-foreground">{username}</span>
        {isExpired && (
          <Badge variant="destructive" className="bg-destructive text-destructive-foreground">
            ИСТЕКЛА
          </Badge>
        )}
      </div>
    </div>
  );
}
