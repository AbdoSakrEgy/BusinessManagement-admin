import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapList, bootstrapPersonVcard } from '@ng-icons/bootstrap-icons';
import {
  solarHome,
  solarUsersGroupRounded,
  solarDocumentsMinimalistic,
  solarUser,
  solarCalendarMinimalistic,
  solarQuestionCircle,
  solarChart,
  solarPieChart,
  solarCourseUp,
  solarMap,
} from '@ng-icons/solar-icons/outline';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIcon, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  viewProviders: [
    provideIcons({
      bootstrapList,
      bootstrapPersonVcard,
      solarHome,
      solarUsersGroupRounded,
      solarDocumentsMinimalistic,
      solarUser,
      solarCalendarMinimalistic,
      solarQuestionCircle,
      solarChart,
      solarPieChart,
      solarCourseUp,
      solarMap,
    }),
  ],
})
export class NavBarComponent {}
