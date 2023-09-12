interface ElementBtn {
  row: string;
  col: string;
  AtomicNumber: string;
  Symbol: string;
  Name: string;
  AtomicMass: string;
  bgColor: string;
  ElementNumberInPreview(elementNumber: number): void;
}
function ElementBtn({
  row,
  col,
  AtomicNumber,
  Symbol,
  Name,
  AtomicMass,
  bgColor,
  ElementNumberInPreview,
}: ElementBtn) {
  return (
    <button
      onClick={() => ElementNumberInPreview(+AtomicNumber)}
      className={`element-btn w-full h-full text-center leading-none py-px sm:py-1 shadow-inner border border-[hsla(0,0%,100%,0.2)] text-white/90 text-xs grid grid-cols-1 grid-rows-4 brightness-95 hover:brightness-110  hover:drop-shadow-[0_0_40px_#fff] ${row} ${col} ${bgColor}`}
      data-atomic-number={AtomicNumber}
    >
      <div className="h-full flex flex-nowrap items-center px-1">
        <div
          className="text-left font-medium text-3xs text-xs flex-1 pr-2 "
          data-tooltip="Atomic Number"
        >
          {AtomicNumber}
        </div>
        <div className="text-2xs py-1 truncate" data-tooltip="Atomic Mass, u">
          {AtomicMass}
        </div>
      </div>

      <div
        className="font-medium text-xl row-span-2 h-full"
        data-tooltip="Symbol"
      >
        {Symbol}
      </div>

      <div className="h-full truncate" data-tooltip="Name">
        {Name}
      </div>
    </button>
  );
}
export default ElementBtn;
