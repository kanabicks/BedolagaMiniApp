import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const locations = [
  { name: "Германия", flag: "🇩🇪", price: 10 },
  { name: "Польша", flag: "🇵🇱", price: 10 },
  { name: "Нидерланды", flag: "🇳🇱", price: 10 },
  { name: "Эфиопия", flag: "🇪🇹", price: 10 },
];

const trafficOptions = [
  { size: "5 GB", price: 20 },
  { size: "25 GB", price: 66 },
  { size: "50 GB", price: 77 },
  { size: "250 GB", price: 170 },
  { size: "1000 GB", price: 195 },
  { size: "Безлимит", price: 200 },
];

export function SubscriptionOptions() {
  const [selectedLocations, setSelectedLocations] = useState<number[]>([]);
  const [selectedTraffic, setSelectedTraffic] = useState<number | null>(null);
  const [deviceCount, setDeviceCount] = useState(3);

  const toggleLocation = (index: number) => {
    setSelectedLocations((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const total = 120; // Calculate based on selections

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-3">Выберите нужные локации</p>
        <p className="text-xs text-muted-foreground mb-3">Скидки суммируются автоматически</p>
        <div className="grid grid-cols-2 gap-2">
          {locations.map((location, index) => (
            <button
              key={index}
              onClick={() => toggleLocation(index)}
              className={`p-3 rounded-lg border-2 transition-all bg-muted relative ${
                selectedLocations.includes(index)
                  ? "border-primary"
                  : "border-border"
              }`}
            >
              <div className="flex items-center gap-2 justify-start">
                <span>{location.flag}</span>
                <span className="text-sm">{location.name}</span>
              </div>
              <div className="text-lg font-bold absolute bottom-3 right-3">{location.price} ₽</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-3">Выберите количество трафика</p>
        <div className="grid grid-cols-3 gap-2">
          {trafficOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedTraffic(index)}
              className={`p-3 rounded-lg border-2 transition-all bg-muted ${
                selectedTraffic === index
                  ? "border-primary"
                  : "border-border"
              }`}
            >
              <div className="text-xs font-bold mb-1">{option.size}</div>
              <div className="text-sm font-bold">{option.price} ₽</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-3">Количество устройств</p>
        <div className="flex items-center justify-between bg-card rounded-lg p-4">
          <button
            onClick={() => setDeviceCount(Math.max(1, deviceCount - 1))}
            className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Minus className="w-5 h-5 text-primary-foreground" />
          </button>
          <span className="text-2xl font-bold">{deviceCount}</span>
          <button
            onClick={() => setDeviceCount(deviceCount + 1)}
            className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Plus className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm px-1">
        <span>Итого</span>
        <span className="font-bold text-lg">{total} ₽</span>
      </div>

      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Применить
      </Button>
    </div>
  );
}
