import { useEffect, useState } from "react";
import "./index.css";
import { CardsXach, CardsSirt, CardsGhar, CardsQyap } from "./cardicons.jsx";
import FirstChoosedCard from "./firstChoosedcard.jsx";
import SecondChoosedCard from "./secondChoosedCard.jsx";
import ThirdChoosedCard from "./thirdChoosedCard.jsx";
import FourChoosedCard from "./fourChoosedCard.jsx";
import FiveChoosedCard from "./fiveChoosedCard.jsx";
import SixChoosedCard from "./sixChoosedCard.jsx";
import SevenChoosedCard from "./sevenChoosedCard.jsx";
import EightChoosedCard from "./eightChoosedCard.jsx";


function StartingOfApp({ nextLevel, setNextLevel, cardsObj }) {
  const [firstChoosedCard, setFirstChoosedCard] = useState(0);
  const [secondChoosedCard, setSecondChoosedCard] = useState(0);
  const [thirdChoosedCard, setThirdChoosedCard] = useState(0);
  const [fourChoosedCard, setFourChoosedCard] = useState(0);
  const [fiveChoosedCard, setFiveChoosedCard] = useState(0);
  const [sixChoosedCard, setSixChoosedCard] = useState(0);
  const [sevenChoosedCard, setSevenChoosedCard] = useState(0);
  const [eightChoosedCard, setEightChoosedCard] = useState(0);
  const [correctCards, setCorrectCards] = useState([]);

  function randoming(choosing) {
    const mathRandom = Math.random() * 300 + nextLevel;
    choosing(mathRandom)
    if (mathRandom <= 160) {
      if (mathRandom <= 40) {
        if (correctCards.includes("qyap")) {
          setTimeout(() => {
            return setNextLevel((prev) => prev);
          }, 400);
          return;
        }
        setCorrectCards((prev) => [...prev, "qyap"]);
        setTimeout(() => {
          return setNextLevel((prev) => prev + 1);
        }, 800);
        return;
      }
      if (mathRandom <= 80) {
        if (correctCards.includes("ghar")) {
          setTimeout(() => {
            return setNextLevel((prev) => prev);
          }, 400);
          return;
        }
        setCorrectCards((prev) => [...prev, "ghar"]);
        setTimeout(() => {
          return setNextLevel((prev) => prev + 1);
        }, 800);
        return;
      }
      if (mathRandom <= 120) {
        if (correctCards.includes("sirt")) {
          setTimeout(() => {
            return setNextLevel((prev) => prev);
          }, 400);
          return;
        }
        setCorrectCards((prev) => [...prev, "sirt"]);
        setTimeout(() => {
          return setNextLevel((prev) => prev + 1);
        }, 800);
        return;
      }
      if (mathRandom <= 160) {
        if (correctCards.includes("xach")) {
          setTimeout(() => {
            return setNextLevel((prev) => prev);
          }, 200);
          return;
        }
        setCorrectCards((prev) => [...prev, "xach"]);
        setTimeout(() => {
          return setNextLevel((prev) => prev + 1);
        }, 800);
      }
    }
  }
  return (
    <div
      className="bg-stone-400 rounded pt-1 flex text-center px-10
  pb-2 text-[25px] flex-col"
    >
      <h1> Choose the card please for starting the game</h1>
      <div className="pl-[190px] bg-slate-600 rounded-3xl border pb-3">
        <div className="gap-x-10 flex">
          <FirstChoosedCard
            nextLevel={nextLevel}
            firstChoosedCard={firstChoosedCard}
            setFirstChoosedCard={setFirstChoosedCard}
            cardsObj={cardsObj}
            randoming={randoming}
          />
          <SecondChoosedCard
            nextLevel={nextLevel}
            secondChoosedCard={secondChoosedCard}
            setSecondChoosedCard={setSecondChoosedCard}
            cardsObj={cardsObj}
            randoming={randoming}
          />
          <ThirdChoosedCard
            nextLevel={nextLevel}
            thirdChoosedCard={thirdChoosedCard}
            setThirdChoosedCard={setThirdChoosedCard}
            cardsObj={cardsObj}
            randoming={randoming}
          />
          <FourChoosedCard
            nextLevel={nextLevel}
            fourChoosedCard={fourChoosedCard}
            setFourChoosedCard={setFourChoosedCard}
            cardsObj={cardsObj}
            randoming={randoming}
          />
        </div>

        <div className="flex gap-x-10">
          <FiveChoosedCard
            nextLevel={nextLevel}
            fiveChoosedCard={fiveChoosedCard}
            setFiveChoosedCard={setFiveChoosedCard}
            cardsObj={cardsObj}
            randoming={randoming}
          />
          <SixChoosedCard
            nextLevel={nextLevel}
            sixChoosedCard={sixChoosedCard}
            setSixChoosedCard={setSixChoosedCard}
            cardsObj={cardsObj}
            randoming={randoming}
          />
          <SevenChoosedCard
            nextLevel={nextLevel}
            sevenChoosedCard={sevenChoosedCard}
            setSevenChoosedCard={setSevenChoosedCard}
            cardsObj={cardsObj}
            randoming={randoming}
          />
          <EightChoosedCard
            nextLevel={nextLevel}
            eightChoosedCard={eightChoosedCard}
            setEightChoosedCard={setEightChoosedCard}
            cardsObj={cardsObj}
            randoming={randoming}
          />
        </div>
      </div>
    </div>
  );
}

