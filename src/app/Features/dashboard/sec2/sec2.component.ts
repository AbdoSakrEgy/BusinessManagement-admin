import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  solarDownloadMinimalistic,
  solarCalculator,
  solarUserPlus,
} from '@ng-icons/solar-icons/outline';
import { matMailOutline, matTraffic } from '@ng-icons/material-icons/baseline';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-sec2',
  standalone: true,
  imports: [NgIcon, NgxChartsModule],
  templateUrl: './sec2.component.html',
  styleUrl: './sec2.component.css',
  viewProviders: [
    provideIcons({
      solarDownloadMinimalistic,
      matMailOutline,
      solarCalculator,
      solarUserPlus,
      matTraffic,
    }),
  ],
})
export class Sec2Component {
  single: any[] = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
  ];
  view: any[] = [700, 400];

  // options
  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#4cceac', '#6870fa'],
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data: any[]): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any[]): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any[]): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
