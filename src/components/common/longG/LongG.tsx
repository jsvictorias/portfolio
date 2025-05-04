import { LongGProps } from "./props";
import * as S from "./style";

export const LongG = ({ index, delays }: LongGProps) => {
  return (
    <S.LongG className={`long-g--${index}`}>
      {delays.map((delay, i) => (
        <S.GrowAns key={i} style={{ "--d": delay } as React.CSSProperties}>
          <S.Leaf className={`leaf--${i}`} />
        </S.GrowAns>
      ))}
    </S.LongG>
  );
};
