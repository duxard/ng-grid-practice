import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-grid-one',
  templateUrl: './basic-grid-one.component.html',
  styleUrls: ['./basic-grid-one.component.scss']
})
export class BasicGridOneComponent {

  title = 'BasicGridOneComponent';

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
