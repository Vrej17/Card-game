import { CardsGhar, CardsQyap, CardsSirt, CardsXach } from "./cardicons";
export default function EightChoosedCard({
  eightChoosedCard,
  setEightChoosedCard,
  cardsObj,
  randoming,
  nextLevel,
}) {
  return (
    <>
      {eightChoosedCard ? (
        <div className="bg-white border w-44 h-64 mt-5 rounded-sm flex flex-col text-[60px]">
          {eightChoosedCard <= 160 ? (
            <>
              {cardsObj.value.six}
              {eightChoosedCard <= 40 ? (
                <CardsQyap />
              ) : eightChoosedCard <= 80 ? (
                <CardsGhar />
              ) : eightChoosedCard <= 120 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : eightChoosedCard < 193 ? (
            <>
              {cardsObj.value.seven}
              {eightChoosedCard < 168 ? (
                <CardsQyap />
              ) : eightChoosedCard < 176 ? (
                <CardsGhar />
              ) : eightChoosedCard < 184 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : eightChoosedCard < 226 ? (
            <>
              {cardsObj.value.eight}
              {eightChoosedCard < 199 ? (
                <CardsQyap />
              ) : eightChoosedCard < 209 ? (
                <CardsGhar />
              ) : eightChoosedCard < 218 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : eightChoosedCard < 257 ? (
            <>
              {cardsObj.value.nine}
              {eightChoosedCard < 234 ? (
                <CardsQyap />
              ) : eightChoosedCard < 242 ? (
                <CardsGhar />
              ) : eightChoosedCard < 250 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : eightChoosedCard < 285 ? (
            <>
              {cardsObj.value.ten}
              {eightChoosedCard < 264 ? (
                <CardsQyap />
              ) : eightChoosedCard < 272 ? (
                <CardsGhar />
              ) : eightChoosedCard < 279 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : (
            <>
              {cardsObj.value.eleven}
              {eightChoosedCard < 292 ? (
                <CardsQyap />
              ) : eightChoosedCard < 297 ? (
                <CardsGhar />
              ) : eightChoosedCard < 303 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          )}
        </div>
      ) : (
        <button
          disabled={nextLevel > 22 ? true : false}
          onClick={() => randoming(setEightChoosedCard)}
          className=" bg-orange-900 border w-44 h-64 mt-5 text-white"
        >
          8
        </button>
      )}
    </>
  );
}
