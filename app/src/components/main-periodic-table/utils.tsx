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
