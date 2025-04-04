import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapSearch } from '@ng-icons/bootstrap-icons';
import {
  solarUser,
  solarSettings,
  solarBell,
  solarMoon,
  solarSun2,
} from '@ng-icons/solar-icons/outline';

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
    }),
  ],
})
export class HeaderComponent {
  isDarkMode = true;
  changeMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
