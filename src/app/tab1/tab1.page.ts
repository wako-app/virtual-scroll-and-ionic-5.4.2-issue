import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "tab1.page.html",
})
export class Tab1Page {
  loading = true;

  movieRows: { movies: { name: string; bgColor: string }[] }[] = [];

  constructor() {
    setTimeout(() => {
      this.loadData();
    }, 1000);
  }

  private loadData() {
    for (let i = 0; i < 1000; i++) {
      this.movieRows.push({
        movies: [
          {
            name: `Movie ${i} A`,
            bgColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          },
          {
            name: `Movie ${i} B`,
            bgColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          },
        ],
      });
    }
    this.loading = false;
  }
}
