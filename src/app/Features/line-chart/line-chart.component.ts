import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectLineData } from '../../Store/Selectors/line.selectors';
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
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
})
export class LineChartComponent {
  multi: any[] = [];
  data$ = this.store.select(selectLineData).subscribe((result) => {
    this.multi = result;
  });

  // options
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  curve: any = curveCatmullRom; // or any other curve function
  colorScheme = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#4cceac', '#db4f4a', '#C7B42C', '#9b59b6', '#d3c0f9', '#2ecc71'],
  };

  constructor(private store: Store) {
    Object.assign(this, {
      data: this.data$,
    });
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
