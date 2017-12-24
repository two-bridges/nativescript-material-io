import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/race";

import * as dialogs from "ui/dialogs";

import { Color, CssProperty, Property, Style, View, ViewBase } from "tns-core-modules/ui/core/view";
import { Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { EventData } from "data/observable";
import { GestureEventData } from "tns-core-modules/ui/gestures";
import { Page } from "tns-core-modules/ui/page";
import { Observable as RxObservable } from "rxjs/Observable";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { TbMaterial } from "nativescript-tb-material";

import stackLayoutModule = require("tns-core-modules/ui/layouts/stack-layout");

import tab = require("ui/tab-view");



@Component({
    moduleId: module.id,
    templateUrl: "./material-test.component.html",
    styleUrls: ["material-test.component.css"]
})
export class MaterialTestComponent implements OnInit {
    private tbMaterial: TbMaterial;
    public message: string;

    constructor(
    ) {
        this.tbMaterial = new TbMaterial();
        this.message = this.tbMaterial.message;

    }

    ngOnInit(): void {
    }


}

