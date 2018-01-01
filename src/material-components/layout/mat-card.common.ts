import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

import { ContentView } from 'tns-core-modules/ui/content-view';
import { Observable } from 'tns-core-modules/data/observable';

export class MatCardCommon extends ContentView {
    public message: string;

    constructor() {
        super();
        this.message = Utils.SUCCESS_MSG();
    }

    public greet() {
        return "Hello, NS";
    }
}

export class Utils {
    public static SUCCESS_MSG(): string {
        let msg = `Your mdc-raised-button pluginz is working on ${app.android ? 'Android' : 'iOS'}.`;

        setTimeout(() => {
            dialogs.alert(`MatCard loaded`).then(() => console.log(`Dialog closed.`));
        }, 2000);

        return msg;
    }
}
