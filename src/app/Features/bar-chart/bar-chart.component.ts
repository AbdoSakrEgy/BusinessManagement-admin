import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectBarData } from '../../Store/Selectors/bar.selectors';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
})
export class BarChartComponent implements OnInit, OnDestroy {
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
    domain: ['#1E88E5', '#D32F2F', '#FFC107', '#FFFFFF'],
  };

  width: number = 0;
  height: number = 0;

  constructor(private store: Store) {
    Object.assign(this, {
      data: this.data$,
    });
  }

  ngOnInit() {
    this.updateDimensions();
    window.addEventListener('resize', () => this.updateDimensions());
  }

  private updateDimensions() {
    const chartContainer = document.querySelector('.barChart-section2');
    if (chartContainer) {
      this.width = chartContainer.clientWidth;
      this.height = chartContainer.clientHeight;
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () => this.updateDimensions());
  }

  onSelect(event: any) {
    console.log(event);
  }
}
