interface ElementBtn {
  row: string;
  col: string;
}
function ElementBtn({ row, col }: ElementBtn) {
  return (
    <button
      className={`w-full h-full  text-center leading-none py-px sm:py-1 shadow-inner border border-[hsla(60,100%,80%,0.5)] text-white/90 text-xs grid grid-cols-1 grid-rows-4 ${row} ${col}`}
      data-element-info-open="false"
      data-chemical-group-block="nonmetal"
      style={{
        background:
          "linear-gradient(110deg, rgba(255, 255, 0, 0.2), rgba(255, 255, 0, 0.3))",
      }}
    >
      <div className="h-full flex flex-nowrap items-center px-1">
        <div
          className="text-left font-medium text-3xs text-sm flex-1 pr-1 "
          data-tooltip="Atomic Number"
        >
          1
        </div>
        <div className="text-2xs py-1 truncate" data-tooltip="Atomic Mass, u">
          1.0080
        </div>
      </div>

      <div
        className="font-medium text-xl row-span-2 h-full"
        data-tooltip="Symbol"
      >
        H
      </div>

      <div className="h-full truncate" data-tooltip="Name">
        Hydrogen
      </div>
    </button>
  );
}
export default ElementBtn;
