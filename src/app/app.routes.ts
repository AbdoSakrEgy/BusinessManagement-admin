import { Routes } from '@angular/router';
import { BarChartComponent } from './Features/bar-chart/bar-chart.component';
import { CalendarComponent } from './Features/calendar/calendar.component';
import { ContactsInformationComponent } from './Features/contacts-information/contacts-information.component';
import { DashboardComponent } from './Features/dashboard/dashboard.component';
import { FAQComponent } from './Features/faq/faq.component';
import { GoegraphyChartComponent } from './Features/goegraphy-chart/goegraphy-chart.component';
import { InvoicesBalancesComponent } from './Features/invoices-balances/invoices-balances.component';
import { LineChartComponent } from './Features/line-chart/line-chart.component';
import { ManageTeamComponent } from './Features/manage-team/manage-team.component';
import { PieChartComponent } from './Features/pie-chart/pie-chart.component';
import { ProfileFormComponent } from './Features/profile-form/profile-form.component';
import { PageNotFoundComponent } from './Shared/Components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'contacts-information', component: ContactsInformationComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'goegraphy-chart', component: GoegraphyChartComponent },
  { path: 'invoices-balances', component: InvoicesBalancesComponent },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'manage-team', component: ManageTeamComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'profile-form', component: ProfileFormComponent },
  { path: '', component: DashboardComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
