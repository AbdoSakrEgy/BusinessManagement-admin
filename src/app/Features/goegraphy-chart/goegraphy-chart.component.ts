import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { AgCharts } from 'ag-charts-angular';
import 'ag-charts-enterprise';
import { AgChartOptions } from 'ag-charts-community';
import {
  selectGeographyData,
  selectGeographyTopology,
} from '../../Store/Selectors/geography.selectors';
import { data } from './data';
import { topology } from './topology';

@Component({
  selector: 'app-goegraphy-chart',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './goegraphy-chart.component.html',
  styleUrl: './goegraphy-chart.component.css',
})
export class GoegraphyChartComponent {
  public chartOptions: AgChartOptions = {};

  constructor() {
    this.chartOptions = {
      theme: {
        overrides: {
          common: {
            background: {
              fill: '#141b2d', // Replace with your desired background color
            },
          },
        },
      },
      data,
      topology,
      series: [
        {
          type: 'map-shape-background',
        },
        {
          type: 'map-shape',
          title: 'Access to Clean Fuels',
          idKey: 'name',
          colorKey: 'value',
          colorName: '% of population',
        },
      ],
      gradientLegend: {
        enabled: true,
        position: 'right',
        gradient: {
          preferredLength: 200,
          thickness: 2,
        },
        scale: {
          label: {
            fontSize: 10,
            formatter: (p: any) => p.value + '%',
          },
        },
      },
    };
  }
}
