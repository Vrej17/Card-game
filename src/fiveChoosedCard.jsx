import { CardsGhar, CardsQyap, CardsSirt, CardsXach } from "./cardicons";
export default function FiveChoosedCard({
  fiveChoosedCard,
  setFiveChoosedCard,
  cardsObj,
  randoming,
  nextLevel
}) {
  return (
    <>
      {fiveChoosedCard ? (
        <div className="bg-white border w-44 h-64 mt-5 rounded-sm flex flex-col text-[60px]">
          {fiveChoosedCard <= 160 ? (
            <>
              {cardsObj.value.six}
              {fiveChoosedCard <= 40 ? (
                <CardsQyap />
              ) : fiveChoosedCard <= 80 ? (
                <CardsGhar />
              ) : fiveChoosedCard <= 120 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : fiveChoosedCard < 193 ? (
            <>
              {cardsObj.value.seven}
              {fiveChoosedCard < 168 ? (
                <CardsQyap />
              ) : fiveChoosedCard < 176 ? (
                <CardsGhar />
              ) : fiveChoosedCard < 184 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : fiveChoosedCard < 226 ? (
            <>
              {cardsObj.value.eight}
              {fiveChoosedCard < 199 ? (
                <CardsQyap />
              ) : fiveChoosedCard < 209 ? (
                <CardsGhar />
              ) : fiveChoosedCard < 218 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : fiveChoosedCard < 257 ? (
            <>
              {cardsObj.value.nine}
              {fiveChoosedCard < 234 ? (
                <CardsQyap />
              ) : fiveChoosedCard < 242 ? (
                <CardsGhar />
              ) : fiveChoosedCard < 250 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : fiveChoosedCard < 285 ? (
            <>
              {cardsObj.value.ten}
              {fiveChoosedCard < 264 ? (
                <CardsQyap />
              ) : fiveChoosedCard < 272 ? (
                <CardsGhar />
              ) : fiveChoosedCard < 279 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : (
            <>
              {cardsObj.value.eleven}
              {fiveChoosedCard < 292 ? (
                <CardsQyap />
              ) : fiveChoosedCard < 297 ? (
                <CardsGhar />
              ) : fiveChoosedCard < 303 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          )}
        </div>
      ) : (
        <button
        disabled={nextLevel>22?true:false}
          onClick={() => randoming(setFiveChoosedCard)}
          className=" bg-orange-900 border w-44 h-64 mt-5 text-white"
        >
          5
        </button>
      )}
    </>
  );
}
