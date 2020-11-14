import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-movie-item",
  template: `
    <div style="background-color:{{ movie.bgColor }}">{{ movie.name }}</div>
  `,
  styles: [
    `
      div {
        width: 178px;
        height: 267px;
        border: 1px solid blue;
      }
    `,
  ],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: { name: string; bgColor: string };

  constructor() {}

  ngOnInit() {}
}
