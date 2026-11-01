"use client";

import React from "react";
import { TEMPLE_ZONES } from "@/lib/templeData";
import { ChevronRight, MapPin } from "lucide-react";

interface ZoneIndicatorProps {
  currentZone: string;
  onSelectZone: (zoneId: string) => void;
  onOpenMap: () => void;
}

export default function ZoneIndicator({
  currentZone,
  onSelectZone,
  onOpenMap,
}: ZoneIndicatorProps) {
  const activeZone = TEMPLE_ZONES.find((z) => z.id === currentZone) || TEMPLE_ZONES[0];

  return (
    <div className="fixed top-16 sm:top-20 inset-x-0 z-20 flex justify-center pointer-events-none px-4">
      <div className="pointer-events-auto zen-glass-pill rounded-full px-3.5 py-1.5 flex items-center gap-2 border border-amber-600/30 shadow-lg text-xs">
        <button
          onClick={onOpenMap}
          className="flex items-center gap-1.5 text-amber-300 font-serif font-semibold hover:text-amber-100 transition-colors"
        >
          <MapPin size={13} className="text-amber-400" />
          <span>{activeZone.name}</span>
        </button>

        <span className="text-amber-800">•</span>

        {/* Quick Jump buttons */}
        <div className="hidden sm:flex items-center gap-1.5 text-[11px]">
          {TEMPLE_ZONES.map((zone) => {
            if (zone.id === currentZone) return null;
            return (
              <button
                key={zone.id}
                onClick={() => onSelectZone(zone.id)}
                className="px-2 py-0.5 rounded-full text-stone-400 hover:text-amber-200 hover:bg-stone-900/60 transition-colors"
              >
                {zone.shortName}
              </button>
            );
          })}
        </div>

        <button
          onClick={onOpenMap}
          className="sm:hidden text-[11px] text-amber-400/80 hover:text-amber-200"
        >
          Đổi khu vực
        </button>
      </div>
    </div>
  );
}

