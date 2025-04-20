import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectBarData } from '../../Store/Selectors/bar.selectors';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [ NgxChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
})
export class BarChartComponent {
  multi: any[] = [];
  data$ = this.store.select(selectBarData).subscribe((result) => {
    this.multi = result;
  });
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = false;
  showYAxisLabel: boolean = false;
  animations: boolean = true;

  colorScheme = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#4cceac', '#db4f4a', '#C7B42C','#4cceac','#db4f4a'],
  };

  constructor(private store: Store) {
    Object.assign(this, {
      data: this.data$,
    });
  }
  onSelect(event: any) {
    console.log(event);
  }
}
