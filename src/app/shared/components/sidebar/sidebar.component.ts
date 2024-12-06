import { Component } from "@angular/core";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    host: {
        class: "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 sm:mt-[50px]"
    }
})
export class SidebarComponent {

}