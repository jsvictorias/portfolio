import { useEffect, useState } from "react";

type UseTypingOptions = {
  text: string;
  startDelay?: number;   
  typingSpeed?: number;  
};

export function useTyping({ text, startDelay = 0, typingSpeed = 80 }: UseTypingOptions) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    timeoutId = setTimeout(() => {
      let index = 0;

      intervalId = setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));

        if (index >= text.length) {
          if (intervalId) clearInterval(intervalId);
        }
      }, typingSpeed);
    }, startDelay);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, startDelay, typingSpeed]);

  return displayedText;
}
