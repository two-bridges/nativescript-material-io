import { ActivatedRoute, Router, RoutesRecognized } from "@angular/router";

import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    constructor(
        public router: Router,
    ) {

        this.router.events.subscribe(
            (event) => {
                if (event instanceof RoutesRecognized) {
                    console.log('Router: ' + event.url);
                }
            }
        );

    }
}
