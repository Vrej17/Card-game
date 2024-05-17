import { CardsGhar, CardsSirt, CardsXach, CardsQyap } from "./cardicons";
export default function FourChoosedCard({
  fourChoosedCard,
  setFourChoosedCard,
  cardsObj,
  randoming,
  nextLevel,
}) {
  return (
    <>
      {fourChoosedCard ? (
        <div className="bg-white w-44 h-64 mt-5 border flex rounded-sm flex-col text-[60px]">
          {fourChoosedCard <= 160 ? (
            <>
              {cardsObj.value.six}
              {fourChoosedCard <= 40 ? (
                <CardsQyap />
              ) : fourChoosedCard <= 80 ? (
                <CardsGhar />
              ) : fourChoosedCard <= 120 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : fourChoosedCard < 193 ? (
            <>
              {cardsObj.value.seven}
              {fourChoosedCard < 168 ? (
                <CardsQyap />
              ) : fourChoosedCard < 176 ? (
                <CardsGhar />
              ) : fourChoosedCard < 184 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : fourChoosedCard < 226 ? (
            <>
              {cardsObj.value.eight}
              {fourChoosedCard < 199 ? (
                <CardsQyap />
              ) : fourChoosedCard < 209 ? (
                <CardsGhar />
              ) : fourChoosedCard < 218 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : fourChoosedCard < 257 ? (
            <>
              {cardsObj.value.nine}
              {fourChoosedCard < 234 ? (
                <CardsQyap />
              ) : fourChoosedCard < 242 ? (
                <CardsGhar />
              ) : fourChoosedCard < 250 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : fourChoosedCard < 285 ? (
            <>
              {cardsObj.value.ten}
              {fourChoosedCard < 264 ? (
                <CardsQyap />
              ) : fourChoosedCard < 272 ? (
                <CardsGhar />
              ) : fourChoosedCard < 279 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : (
            <>
              {cardsObj.value.eleven}
              {fourChoosedCard < 292 ? (
                <CardsQyap />
              ) : fourChoosedCard < 297 ? (
                <CardsGhar />
              ) : fourChoosedCard < 303 ? (
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
          onClick={() => randoming(setFourChoosedCard)}
          className="bg-orange-900 border w-44 h-64 mt-5 text-white"
        >
          4
        </button>
      )}
    </>
  );
}
