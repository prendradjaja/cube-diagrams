import { Component, OnInit, Input } from "@angular/core";
import { ColorService } from "../color.service";
import { FaceId } from "../app.component";

@Component({
  selector: "face",
  templateUrl: "./face.component.html",
  styleUrls: ["./face.component.scss"]
})
export class FaceComponent implements OnInit {
  @Input()
  id: FaceId;
  colors = [["d", "d", "d"], ["d", "d", "d"], ["d", "d", "d"]];

  constructor(private colorService: ColorService) {}

  ngOnInit() {}

  setColor(row: number, col: number, colorAbbr: string) {
    this.colors[row][col] = colorAbbr;
  }

  getFaceString(): string {
    return this.colors.map(row => row.join("")).join("");
  }

  setFaceString(faceString: string) {
    this.colors = [
      [faceString.charAt(0), faceString.charAt(1), faceString.charAt(2)],
      [faceString.charAt(3), faceString.charAt(4), faceString.charAt(5)],
      [faceString.charAt(6), faceString.charAt(7), faceString.charAt(8)]
    ];
  }
}
