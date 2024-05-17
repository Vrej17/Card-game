import { CardsGhar, CardsQyap, CardsXach, CardsSirt } from "./cardicons";
export default function SevenChoosedCard({
  sevenChoosedCard,
  setSevenChoosedCard,
  cardsObj,
  randoming,
  nextLevel
}) {
  return (
    <>
      {sevenChoosedCard ? (
        <div className="bg-white border w-44 h-64 mt-5 rounded-sm flex flex-col text-[60px]">
          {sevenChoosedCard <= 160 ? (
            <>
              {cardsObj.value.six}
              {sevenChoosedCard <= 40 ? (
                <CardsQyap />
              ) : sevenChoosedCard <= 80 ? (
                <CardsGhar />
              ) : sevenChoosedCard <= 120 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : sevenChoosedCard < 193 ? (
            <>
              {cardsObj.value.seven}
              {sevenChoosedCard < 168 ? (
                <CardsQyap />
              ) : sevenChoosedCard < 176 ? (
                <CardsGhar />
              ) : sevenChoosedCard < 184 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : sevenChoosedCard < 226 ? (
            <>
              {cardsObj.value.eight}
              {sevenChoosedCard < 199 ? (
                <CardsQyap />
              ) : sevenChoosedCard < 209 ? (
                <CardsGhar />
              ) : sevenChoosedCard < 218 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : sevenChoosedCard < 257 ? (
            <>
              {cardsObj.value.nine}
              {sevenChoosedCard < 234 ? (
                <CardsQyap />
              ) : sevenChoosedCard < 242 ? (
                <CardsGhar />
              ) : sevenChoosedCard < 250 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : sevenChoosedCard < 285 ? (
            <>
              {cardsObj.value.ten}
              {sevenChoosedCard < 264 ? (
                <CardsQyap />
              ) : sevenChoosedCard < 272 ? (
                <CardsGhar />
              ) : sevenChoosedCard < 279 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : (
            <>
              {cardsObj.value.eleven}
              {sevenChoosedCard < 292 ? (
                <CardsQyap />
              ) : sevenChoosedCard < 297 ? (
                <CardsGhar />
              ) : sevenChoosedCard < 303 ? (
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
          onClick={() => randoming(setSevenChoosedCard)}
          className=" bg-orange-900 border w-44 h-64 mt-5 text-white"
        >
          7
        </button>
      )}
    </>
  );
}
