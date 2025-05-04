import * as S from "./style";
import { FlowerGrassProps } from "./props";

export const FlowerGrass = ({ numb }: FlowerGrassProps) => {
  return (
    <S.FlowerGrass className={`flower__grass--${numb}`}>
      <S.FlowerGrassTop />
      <S.FlowerGrassBottom />
      <S.FlowerGrassLeaf className="flower__grass__leaf--1" />
      <S.FlowerGrassLeaf className="flower__grass__leaf--2" />
      <S.FlowerGrassLeaf className="flower__grass__leaf--3" />
      <S.FlowerGrassLeaf className="flower__grass__leaf--4" />
      <S.FlowerGrassLeaf className="flower__grass__leaf--5" />
      <S.FlowerGrassLeaf className="flower__grass__leaf--6" />
      <S.FlowerGrassLeaf className="flower__grass__leaf--7" />
      <S.FlowerGrassLeaf className="flower__grass__leaf--8" />
      <S.FlowerGrassOverlay />
    </S.FlowerGrass>
  );
};
