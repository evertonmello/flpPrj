import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router: Router) { }

  public item = {
    id:0,
    name:'',
    unit: 0,
    amount: 0,
    price: 0,
    prshbl:false,
    valDate: new Date().toLocaleDateString(),
    fabDate:new Date().toLocaleDateString()
  }

  public units = [
    {label:'Litro', value: 0},
    {label:'Quilograma', value: 1},
    {label:'Unidade', value: 2},
  ]
  ngOnInit() {
  }

  cancel(){
    this.router.navigate(['/listagem']);    
  }

  save(){
    var itens = []
    if(window.localStorage['itens']) itens = JSON.parse(window.localStorage['itens']);

    itens.push(this.item)
    window.localStorage['itens'] = JSON.stringify(itens)

    console.log(JSON.parse(window.localStorage['itens']))
  }
}
