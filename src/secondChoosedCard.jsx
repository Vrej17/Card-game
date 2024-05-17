import { CardsGhar, CardsQyap, CardsSirt, CardsXach } from "./cardicons";
export default function SecondChoosedCard({
  secondChoosedCard,
  setSecondChoosedCard,
  cardsObj,
  randoming,
  nextLevel
}) {
  return (
    <>
      {secondChoosedCard ? (
        <div className="bg-white w-44 h-64 flex mt-5 border rounded-sm flex-col text-[60px]">
          {secondChoosedCard <= 160 ? (
            <>
              {cardsObj.value.six}
              {secondChoosedCard <= 40 ? (
                <CardsQyap />
              ) : secondChoosedCard <= 80 ? (
                <CardsGhar />
              ) : secondChoosedCard <= 120 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : secondChoosedCard < 193 ? (
            <>
              {cardsObj.value.seven}
              {secondChoosedCard < 168 ? (
                <CardsQyap />
              ) : secondChoosedCard < 176 ? (
                <CardsGhar />
              ) : secondChoosedCard < 184 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : secondChoosedCard < 226 ? (
            <>
              {cardsObj.value.eight}
              {secondChoosedCard < 199 ? (
                <CardsQyap />
              ) : secondChoosedCard < 209 ? (
                <CardsGhar />
              ) : secondChoosedCard < 218 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : secondChoosedCard < 257 ? (
            <>
              {cardsObj.value.nine}
              {secondChoosedCard < 234 ? (
                <CardsQyap />
              ) : secondChoosedCard < 242 ? (
                <CardsGhar />
              ) : secondChoosedCard < 250 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : secondChoosedCard < 285 ? (
            <>
              {cardsObj.value.ten}
              {secondChoosedCard < 264 ? (
                <CardsQyap />
              ) : secondChoosedCard < 272 ? (
                <CardsGhar />
              ) : secondChoosedCard < 279 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : (
            <>
              {cardsObj.value.eleven}
              {secondChoosedCard < 292 ? (
                <CardsQyap />
              ) : secondChoosedCard < 297 ? (
                <CardsGhar />
              ) : secondChoosedCard < 303 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          )}
        </div>
      ) : (
        <button
        disabled={nextLevel>22 ? true : false}
          onClick={() => randoming(setSecondChoosedCard)}
          className="bg-orange-900 border w-44 h-64 mt-5 text-white"
        >
          2
        </button>
      )}
    </>
  );
}
