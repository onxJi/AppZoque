import { Component } from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: "./layout.component.html",
    imports: [SidebarComponent, HeaderComponent],
    host: {
        
    }
})
export class LayoutComponent {

}