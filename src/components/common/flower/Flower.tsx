import * as S from "./style";
import { FlowerProps } from "./props";

export const Flower = ({numb}: FlowerProps) => {
  return (
    <S.Flower numb={numb} className={`flower__grass--${numb}`}>
      <S.FlowerLeafs className="flower__leafs--1">
        <S.FlowerLeaf className="flower__leaf--1" />
        <S.FlowerLeaf className="flower__leaf--2" />
        <S.FlowerLeaf className="flower__leaf--3" />
        <S.FlowerLeaf className="flower__leaf--4" />
        <S.FlowerWhiteCircle className="flower__white-circle" />
        <S.FlowerLight className="flower__light--1" />
        <S.FlowerLight className="flower__light--2" />
        <S.FlowerLight className="flower__light--3" />
        <S.FlowerLight className="flower__light--4" />
        <S.FlowerLight className="flower__light--5" />
        <S.FlowerLight className="flower__light--6" />
        <S.FlowerLight className="flower__light--7" />
        <S.FlowerLight className="flower__light--8" />
      </S.FlowerLeafs>
      <S.FlowerLine className="flower__line flower__line--1">
        <S.FlowerLineLeaf className="flower__line__leaf--1" />
        <S.FlowerLineLeaf className="flower__line__leaf--2" />
        <S.FlowerLineLeaf className="flower__line__leaf--3" />
        <S.FlowerLineLeaf className="flower__line__leaf--4" />
        <S.FlowerLineLeaf className="flower__line__leaf--5" />
        <S.FlowerLineLeaf className="flower__line__leaf--6" />
      </S.FlowerLine>
    </S.Flower>
  );
};
