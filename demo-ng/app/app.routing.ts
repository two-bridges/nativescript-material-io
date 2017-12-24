import { ItemDetailComponent } from "./item/item-detail.component";
import { ItemsComponent } from "./item/items.component";
import { MaterialTestComponent } from "./material/material-test.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/material/test", pathMatch: "full" },
    {
        path: "material", children: [
            { path: "test", component: MaterialTestComponent },
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }