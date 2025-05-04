import * as S from "./style";
import React, { useEffect } from "react";
import { Flower } from "../../common/flower/Flower";
import { FlowerGrass } from "../../common/flowergrass/FlowerGrass";
import { GrowAns } from "../../common/growans/GrowAns";
import { LongG } from "../../common/longG/LongG";
const FlowersComponent: React.FC = () => {
  useEffect(() => {
    document.body.classList.add("not-loaded");

    const timeout = setTimeout(() => {
      document.body.classList.remove("not-loaded");
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <S.GlobalStyle>
      <S.Night />
      <S.Flowers>
        
        <Flower numb="1" style={{ left: "30%", bottom: "40%" }} />
        <Flower numb="2" style={{ right: "30%", bottom: "40%" }} />
        <Flower numb="3" style={{ left: "50%", top: "30%" }} />
        <Flower numb="4" style={{ left: "50%", bottom: "60%" }} />

        <S.GrowAns style={{ "--d": "1.2s" } as React.CSSProperties}>
          <S.FlowerGLong>
            <S.FlowerGLongTop />
            <S.FlowerGLongBottom />
          </S.FlowerGLong>
        </S.GrowAns>

        <S.GrowingGrass>
          <FlowerGrass numb="1" />
        </S.GrowingGrass>

        <S.GrowingGrass>
          <FlowerGrass numb="2" />
        </S.GrowingGrass>

        <GrowAns variant="right" delay="2.4s" numb="1" />
        <GrowAns variant="right" delay="2.8s" numb="2" />
        <GrowAns variant="front" delay="2.8s" />
        <GrowAns variant="fr" delay="3.2s" />

        <LongG index={0} delays={["3s", "2.2s", "3.4s", "3.6s"]} />
        <LongG index={1} delays={["3.6s", "3.8s", "4s", "4.2s"]} />
        <LongG index={2} delays={["4s", "4.2s", "4.4s", "4.6s"]} />
        <LongG index={3} delays={["4s", "4.2s", "3s", "3.6s"]} />
        <LongG index={4} delays={["4s", "4.2s", "3s", "3.6s"]} />
        <LongG index={5} delays={["4s", "4.2s", "3s", "3.6s"]} />
        <LongG index={6} delays={["4.2s", "4.4s", "4.6s", "4.8s"]} />
        <LongG index={7} delays={["3s", "3.2s", "3.5s", "3.6s"]} />
      </S.Flowers>
    </S.GlobalStyle>
  );
};

export default FlowersComponent;
