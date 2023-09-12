import PeriodicTableData from "../../PubChemElements_all.json";
function ElementProperties({
  elementNumberInPreview,
}: {
  elementNumberInPreview: number;
}) {
  const [
    AtomicMass,
    StandardState,
    ElectronConfiguration,
    OxidationStates,
    Electronegativity,
    AtomicRadius,
    IonizationEnergy,
    ElectronAffinity,
    MeltingPoint,
    BoilingPoint,
    Density,
    YearDiscovered,
  ] = [
    PeriodicTableData.element[elementNumberInPreview - 1][3],
    PeriodicTableData.element[elementNumberInPreview - 1][11],
    PeriodicTableData.element[elementNumberInPreview - 1][5],
    PeriodicTableData.element[elementNumberInPreview - 1][10],
    PeriodicTableData.element[elementNumberInPreview - 1][6],
    PeriodicTableData.element[elementNumberInPreview - 1][7],
    PeriodicTableData.element[elementNumberInPreview - 1][8],
    PeriodicTableData.element[elementNumberInPreview - 1][9],
    PeriodicTableData.element[elementNumberInPreview - 1][12],
    PeriodicTableData.element[elementNumberInPreview - 1][13],
    PeriodicTableData.element[elementNumberInPreview - 1][14],
    PeriodicTableData.element[elementNumberInPreview - 1][16],
  ];
  return (
    <section className=" w-full h-full grid grid-cols-2 gap-6 text-blue-500 text-sm">
      <div className="flex items-center">
        <div className="w-full">
          <p className="flex justify-between w-full">
            <span className="text-white font-medium">Atomic Mass</span>
            <span>{AtomicMass} u</span>
          </p>
          <p className="flex justify-between w-full">
            <span className="text-white font-medium">Standard State</span>
            <span>{StandardState}</span>
          </p>
          <p className="flex justify-between w-full">
            <span className="text-white font-medium">
              Electron Configuration
            </span>
            <span>{ElectronConfiguration}</span>
          </p>
          <p className="flex justify-between w-full">
            <span className="text-white font-medium">Oxidation States</span>
            <span>{OxidationStates}</span>
          </p>
          <p className="flex justify-between w-full">
            <span className="text-white font-medium">
              Electronegativity (Pauling Scale)
            </span>
            <span>{Electronegativity}</span>
          </p>
          <p className="flex justify-between w-full">
            <span className="text-white font-medium">
              Atomic Radius (van der Waals)
            </span>
            <span>{AtomicRadius} pm</span>
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-full">
          <p className="flex justify-between w-full">
            <span className="text-white font-medium">Ionization Energy</span>
            <span>{IonizationEnergy} eV</span>
          </p>

          <p className="flex justify-between w-full">
            <span className="text-white font-medium">Electron Affinity</span>
            <span>{ElectronAffinity} eV</span>
          </p>
          <p className="flex justify-between w-full">
            <span className="text-white font-medium">Melting Point</span>
            <span>{MeltingPoint} K</span>
          </p>
          <p className="flex justify-between w-full">
            <span className="text-white font-medium">Boiling Point</span>
            <span>{BoilingPoint} K</span>
          </p>
          <p className="flex justify-between w-full">
            <span className="text-white font-medium">Density</span>
            <span>{Density} g/cm³</span>
          </p>
          <p className="flex justify-between w-full">
            <span className="text-white font-medium">Year Discovered</span>
            <span>{YearDiscovered}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
export default ElementProperties;
