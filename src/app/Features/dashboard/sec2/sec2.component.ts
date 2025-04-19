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
  single1: any[] = [
    {
      name: 'Male',
      value: 70,
    },
    {
      name: 'Female',
      value: 40,
    },
  ];
  single2: any[] = [
    {
      name: 'Male',
      value: 10,
    },
    {
      name: 'Female',
      value: 90,
    },
  ];
  single3: any[] = [
    {
      name: 'Male',
      value: 30,
    },
    {
      name: 'Female',
      value: 80,
    },
  ];
  single4: any[] = [
    {
      name: 'Male',
      value: 50,
    },
    {
      name: 'Female',
      value: 50,
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
