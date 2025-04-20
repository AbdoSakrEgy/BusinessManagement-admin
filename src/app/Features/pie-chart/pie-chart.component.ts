import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectPieData } from '../../Store/Selectors/pie.selectors';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css',
})
export class PieChartComponent {
  single: any[] = [];
  data$ = this.store.select(selectPieData).subscribe((result) => {
    this.single = result;
  });
  view: any[] = [700, 400];

  // options
  legendPosition: any = 'below';
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
