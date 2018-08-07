import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  public units = [
    {label:'Litro', value: 0},
    {label:'Quilograma', value: 1},
    {label:'Unidade', value: 2},
  ]
  public itens = JSON.parse(window.localStorage['itens'])
/*   public cars = [
    { name: '', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
    { name: 'dsa', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
    { name: 'dsa', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
    { name: 'dsa', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
    { name: 'dsa', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
    { name: 'dsa', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
    { name: 'dsa', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
  ];
   */

  ngOnInit() {
  }

}
