import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';



@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
              private confirmationService: ConfirmationService,private messageService:MessageService) { }
  
  selectedItem: any;
  itens = [];
  newItem = true;
  item = {
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
    try {
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    } catch (error) {
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    }
    var index = this.item.id
    this.itens = this.itens.filter((val, i) => val.id != index);
    window.localStorage['itens'] = JSON.stringify(this.itens)
    this.item = null;
    this.router.navigate(['/listagem']);
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
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

  confirm() { 
       
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir este item?',
        accept: () => {
            this.delete();
        }
    });
}
}
