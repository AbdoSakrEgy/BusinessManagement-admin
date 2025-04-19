import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { solarDownloadMinimalistic } from '@ng-icons/solar-icons/outline';
import { Sec2Component } from './sec2/sec2.component';
import { Sec3Component } from './sec3/sec3.component';
import { Sec4Component } from './sec4/sec4.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIcon, Sec2Component, Sec3Component, Sec4Component],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  viewProviders: [provideIcons({ solarDownloadMinimalistic })],
})
export class DashboardComponent {}
