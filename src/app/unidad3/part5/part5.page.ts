import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part5',
  templateUrl: './part5.page.html',
  styleUrls: ['./part5.page.scss'],
})
export class Part5Page {

  constructor() { }

  public form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];


}
