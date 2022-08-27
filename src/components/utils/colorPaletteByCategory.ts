import clrs from "assets/colors/colorPalette";

const colorPaletteByCategory = (url?: string) => {
  if (url) {
    switch (url) {
      case "women":
        return `${clrs.women}`;
      case "men":
        return `${clrs.men}`;
      case "kids":
        return `${clrs.kids}`;
      case "spring":
        return `${clrs.spring}`;
      case "summer":
        return `${clrs.summer}`;
      case "autumn":
        return `${clrs.autumn}`;
      case "winter":
        return `${clrs.winter}`;
      default:
        return `${clrs.hl2}`;
    }
  } else {
    return `${clrs.hl2}`;
  }
};

export default colorPaletteByCategory;
