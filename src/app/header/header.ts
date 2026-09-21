import { Component, HostListener } from "@angular/core";


@Component({
  selector: "app-header",
  imports: [],
  templateUrl: "./header.html",
  styleUrl: "./header.css",
})
export class Header {
  isCompact = false;
  isMenuActive = false;

  @HostListener("window:scroll")
  onWindowScroll(): void {
    const shouldBeCompact = window.scrollY > 80;
    if (this.isCompact !== shouldBeCompact) {
      this.isCompact = shouldBeCompact;
      if (!this.isCompact) {
        this.isMenuActive = false;
      }
    }
  }

  toggleMenu(): void {
    if (!this.isCompact) {
      return;
    }

    this.isMenuActive = !this.isMenuActive;
  }

  closeMenu(): void {
    if (this.isCompact) {
      this.isMenuActive = false;
    }
  }
}
