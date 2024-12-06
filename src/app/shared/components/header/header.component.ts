import { Component } from "@angular/core";
import { BreadcrumbComponent } from "./components/breadcrumbs/breadcrumb.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    imports:[
        BreadcrumbComponent
    ],
    host:{
        class: "fixed bg-gray-50 dark:bg-gray-800 w-full h-[50px] sm:z-50 border-b flex " 
    }
})
export class HeaderComponent{

}