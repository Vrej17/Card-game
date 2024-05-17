import { CardsGhar, CardsQyap, CardsSirt, CardsXach } from "./cardicons";
export default function SixChoosedCard({
  sixChoosedCard,
  setSixChoosedCard,
  cardsObj,
  randoming,
  nextLevel,
}) {
  return (
    <>
      {sixChoosedCard ? (
        <div className="bg-white border w-44 h-64 mt-5 rounded-sm flex flex-col text-[60px]">
          {sixChoosedCard <= 160 ? (
            <>
              {cardsObj.value.six}
              {sixChoosedCard <= 40 ? (
                <CardsQyap />
              ) : sixChoosedCard <= 80 ? (
                <CardsGhar />
              ) : sixChoosedCard <= 120 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : sixChoosedCard < 193 ? (
            <>
              {cardsObj.value.seven}
              {sixChoosedCard < 168 ? (
                <CardsQyap />
              ) : sixChoosedCard < 176 ? (
                <CardsGhar />
              ) : sixChoosedCard < 184 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : sixChoosedCard < 226 ? (
            <>
              {cardsObj.value.eight}
              {sixChoosedCard < 199 ? (
                <CardsQyap />
              ) : sixChoosedCard < 209 ? (
                <CardsGhar />
              ) : sixChoosedCard < 218 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : sixChoosedCard < 257 ? (
            <>
              {cardsObj.value.nine}
              {sixChoosedCard < 234 ? (
                <CardsQyap />
              ) : sixChoosedCard < 242 ? (
                <CardsGhar />
              ) : sixChoosedCard < 250 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : sixChoosedCard < 285 ? (
            <>
              {cardsObj.value.ten}
              {sixChoosedCard < 264 ? (
                <CardsQyap />
              ) : sixChoosedCard < 272 ? (
                <CardsGhar />
              ) : sixChoosedCard < 279 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : (
            <>
              {cardsObj.value.eleven}
              {sixChoosedCard < 292 ? (
                <CardsQyap />
              ) : sixChoosedCard < 297 ? (
                <CardsGhar />
              ) : sixChoosedCard < 303 ? (
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
          onClick={() => randoming(setSixChoosedCard)}
          className=" bg-orange-900 border w-44 h-64 mt-5 text-white"
        >
          6
        </button>
      )}
    </>
  );
}
