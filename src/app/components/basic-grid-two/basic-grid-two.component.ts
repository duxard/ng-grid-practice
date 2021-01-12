import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-grid-two',
  templateUrl: './basic-grid-two.component.html',
  styleUrls: ['./basic-grid-two.component.scss']
})
export class BasicGridTwoComponent {

  title = 'BasicGridTwoComponent';

  rowStyle = { border: '1px solid black' };

  columnDefs = [
    { field: 'make', cellClass: 'basic-grid-two-cell' },
    { field: 'model', cellClass: 'basic-grid-two-cell' },
    { field: 'price', cellClass: 'basic-grid-two-cell' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: '', model: '', price: ''},
    { make: '', model: '', price: ''},
    { make: '', model: '', price: ''},
    { make: '', model: '', price: ''}
  ];

}
