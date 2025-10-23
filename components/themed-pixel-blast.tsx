"use client";

import { useTheme } from "@/components/theme-provider";
import PixelBlast from "./PixelBlast";

export default function ThemedPixelBlast() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <PixelBlast
      className="h-full w-full"
      variant="circle"
      pixelSize={3}
      color={isDark ? "#737373" : "#404040"} // neutral-500 for dark, neutral-700 for light
      patternScale={2}
      patternDensity={isDark ? 1.2 : 0.8}
      pixelSizeJitter={0.4}
      enableRipples={true}
      rippleSpeed={0.4}
      rippleThickness={0.12}
      rippleIntensityScale={1.2}
      liquid={true}
      liquidStrength={0.1}
      liquidRadius={1.2}
      liquidWobbleSpeed={5}
      speed={0.6}
      edgeFade={0.2}
      transparent={false}
    />
  );
}