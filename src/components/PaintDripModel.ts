import { useRef, useState } from "react";

export const usePaintDripModel = () => {
  const canvas = useRef<HTMLCanvasElement>();
  const [currentColor, setCurrentColor] = useState("#000000");
  const selectedSaturation = useRef(100);
  const selectedLightness = useRef(50);
  const hue = useRef(0);

  const onChange = (value: number) => {
    const canvas = document.querySelector("canvas");
    canvas!.height = 60 + +value;
    const ctx = canvas!.getContext("2d")!;
    setCurrentColor(currentColor + +currentColor);
    ctx.fillStyle = `hsl(${currentColor},${selectedSaturation}%,${selectedLightness}%)`;
    ctx?.fillRect(10, 10, 100, 100);
  };

  const setCurrentSaturation = (e: any) => {
    setCurrentColor(
      `hsl(${hue.current},${e.currentTarget.value}%,${selectedLightness.current}%)`
    );
    selectedSaturation.current = e.currentTarget.value;
  };

  const setCurrentLightness = (e: any) => {
    setCurrentColor(
      `hsl(${hue.current},${selectedSaturation.current}%,${e.currentTarget.value}%)`
    );
    selectedLightness.current = e.currentTarget.value;
  };

  return [
    {
      canvas,
      currentColor
    },
    {
      onChange,
      setCurrentSaturation,
      setCurrentLightness,
    },
  ];
};
