import { useState } from "react";
import { CardsGhar, CardsQyap, CardsXach, CardsSirt } from "./cardicons";
import { Link } from "react-router-dom";

export default function Blotgame() {
  const [blotFirstCard, setBlotFirstCard] = useState(0);
  const [blotSecondCard, setBlotSecondCard] = useState(0);
  const [blotThirdCard, setBlotThirdCard] = useState(0);
  const [blotFourCard, setBlotFourCard] = useState(0);
  const [blotFiveCard, setBlotFiveCard] = useState(0);
  const [blotSixCard, setBlotSixCard] = useState(0);
  const [blotSevenCard, setBlotSevenCard] = useState(0);
  const [blotEightCard, setBlotEightCard] = useState(0);
  const [cardsList, setClassList] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ]);
  const [catchings, setCatchings] = useState([]);
  const cardsObj = {
    nine: 9,
    ten: 10,
    valet: "J",
    dama: "Q",
    karol: "K",
    tuz: "A",
  };
  function randoming(choosing) {
    let mathRandom = Math.round(Math.random() * 23);
    if (mathRandom === 0) mathRandom++;
    setClassList(cardsList.filter((i) => i !== mathRandom));
    choosing(mathRandom);
  }
  return (
    <div className="w-full bg-green-800 h-full px-10">
      <h1 className="text-center text-slate-100 text-[30px] font-mono">
        Blot Game
      </h1>
      <div className="rounded-3xl px-10 py-2 bg-amber-900">
        {blotFirstCard ? (
          <div className="bg-white w-44 h-64 flex mt-5 border rounded-sm flex-col text-[60px] text-center">
            {blotFirstCard <= 4 ? (
              <>
                {cardsObj.nine}
                {blotFirstCard === 1 ? (
                  <CardsQyap />
                ) : blotFirstCard === 2 ? (
                  <CardsGhar />
                ) : blotFirstCard === 3 ? (
                  <CardsXach />
                ) : blotFirstCard === 4 ? (
                  <CardsSirt />
                ) : null}
              </>
            ) : blotFirstCard <= 8 ? (
              <>
                {cardsObj.ten}
                {blotFirstCard === 5 ? (
                  <CardsQyap />
                ) : blotFirstCard === 6 ? (
                  <CardsGhar />
                ) : blotFirstCard === 7 ? (
                  <CardsXach />
                ) : blotFirstCard === 8 ? (
                  <CardsSirt />
                ) : null}
              </>
            ) : blotFirstCard <= 12 ? (
              <>
                {cardsObj.valet}
                {blotFirstCard === 9 ? (
                  <CardsQyap />
                ) : blotFirstCard === 10 ? (
                  <CardsGhar />
                ) : blotFirstCard === 11 ? (
                  <CardsXach />
                ) : blotFirstCard === 12 ? (
                  <CardsSirt />
                ) : null}
              </>
            ) : blotFirstCard <= 16 ? (
              <>
                {cardsObj.dama}
                {blotFirstCard === 13 ? (
                  <CardsQyap />
                ) : blotFirstCard === 14 ? (
                  <CardsGhar />
                ) : blotFirstCard === 15 ? (
                  <CardsXach />
                ) : blotFirstCard === 16 ? (
                  <CardsSirt />
                ) : null}
              </>
            ) : blotFirstCard <= 20 ? (
              <>
                {cardsObj.karol}
                {blotFirstCard === 17 ? (
                  <CardsQyap />
                ) : blotFirstCard === 18 ? (
                  <CardsGhar />
                ) : blotFirstCard === 19 ? (
                  <CardsXach />
                ) : blotFirstCard === 20 ? (
                  <CardsSirt />
                ) : null}
              </>
            ) : blotFirstCard <= 24 ? (
              <>
                {cardsObj.tuz}
                {blotFirstCard === 21 ? (
                  <CardsQyap />
                ) : blotFirstCard === 22 ? (
                  <CardsGhar />
                ) : blotFirstCard === 23 ? (
                  <CardsXach />
                ) : blotFirstCard === 24 ? (
                  <CardsSirt />
                ) : null}
              </>
            ) : null}
          </div>
        ) : (
          <button
            onClick={() => randoming(setBlotFirstCard)}
            className="bg-orange-900 border w-44 h-64 mt-5 text-white"
          >
            1
          </button>
        )}
      </div>
    </div>
  );
}
