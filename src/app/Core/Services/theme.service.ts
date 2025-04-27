import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  toggleDarkMode(): void {
    document.documentElement.classList.toggle('dark');
  }

  enableDarkMode(): void {
    document.documentElement.classList.add('dark');
  }

  disableDarkMode(): void {
    document.documentElement.classList.remove('dark');
  }
}
