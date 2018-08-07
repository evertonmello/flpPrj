import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }


  selectedItem: any;
  public itens = [];
  public newItem = true;
  public item = {
    id: 0,
    name: '',
    unit: 0,
    amount: 0,
    price: 0,
    prshbl: false,
    valDate: new Date().toLocaleDateString(),
    fabDate: new Date().toLocaleDateString()
  }
  public units = [
    { label: 'Litro', value: 0 },
    { label: 'Quilograma', value: 1 },
    { label: 'Unidade', value: 2 },
  ]
  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        if (params.item) {
          this.item = JSON.parse(params.item)
          this.newItem = false;
        }
      });
    this.itens = window.localStorage['itens'] ? JSON.parse(window.localStorage['itens']) : [];
  }

  cancel() {
    this.router.navigate(['/listagem']);
  }

  delete() {
    var index = this.item.id
    this.itens = this.itens.filter((val, i) => val.id != index);
    window.localStorage['itens'] = JSON.stringify(this.itens)
    this.item = null;
    this.router.navigate(['/listagem']);
  }

  save() {
    if (!this.newItem) {
      var index = this.item.id
      this.itens = this.itens.filter((val, i) => val.id != index);
    }

    this.item.id = this.itens.length;
    this.itens.push(this.item)

    window.localStorage['itens'] = JSON.stringify(this.itens)
    this.item = null;
    this.router.navigate(['/listagem']);
  }
}
