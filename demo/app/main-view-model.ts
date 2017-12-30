import { MdcRaisedButton } from 'nativescript-tb-material';
import { Observable } from 'tns-core-modules/data/observable';

export class HelloWorldModel extends Observable {
    public message: string;
    private tbMaterial: MdcRaisedButton;

    constructor() {
        super();

        this.tbMaterial = new MdcRaisedButton();
        this.message = `tbMaterial.message: ${this.tbMaterial.message}`;
    }
}
