export function btnBgColor(GroupBlock: string) {
  let x: string = "";
  switch (GroupBlock) {
    case "Nonmetal":
      x = "nonmetal";
      break;
    case "Alkali metal":
      x = "alkali-metal";
      break;
    case "Alkaline earth metal":
      x = "alkaline-earth-metal";
      break;
    case "Transition metal":
      x = "transition-metal";
      break;
    case "Post-transition metal":
      x = "post-transition-metal";
      break;
    case "Metalloid":
      x = "metalloid";
      break;
    case "Noble gas":
      x = "noble-gas";
      break;
    case "Lanthanide":
      x = "lanthanide";
      break;
    case "Lawrencium":
      x = "Lawrencium";
      break;
    case "Actinide":
      x = "actinide";
      break;
    case "Halogen":
      x = "halogen";
      break;

    default:
      x = "bg-pink-500";
      break;
  }
  return x;
}

export function headerBgColor(GroupBlock: string) {
  let x: string = "";
  switch (GroupBlock) {
    case "Nonmetal":
    case "Halogen":
      x = "bg-[#ffff0002]";
      break;
    case "Alkali metal":
      x = "bg-[#ff000002]";
      break;
    case "Alkaline earth metal":
      x = "bg-[#4040ff02]";
      break;
    case "Transition metal":
      x = "bg-[#0080ff02]";
      break;
    case "Post-transition metal":
      x = "bg-[#00ff0002]";
      break;
    case "Metalloid":
      x = "bg-[#8cbe0002]";
      break;
    case "Noble gas":
      x = "bg-[#ff980002]";
      break;
    case "Lanthanide":
      x = "bg-[#00ffff02]";
      break;
    case "Lawrencium":
    case "Actinide":
      x = "bg-[#40ffc002]";
      break;

    default:
      x = "bg-[#000]";
      break;
  }
  return x;
}
export function headerShadowLineColor(GroupBlock: string) {
  let x: string = "";
  switch (GroupBlock) {
    case "Nonmetal":
    case "Halogen":
      x = "shadow-headerLine1";
      break;
    case "Alkali metal":
      x = "shadow-headerLine2";
      break;
    case "Alkaline earth metal":
      x = "shadow-headerLine3";
      break;
    case "Transition metal":
      x = "shadow-headerLine4";
      break;
    case "Post-transition metal":
      x = "shadow-headerLine5";
      break;
    case "Metalloid":
      x = "shadow-headerLine6";
      break;
    case "Noble gas":
      x = "shadow-headerLine7";
      break;
    case "Lanthanide":
      x = "shadow-headerLine8";
      break;
    case "Lawrencium":
    case "Actinide":
      x = "shadow-headerLine9";
      break;

    default:
      x = "shadow-headerLine1";
      break;
  }
  return x;
}
