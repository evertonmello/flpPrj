import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

    constructor(private router: Router) { }
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
            { field: 'prshbl', header: 'É perecivel' },
            { field: 'valDate', header: 'Data de validade' },
            { field: 'fabDate', header: 'Data de fabricação' },
        ];
    }

    showDialogToAdd() {
        this.router.navigate(['/cadastro'])
    }

    onRowSelect(event) {
        this.newItem = false;
        this.item = event.data;
        this.displayDialog = true;
        this.router.navigate(['/cadastro'], { queryParams: { item: JSON.stringify(event.data) } })
               
    }

}
