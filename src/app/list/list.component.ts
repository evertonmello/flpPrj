import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    displayDialog: boolean;
    item: any = {};
    selectedItem: any;
    newItem: boolean;
    cols: any[];

    constructor() { }
    public units = [
        { label: 'Litro', value: 0 },
        { label: 'Quilograma', value: 1 },
        { label: 'Unidade', value: 2 },
    ]
    public itens = window.localStorage['itens'] ? JSON.parse(window.localStorage['itens']) : []


    ngOnInit() {
        this.cols = [
            { field: 'name', header: 'Nome' },
            { field: 'unit', header: 'Unidade de Medida' },
            { field: 'amount', header: 'Quantidade' },
            { field: 'price', header: 'Preço' },
            { field: 'perishable', header: 'É perecivel' },
            { field: 'valDate', header: 'Data de validade' },
            { field: 'fabDate', header: 'Data de fabricação' },
        ];
    }

    showDialogToAdd() {
        this.newItem = true;
        this.item = {};
        this.displayDialog = true;
    }

    save() {
        let itens = [...this.itens];

        if (this.newItem)
            itens.push(this.item);
        else
            itens[this.itens.indexOf(this.selectedItem)] = this.item;

        this.itens = itens;
        this.item = null;
        this.displayDialog = false;
    }

    delete() {
        let index = this.itens.indexOf(this.selectedItem);
        this.itens = this.itens.filter((val, i) => i != index);
        this.item = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newItem = false;
        this.item = event.data;
        this.displayDialog = true;
    }
}
