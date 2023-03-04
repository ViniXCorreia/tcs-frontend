import { Component } from "@angular/core";
import { LazyLoadEvent } from "primeng/api";
import { Customer, Representative } from "src/app/demo/api/customer";
import { CustomerService } from "src/app/demo/service/customer.service";
import { Service } from "src/app/entities/service.entity";

@Component({
    selector: 'service-list',
    templateUrl: './service-list.component.html',
    styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent {

    services: Service[] = [];

    totalRecords: number = 0;

    loading: boolean = false;




    constructor() { }

    ngOnInit() {

    }
    loadServices(data: any) { }



}
