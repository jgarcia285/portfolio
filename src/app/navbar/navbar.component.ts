import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  theme: string = 'dark-theme';
  isDarkMode: boolean = true;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.initialTheme()
  }

  initialTheme() {
    this.renderer.addClass(document.body, this.theme)
  }

  changeTheme(): void {
    if(this.isDarkMode){
      this.renderer.removeClass(document.body, 'dark-theme')
      this.isDarkMode = false;
    } else {
      this.renderer.addClass(document.body, this.theme)
      this.isDarkMode = true;
    }
  }

}