import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ColorService {
  constructor() {}

  public abbrToColor(abbr: string): string {
    return {
      d: "#444444",
      r: "red",
      o: "orange",
      y: "yellow",
      g: "green",
      b: "blue",
      w: "#dddddd"
    }[abbr];
  }
}
