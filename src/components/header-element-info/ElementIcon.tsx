import PeriodicTableData from "../../PubChemElements_all.json";
import { btnBgColor } from "../main-periodic-table/utils";

function ElementIcon({
  elementNumberInPreview,
}: {
  elementNumberInPreview: number;
}) {
  const [AtomicNumber, Symbol, Name, AtomicMass, GroupBlock] = [
    PeriodicTableData.element[elementNumberInPreview - 1][0],
    PeriodicTableData.element[elementNumberInPreview - 1][1],
    PeriodicTableData.element[elementNumberInPreview - 1][2],
    PeriodicTableData.element[elementNumberInPreview - 1][3],
    PeriodicTableData.element[elementNumberInPreview - 1][15],
  ];

  return (
    <section className="flex justify-center items-center w-full h-full">
      <div className="w-28 h-28 flex justify-center items-center  relative overflow-hidden">
        <div className="z-10 h-[95%] w-[95%] bg-black">
          <button
            className={`w-full h-full text-center leading-none py-px sm:py-1 shadow-inner border border-[hsla(0,0%,100%,0.2)] text-white/90 text-xs grid grid-cols-1 grid-rows-4 ${btnBgColor(
              PeriodicTableData.element[elementNumberInPreview - 1][15]
            )} `}
          >
            <div className="h-full flex flex-nowrap items-center px-1">
              <p
                className="text-left font-medium text-3xs text-xs flex-1 pr-2 "
                data-tooltip="Atomic Number"
              >
                {AtomicNumber}
              </p>
              <p
                className="text-2xs py-1 truncate"
                data-tooltip="Atomic Mass, u"
              >
                {AtomicMass}
              </p>
            </div>
            <div
              className="font-medium text-xl row-span-2 h-full pt-0.5"
              data-tooltip="Symbol"
            >
              <p>{Symbol}</p>
            </div>

            <div className="h-full -mt-2" data-tooltip="Name">
              <p>{Name}</p>
              <p className="pt-1 text-white/50 whitespace-nowrap text-[0.7rem]">
                {GroupBlock}
              </p>
            </div>
          </button>
        </div>

        <div className="absolute -top-6 -bottom-6 -left-6 -right-6  bg-gradient-to-r from-emerald-600 to-yellow-600 rounded-full animate-[spin_3s_linear_infinite]"></div>
      </div>
    </section>
  );
}
export default ElementIcon;
