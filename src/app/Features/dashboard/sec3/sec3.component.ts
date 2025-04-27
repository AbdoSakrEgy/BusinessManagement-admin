import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { solarDownloadMinimalistic } from '@ng-icons/solar-icons/outline';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import {
  curveBasis,
  curveCardinal,
  curveCatmullRom,
  curveLinear,
  curveMonotoneX,
  curveNatural,
  curveStep,
  curveStepAfter,
  curveStepBefore,
} from 'd3-shape';

@Component({
  selector: 'app-sec3',
  standalone: true,
  imports: [NgIcon, NgxChartsModule],
  templateUrl: './sec3.component.html',
  styleUrl: './sec3.component.css',
  viewProviders: [provideIcons({ solarDownloadMinimalistic })],
})
export class Sec3Component {
  multi: any[] = [];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  timeline: boolean = false;
  curve: any = curveCardinal; // or any other curve function
  colorScheme = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#1E88E5', '#D32F2F', '#FFC107', '#FFFFFF'],
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
