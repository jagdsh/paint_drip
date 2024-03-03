import "./App.css";
import { Skills } from "./components/Skills";
import { Canvas } from "./components/Canvas";
import { usePaintDripModel } from "./components/PaintDripModel";
import { Toolbar } from "./components/Toolbar";
import { useCallback, useState } from "react";

function App() {
  const [dateUrl, setDataUrl] = useState("#");
  const [{canvas, ...state}, {...api}] = usePaintDripModel();
  const handleDownload = useCallback(() => {
    if (!canvas || !canvas.current) return;

    setDataUrl(canvas.current.toDataURL("image/png"));
  }, [canvas]);
  
  const toolbarProps = { ...state, ...api, dateUrl, handleDownload };
  const { onChange } = api

  return (
    <main className="App">
      <Toolbar {...toolbarProps} />
      <Skills onChange={onChange} />
      <Canvas canvasRef={canvas} />
    </main>
  );
}

export default App;
