import { Component } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-part11',
  templateUrl: './part11.page.html',
  styleUrls: ['./part11.page.scss'],
})
export class Part11Page  {
  //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;


    data: any[] = Array(20);

    constructor() { }

    loadData(event) {
      console.log('Cargando siguientes...');

      setTimeout(() => {

        if(this.data.length > 50){
          event.target.complete();
        //  this.infiniteScroll.disabled = true;
          return;
        }

        const nuevoArr = Array(20);
        this.data.push( ...nuevoArr);
        event.target.complete();

      },1000);


    }
}
