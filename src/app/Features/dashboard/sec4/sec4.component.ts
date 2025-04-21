import { Component } from '@angular/core';
import { BarChartComponent } from '../../bar-chart/bar-chart.component';
import { GoegraphyChartComponent } from '../../goegraphy-chart/goegraphy-chart.component';

@Component({
  selector: 'app-sec4',
  standalone: true,
  imports: [ BarChartComponent, GoegraphyChartComponent],
  templateUrl: './sec4.component.html',
  styleUrl: './sec4.component.css'
})
export class Sec4Component {

}
