import { Component, HostListener, ViewChild, OnInit } from "@angular/core";
import { FaceComponent } from "./face/face.component";

export enum FaceId {
  up = "up",
  down = "down",
  front = "front",
  back = "back",
  left = "left",
  right = "right"
}

interface Preset {
  name: string;
  faces: {
    [key: string]: string;
  };
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  imageUrl: string;

  faceIdEnum = FaceId;

  @ViewChild("upFace", { static: true })
  upFace: FaceComponent;
  @ViewChild("frontFace", { static: true })
  frontFace: FaceComponent;
  @ViewChild("rightFace", { static: true })
  rightFace: FaceComponent;

  faces: { [key: string]: FaceComponent } = {};

  keyToColor = {
    "`": "d",
    "1": "w",
    "2": "r",
    "3": "g",
    "'": "y",
    ",": "o",
    ".": "b"
  };

  presets: Preset[] = [
    {
      name: "First slot",
      faces: {
        front: "ddd drd drd",
        right: "ddd dgd dgd"
      }
    },
    {
      name: "Last slot",
      faces: {
        front: "ddd rrd rrd",
        right: "ddd dgg dgg"
      }
    }
  ];

  public ngOnInit() {
    this.faces[FaceId.up] = this.upFace;
    this.faces[FaceId.front] = this.frontFace;
    this.faces[FaceId.right] = this.rightFace;
    window["foo"] = this; // pdebug
  }

  @HostListener("document:keypress", ["$event"])
  public handleKeypress(event: KeyboardEvent) {
    const key = event.key;
    const hoveredStickerList = document.querySelectorAll(
      "[data-is-sticker]:hover"
    );
    const color = this.keyToColor[key];
    if (hoveredStickerList.length < 1) {
      return;
    }
    if (!color) {
      return;
    }
    const hoveredSticker = hoveredStickerList.item(0);
    const faceId = hoveredSticker.getAttribute("data-face-id");
    const row = +hoveredSticker.getAttribute("data-row-index");
    const col = +hoveredSticker.getAttribute("data-col-index");
    const face = this.faces[faceId];
    face.setColor(row, col, color);
  }

  public handleGenerateClick() {
    this.imageUrl = this.getImageUrl();
  }

  public handlePresetClick(preset: Preset) {
    for (let faceId of Object.keys(preset.faces)) {
      const face = this.faces[faceId];
      const faceString = preset.faces[faceId].replace(/ /g, "");
      face.setFaceString(faceString);
    }
  }

  private getImageUrl(): string {
    const up = this.upFace.getFaceString();
    const right = this.rightFace.getFaceString();
    const front = this.frontFace.getFaceString();
    const down = "ddddddddd";
    const left = "ddddddddd";
    const back = "ddddddddd";
    return (
      "http://cube.crider.co.uk/visualcube.php?fmt=png&size=150&fc=" +
      up +
      right +
      front +
      down +
      left +
      back
    );
  }
}
