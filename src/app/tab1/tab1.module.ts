import { ScrollingModule } from "@angular/cdk/scrolling";
import { MovieItemComponent } from "./../movie-item/movie-item.component";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";

import { Tab1PageRoutingModule } from "./tab1-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ScrollingModule,
  ],
  declarations: [Tab1Page, MovieItemComponent],
})
export class Tab1PageModule {}
