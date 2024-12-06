import { Component } from "@angular/core";

@Component({
    selector: 'app-breadcrumb',
    standalone: true,
    templateUrl: './breadcrumb.component.html',
    host:{
        class: "flex items-center justify-center hidden sm:flex"
    }
})
export class BreadcrumbComponent{

}