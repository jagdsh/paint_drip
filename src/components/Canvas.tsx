import React from "react";

interface Props {
  canvasRef?: React.MutableRefObject<HTMLCanvasElement | undefined>;
  width?: number;
}

export const Canvas: React.FC<Props> = ({ canvasRef}) => {
  return (
    <section>
      <canvas ref={canvasRef as any} />
    </section>
  );
};
