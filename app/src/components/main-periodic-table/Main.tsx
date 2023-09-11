import ElementBtn from "./ElementBtn";
import { colStart, rowStart } from "./RowColClasses";

function Main() {
  return (
    <div className="bg-black pt-10 px-4 pb-4 h-[calc(100%-11rem)] grid grid-cols-18 grid-rows-9 gap-1">
      <ElementBtn row={rowStart[2]} col={colStart[1]} />
      <ElementBtn row={rowStart[2]} col={colStart[2]} />
      <ElementBtn row={rowStart[2]} col={colStart[3]} />
      <ElementBtn row={rowStart[2]} col={colStart[4]} />
      <ElementBtn row={rowStart[3]} col={colStart[1]} />
      <ElementBtn row={rowStart[3]} col={colStart[2]} />
      <ElementBtn row={rowStart[3]} col={colStart[3]} />
      <ElementBtn row={rowStart[3]} col={colStart[4]} />
      <ElementBtn row={rowStart[3]} col={colStart[17]} />
      <ElementBtn row={rowStart[4]} col={colStart[7]} />
      <ElementBtn row={rowStart[6]} col={colStart[5]} />
    </div>
  );
}
export default Main;
