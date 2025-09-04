import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class LineChartComponent implements OnInit, OnDestroy {
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
    domain: ['#1E88E5', '#D32F2F', '#FFC107', '#00C000', '#4cceac'],
  };

  view: [number, number] = [700, 400];

  constructor(private store: Store) {
    Object.assign(this, {
      data: this.data$,
    });
  }

  ngOnInit() {
    this.updateChartSize();
    window.addEventListener('resize', this.updateChartSize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.updateChartSize.bind(this));
  }

  private updateChartSize() {
    const container = document.querySelector('.lineChart-section2');
    if (container) {
      this.view = [container.clientWidth, container.clientHeight];
    }
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
