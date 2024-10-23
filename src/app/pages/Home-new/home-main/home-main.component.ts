import { Component } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-home-main",
  // standalone: true,
  // imports: [],
  templateUrl: "./home-main.component.html",
  styleUrl: "./home-main.component.scss",
})
export class HomeMainComponent {
  aboutSlider: OwlOptions = {
    items: 1,
    nav: true,
    margin: 0,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };
}
