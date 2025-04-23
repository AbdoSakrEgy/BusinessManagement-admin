import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEmployees } from '../../Store/Selectors/setEmployees.selectors';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  matKeyboardArrowRight,
  matKeyboardArrowLeft,
  matCheckBoxOutlineBlank,
  matCheckBox,
  matIndeterminateCheckBox,
  matSecurity,
  matLockOpen,
} from '@ng-icons/material-icons/baseline';
import { matAdminPanelSettingsOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-manage-team',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './manage-team.component.html',
  styleUrl: './manage-team.component.css',
  viewProviders: [
    provideIcons({
      matKeyboardArrowRight,
      matKeyboardArrowLeft,
      matCheckBoxOutlineBlank,
      matCheckBox,
      matIndeterminateCheckBox,
      matSecurity,
      matAdminPanelSettingsOutline,
      matLockOpen,
    }),
  ],
})
export class ManageTeamComponent {
  data: any[] = [];
  dataForView: any[] = [];
  dataPerPage = 5;
  selectedPage = 1;
  pageNumbers = [1];
  activePageNumber = 1;

  isDataUpdated$ = this.store.select(selectEmployees).subscribe((result) => {
    this.data = result;
    this.setPage(this.selectedPage);
  });

  // checkbox logic
  isOneBoxSelected = false;
  isAllBoxesSelected = false;
  selectedBoxes: any[] = [];
  selectBox(id: any, selectAll?: boolean, unselectAll?: boolean) {
    if (selectAll) {
      this.selectedBoxes = this.data
        .filter((item) => item.id)
        .map((item) => item.id);
      console.log(this.selectedBoxes);
    } else if (unselectAll) {
      this.selectedBoxes = [];
    } else {
      if (this.selectedBoxes.includes(id)) {
        let newSelectedBoxes = this.selectedBoxes.filter((item) => item != id);
        this.selectedBoxes = newSelectedBoxes;
      } else {
        this.selectedBoxes.push(id);
      }
    }
    if (
      this.selectedBoxes.length > 0 &&
      this.selectedBoxes.length != this.data.length
    ) {
      this.isOneBoxSelected = true;
      this.isAllBoxesSelected = false;
    } else if (this.selectedBoxes.length != 0) {
      this.isOneBoxSelected = false;
      this.isAllBoxesSelected = true;
    } else {
      this.isOneBoxSelected = false;
      this.isAllBoxesSelected = false;
    }
  }
  // checkbox logic

  constructor(private store: Store) {
    this.store.select(selectEmployees).subscribe((result) => {
      this.data = result;
      this.setPage(this.selectedPage);
    });
  }

  setPage(page: number) {
    const startIndex = (page - 1) * this.dataPerPage;
    const endIndex = startIndex + this.dataPerPage;
    this.dataForView = this.data?.slice(startIndex, endIndex);
    this.activePageNumber = page;
    this.selectedPage = page;

    const pageCount = Math.ceil(this.data.length / this.dataPerPage);
    const maxPageCount = 100;
    this.pageNumbers = [];

    for (let i = 1; i <= Math.min(pageCount, maxPageCount); i++) {
      this.pageNumbers.push(i);
    }
  }

  changePageSize(event: Event) {
    const newSize = (event.target as HTMLInputElement).value;
    this.dataPerPage = +newSize;
    this.setPage(1);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.pageNumbers.length) {
      this.setPage(page);
    }
  }

  previousPage() {
    this.changePage(this.selectedPage - 1);
  }

  nextPage() {
    this.changePage(this.selectedPage + 1);
  }
}
