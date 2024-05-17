import { CardsGhar, CardsSirt, CardsQyap, CardsXach } from "./cardicons";
export default function ThirdChoosedCard({
  thirdChoosedCard,
  setThirdChoosedCard,
  cardsObj,
  randoming,
  nextLevel,
}) {
  return (
    <>
      {thirdChoosedCard ? (
        <div className="bg-white w-44 h-64 flex mt-5 border rounded-sm flex-col text-[60px]">
          {thirdChoosedCard <= 160 ? (
            <>
              {cardsObj.value.six}
              {thirdChoosedCard <= 40 ? (
                <CardsQyap />
              ) : thirdChoosedCard <= 80 ? (
                <CardsGhar />
              ) : thirdChoosedCard <= 120 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : thirdChoosedCard < 193 ? (
            <>
              {cardsObj.value.seven}
              {thirdChoosedCard < 168 ? (
                <CardsQyap />
              ) : thirdChoosedCard < 176 ? (
                <CardsGhar />
              ) : thirdChoosedCard < 184 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : thirdChoosedCard < 226 ? (
            <>
              {cardsObj.value.eight}
              {thirdChoosedCard < 199 ? (
                <CardsQyap />
              ) : thirdChoosedCard < 209 ? (
                <CardsGhar />
              ) : thirdChoosedCard < 218 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : thirdChoosedCard < 257 ? (
            <>
              {cardsObj.value.nine}
              {thirdChoosedCard < 234 ? (
                <CardsQyap />
              ) : thirdChoosedCard < 242 ? (
                <CardsGhar />
              ) : thirdChoosedCard < 250 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : thirdChoosedCard < 285 ? (
            <>
              {cardsObj.value.ten}
              {thirdChoosedCard < 264 ? (
                <CardsQyap />
              ) : thirdChoosedCard < 272 ? (
                <CardsGhar />
              ) : thirdChoosedCard < 279 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : (
            <>
              {cardsObj.value.eleven}
              {thirdChoosedCard < 292 ? (
                <CardsQyap />
              ) : thirdChoosedCard < 297 ? (
                <CardsGhar />
              ) : thirdChoosedCard < 303 ? (
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
          onClick={() => randoming(setThirdChoosedCard)}
          className="bg-orange-900 border w-44 h-64 mt-5 text-white"
        >
          3
        </button>
      )}
    </>
  );
}
