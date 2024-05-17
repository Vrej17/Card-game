import { CardsGhar, CardsQyap, CardsSirt, CardsXach } from "./cardicons";

export default function FirstChoosedCard({
  firstChoosedCard,
  setFirstChoosedCard,
  cardsObj,
  randoming
}) {
  return (
    <>
      {firstChoosedCard ? (
        <div className="bg-white w-44 h-64 flex mt-5 border rounded-sm flex-col text-[60px]">
          {firstChoosedCard <= 160 ? (
            <>
              {cardsObj.value.six}
              {firstChoosedCard <= 40 ? (
                <CardsQyap />
              ) : firstChoosedCard <= 80 ? (
                <CardsGhar />
              ) : firstChoosedCard <= 120 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : firstChoosedCard < 193 ? (
            <>
              {cardsObj.value.seven}
              {firstChoosedCard < 168 ? (
                <CardsQyap />
              ) : firstChoosedCard < 176 ? (
                <CardsGhar />
              ) : firstChoosedCard < 184 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : firstChoosedCard < 226 ? (
            <>
              {cardsObj.value.eight}
              {firstChoosedCard < 199 ? (
                <CardsQyap />
              ) : firstChoosedCard < 209 ? (
                <CardsGhar />
              ) : firstChoosedCard < 218 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : firstChoosedCard < 257 ? (
            <>
              {cardsObj.value.nine}
              {firstChoosedCard < 234 ? (
                <CardsQyap />
              ) : firstChoosedCard < 242 ? (
                <CardsGhar />
              ) : firstChoosedCard < 250 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : firstChoosedCard < 285 ? (
            <>
              {cardsObj.value.ten}
              {firstChoosedCard < 264 ? (
                <CardsQyap />
              ) : firstChoosedCard < 272 ? (
                <CardsGhar />
              ) : firstChoosedCard < 279 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          ) : (
            <>
              {cardsObj.value.eleven}
              {firstChoosedCard < 292 ? (
                <CardsQyap />
              ) : firstChoosedCard < 297 ? (
                <CardsGhar />
              ) : firstChoosedCard < 303 ? (
                <CardsSirt />
              ) : (
                <CardsXach />
              )}
            </>
          )}
        </div>
      ) : (
        <button
          onClick={() => randoming(setFirstChoosedCard)}
          className="bg-orange-900 border w-44 h-64 mt-5 text-white"
        >
          1
        </button>
      )}
    </>
  );
}
