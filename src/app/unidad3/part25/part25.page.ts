import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part25',
  templateUrl: './part25.page.html',
  styleUrls: ['./part25.page.scss'],
})
export class Part25Page implements OnInit {

  constructor() { }

  ngOnInit() {}

  buscar(){
    console.log(event)
  }

  data = [
  {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "sunt qui excepturi placeat culpa"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "omnis laborum odio"
  }
];

transform (data: any[], texto: string):any[]{
  if(texto == ''){
    return data;
  }

  texto = texto.toLowerCase();

  return data.filter(item =>{
    return item.title.toLowerCase()
           .includes( texto);
  });
}
}
