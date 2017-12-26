import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

import { Observable } from 'tns-core-modules/data/observable';
import { View } from 'tns-core-modules/ui/core/view';

export class Common extends View {
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
        let msg = `Your pluginz is working on ${app.android ? 'Android' : 'iOS'}.`;

        setTimeout(() => {
            dialogs.alert(`${msg} For real. It's really working :)`).then(() => console.log(`Dialog closed.`));
        }, 2000);

        return msg;
    }
}
