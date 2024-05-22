import { useEffect, useState } from "react";
import { CardsQyap, CardsGhar, CardsXach, CardsSirt } from "./cardicons";
import "./index.css";

export default function Blotgame() {
  const [cardsList, setClassList] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ]);
  const [catchings, setCatchings] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [cardGameEnd, setCardGameEnd] = useState(0);

  const mastery = [<CardsQyap />, <CardsGhar />, <CardsXach />, <CardsSirt />];
  const ovqerkan = ["9", "10", "J", "Q", "K", "A"];

  function randoming(index) {
    let mathRandom = Math.round(Math.random() * 24);
    if (mathRandom === 0) mathRandom++;
    if (cardsList.includes(mathRandom)) {
      setClassList(cardsList.filter((i) => i !== mathRandom));
      setCatchings((prev) => {
        const newItem = [...prev];
        newItem[index] = mathRandom;
        return newItem;
      });
    }
    if (!cardsList.includes(mathRandom)) {
      return randoming(index);
    }
  }
  useEffect(() => {
    if (!catchings.includes(0)) {
      let arrayList = [...catchings];
      let array = arrayList.sort((a, b) => a - b);
      let count = 0;
      for (let i = 0; i < array.length - 1; i++) {
        if (count === 0 && ((array[i] - 1) / 4) % 1 !== 0) continue;
        if (array[i] === array[i + 1] - 1) {
          count++;
          if (count === 3) {
            console.log("4tuxt");
            return setCardGameEnd(count);
          }
        } else count = 0;
      }
      for (let i = 0; i < array.length - 1; i++) {
        if (array.includes(array[i] + 4)) {
          if (array.includes(array[i] + 8)) {
            if (array.includes(array[i] + 12)) {
              if (array.includes(array[i] + 16)) {
                return setCardGameEnd(100);
              }
              return setCardGameEnd(50);
            }
            return setCardGameEnd(30);
          }
        }
      }
    }
  }, [setCardGameEnd, catchings]);
  return (
    <div className="w-full bg-slate-800 h-full px-10 shadow-inset">
      <h1 className="text-center text-slate-100 text-[30px] font-mono">
        B l o t G a m e
      </h1>
      <div className="rounded-3xl px-10 py-2 flex bg-red-700 justify-center border border-white items-center flex-col">
        <div className="gap-x-6 w-[850px] flex pl-10 flex-wrap">
          {catchings.map((v, index) =>
            v !== 0 ? (
              <div
                className="bg-white w-44 h-64 flex mt-5 border rounded-sm flex-col text-[60px] text-center"
                key={index}
              >
                {ovqerkan[Math.floor((v - 1) / 4)]}
                {mastery[v % 4 === 0 ? 3 : (v % 4) - 1]}
              </div>
            ) : (
              <button
                key={index}
                onClick={() => randoming(index)}
                className="bg-gray-700 border w-44 h-64 mt-5 text-white"
              >
                {index + 1}
              </button>
            )
          )}
          {cardGameEnd >= 3 ? (
            <div className="absolute text-white bg-slate-700 opacity-90 rounded-xl w-96 h-28 left-20 text-center text-3xl pt-8">
              DUQ BRNEL EQ{" "}
              {cardGameEnd === 3 ? (
                <>4TUXT</>
              ) : cardGameEnd === 100 ? (
                <>{cardGameEnd}</>
              ) : cardGameEnd === 50 ? (
                <>{cardGameEnd}</>
              ) : cardGameEnd === 30 ? (
                <>TERZ</>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
