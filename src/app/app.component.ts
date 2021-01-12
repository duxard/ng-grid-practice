import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-grid-practice';

  columnDefs = [
    {
      field: 'make',
      sortable: true,
      filter: true,
      sortingOrder: ['desc', 'asc', null],
      minWidth: 500,
      cellStyle: {color: 'red', 'background-color': 'yellow'}
    },

    { field: 'model' },
    { field: 'price'}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Aorsche', model: 'Boxter2', price: 72000 },
    { make: 'Borsche', model: 'Boxter3', price: 72000 },
    { make: 'Zorsche', model: 'Boxter4', price: 72000 }
  ];

  onGridReady(event) {
    console.warn('Grid ready!');
    console.dir(event);
  }


}
