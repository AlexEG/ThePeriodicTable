import ElementBtn from "./ElementBtn";
import { colStart, rowStart } from "./RowColClasses";
import PeriodicTableData from "../../PubChemElements_all.json";
import { btnBgColor } from "./utils";

function Main({
  ElementNumberInPreview,
}: {
  ElementNumberInPreview(elementNumber: number): void;
}) {
  const elements = PeriodicTableData.element.map((x) => {
    return (
      <ElementBtn
        key={x[0]}
        row={rowStart[+x[17] - 1]}
        col={colStart[+x[18] - 1]}
        AtomicNumber={x[0]}
        Symbol={x[1]}
        Name={x[2]}
        AtomicMass={x[3]}
        bgColor={btnBgColor(x[15])}
        ElementNumberInPreview={ElementNumberInPreview}
      />
    );
  });

  return (
    <main className="bg-black pt-10 px-4  h-[calc(100%-11rem)] overflow-auto select-none">
      <div className="grid grid-cols-18 grid-rows-9 gap-1 mx-auto w-fit">
        {elements}

        <div className="relative col-start-3 row-start-6 row-end-10 w-full h-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute stroke-gray-200 dark:stroke-gray-200/20 stroke-1 left-0"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 89.21875 352"
          >
            <polygon
              points="0,0 89.21875,180 89.21875,260 0,80"
              fill="rgba(0,255,255,0.25)"
            ></polygon>
            <polygon
              points="0,92 89.21875,272 89.21875,352 0,172"
              fill="rgba(64,255,192,0.25)"
            ></polygon>
          </svg>
        </div>
      </div>
    </main>
  );
}
export default Main;
