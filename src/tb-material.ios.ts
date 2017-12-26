import { Common } from './tb-material.common';

export class TbMaterial extends Common {
    constructor() {
        super();
        console.log(MDCRaisedButton);
    }
    createNativeView() {
        console.log('create native view');
        return this.nativeView;
    }
}
