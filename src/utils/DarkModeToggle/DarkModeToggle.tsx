import { useState, useEffect } from "react";
import * as S from "./style";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <S.ToggleWrapper>
      <S.ToggleInput
        checked={!isDark}
        onChange={(e) => setIsDark(!e.target.checked)}
      />
      <S.Slider>
        <S.IconWrapper checked={!isDark}>
          {!isDark ? (
            <span style={{ paddingLeft: "10px", fontSize: "1.7rem" }}>☀︎</span>
          ) : (
            <span>⏾</span>
          )}
        </S.IconWrapper>
      </S.Slider>
    </S.ToggleWrapper>
  );
};
