import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'app';
  public val = 0
  public items;  
  public check = false;
  public units = [
    {label:'Litro', value: 0},
    {label:'Quilograma', value: 1},
    {label:'Unidade', value: 2},
  ]
  public cars = [
    { name: '', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
    { name: 'dsa', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
    { name: 'dsa', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
    { name: 'dsa', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
    { name: 'dsa', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
    { name: 'dsa', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
    { name: 'dsa', unit: 1231,  amount: 1233, price:'dadas', perishable:false, valDate: new Date().toLocaleDateString(), fabDate: new Date().toLocaleDateString()},
  ];
  



  ngOnInit() {    
    this.items = [{
      label: 'Home',
      icon: 'pi-home',
      items: [
        { label: 'Cadastrar', icon: 'pi pi-pencil', command:(click)=> this.setPage('cad') },
        { label: 'Listagem', icon: 'pi pi-align-left', command:(click)=> this.setPage('list') }
      ]
    }];

  }

  ngOnChanges(){
    console.log(this.cars)
  }

  setPage(page){
    console.log(page)
  }

  validate(){
    console.log("!")
  }
}
