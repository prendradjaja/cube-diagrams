import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "preset",
  templateUrl: "./preset.component.html",
  styleUrls: ["./preset.component.scss"],
})
export class PresetComponent implements OnInit {
  @Input()
  public name: string;

  @Output()
  public click: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public handleClick() {
    this.click.emit();
  }
}
