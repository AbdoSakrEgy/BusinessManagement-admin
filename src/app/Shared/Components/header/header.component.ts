import { Component, HostBinding, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapSearch, bootstrapList } from '@ng-icons/bootstrap-icons';
import {
  solarUser,
  solarSettings,
  solarBell,
  solarMoon,
  solarSun2,
} from '@ng-icons/solar-icons/outline';
import { ThemeService } from '../../../Core/Services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  viewProviders: [
    provideIcons({
      bootstrapSearch,
      solarUser,
      solarSettings,
      solarBell,
      solarMoon,
      solarSun2,
      bootstrapList,
    }),
  ],
})
export class HeaderComponent {
  isDarkMode = true;

  constructor(private themeService: ThemeService) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.themeService.enableDarkMode();
    } else {
      this.themeService.enableDarkMode(); // force dark mode no matter what
    }
  }
  toggleDarkMode() {
    this.themeService.toggleDarkMode();
    this.isDarkMode = !this.isDarkMode;
  }
  showNavbar() {
    const navbar = document.getElementsByClassName(
      'navbar-container1'
    )[0] as HTMLElement;
    navbar.style.display = 'flex';
  }
}