export default function CardApp() {
  const [nextLevel, setNextLevel] = useState(1);
  const [upLevel, setUplevel] = useState(false);
  const cardsObj = {
    cards: {
      sirt: <CardsSirt />,
      qyap: <CardsQyap />,
      xach: <CardsXach />,
      ghar: <CardsGhar />,
    },
    value: { six: "A", seven: "J", eight: "Q", nine: 9, ten: 10, eleven: "K" },
  };
  if (nextLevel > 22) {
    setTimeout(() => {
      return setNextLevel(1);
    }, 800);
  }

  useEffect(() => {
    if (
      nextLevel === 5 ||
      nextLevel === 9 ||
      nextLevel === 13 ||
      nextLevel === 17 ||
      nextLevel === 21
    ) {
      setUplevel(true);
      setTimeout(() => {
        return setUplevel(false);
      }, 1700);
    }
  }, [nextLevel]);
  return (
    <div>
      {nextLevel < 5 ? (
        <StartingOfApp
          cardsObj={cardsObj}
          nextLevel={nextLevel}
          setNextLevel={setNextLevel}
        />
      ) : upLevel ? (
        <div className="w-72 h-28 bg-slate-300 rounded-2xl duration-200 absolute top-2 pt-[20px] text-center">
          <h1 className="text-[20px] font-mono font-semibold text-black">
            {nextLevel === 21 ? (
              <h1>YOU WON THE GAME !!!!!</h1>
            ) : (
              <h1>
                You Reach Next level{" "}
                {nextLevel === 5
                  ? 2
                  : nextLevel === 9
                  ? 3
                  : nextLevel === 13
                  ? 4
                  : nextLevel === 17
                  ? 5
                  : null}
              </h1>
            )}
          </h1>
        </div>
      ) : (
        <div className="w-72 h-28 bg-neutral-600 rounded-2xl duration-200 absolute top-2 pt-[20px] text-center">
          <h1 className="text-[20px] font-mono font-semibold text-black">
            YOU LOSE STARTING AGAIN !!!!
          </h1>
        </div>
      )}
      {nextLevel >= 5 && nextLevel < 9 ? (
        <StartingOfApp
          cardsObj={cardsObj}
          nextLevel={nextLevel}
          setNextLevel={setNextLevel}
        />
      ) : null}
      {nextLevel >= 9 && nextLevel < 13 ? (
        <StartingOfApp
          cardsObj={cardsObj}
          nextLevel={nextLevel}
          setNextLevel={setNextLevel}
        />
      ) : null}
      {nextLevel >= 13 && nextLevel < 17 ? (
        <StartingOfApp
          cardsObj={cardsObj}
          nextLevel={nextLevel}
          setNextLevel={setNextLevel}
        />
      ) : null}
      {nextLevel >= 17 && nextLevel < 21 ? (
        <StartingOfApp
          cardsObj={cardsObj}
          nextLevel={nextLevel}
          setNextLevel={setNextLevel}
        />
      ) : null}
    </div>
  );
}
