import * as S from "./style";
import GrowAnsProps from "./props";

export const GrowAns = ({ delay, variant, numb }: GrowAnsProps) => {
  const style = { "--d": delay } as React.CSSProperties;

  if (variant === "right") {
    return (
      <S.GrowAns style={style}>
        <S.FlowerGRight className={`flower__g-right--${numb}`}>
          <S.GRightLeaf className="leaf" />
        </S.FlowerGRight>
      </S.GrowAns>
    );
  }

  if (variant === "front") {
    return (
      <S.GrowAns style={style}>
        <S.FlowerGFront>
          {Array.from({ length: 8 }, (_, i) => (
            <S.FlowerGFrontLeafWrapper
              key={i}
              className={`flower__g-front__leaf-wrapper--${i + 1}`}
            >
              <S.FlowerGFrontLeaf />
            </S.FlowerGFrontLeafWrapper>
          ))}
          <S.FlowerGFrontLine />
        </S.FlowerGFront>
      </S.GrowAns>
    );
  }

  if (variant === "fr") {
    return (
      <S.GrowAns style={style}>
        <S.FlowerGFr>
          <S.GFrLeaf className="leaf" />
          {Array.from({ length: 8 }, (_, i) => (
            <S.FlowerGFrLeafStyled
              key={i}
              className={`flower__g-fr__leaf--${i + 1}`}
            />
          ))}
        </S.FlowerGFr>
      </S.GrowAns>
    );
  }

  return null;
};
