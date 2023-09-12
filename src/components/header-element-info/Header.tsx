import ElementIcon from "./ElementIcon";
import ElementProperties from "./ElementProperties";
import PeriodicTableData from "../../PubChemElements_all.json";
import {
  headerBgColor,
  headerShadowLineColor,
} from "../main-periodic-table/utils";

function Header({
  elementNumberInPreview,
}: {
  elementNumberInPreview: number;
}) {
  const elementGroupBlock =
    PeriodicTableData.element[elementNumberInPreview - 1][15];

  const [HeaderBgColor, HeaderShadowLineColor] = [
    headerBgColor(elementGroupBlock),
    headerShadowLineColor(elementGroupBlock),
  ];

  return (
    <header
      className={`h-44 relative ${HeaderShadowLineColor} ${HeaderBgColor}`}
    >
      <div className="w-full h-full p-4 max-w-6xl mx-auto grid grid-cols-header-element-icon-info gap-10 lg:gap-20">
        <ElementIcon elementNumberInPreview={elementNumberInPreview} />

        <ElementProperties elementNumberInPreview={elementNumberInPreview} />
      </div>
    </header>
  );
}
export default Header;
