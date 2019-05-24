import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part26',
  templateUrl: './part26.page.html',
  styleUrls: ['./part26.page.scss'],
})
export class Part26Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
