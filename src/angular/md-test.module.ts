import { DIRECTIVES } from "./md-test.directives";
import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class MdTestModule { }

registerElement("md-test", () => require("../").TbMaterial);
