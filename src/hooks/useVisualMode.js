import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    setHistory((prev) => {
      if (replace) {
        let replaceValue = [...prev];
        replaceValue.splice(-1, 1, newMode);

        return replaceValue;
      }
      return [...prev, newMode];
    });
  };

  const back = () => {
    if (history.length > 1) {
      setHistory((prev) => [...prev].slice(0, -1));
      setMode(history[history.length - 2]);
    }
  };

  return { mode, transition, back };
}
