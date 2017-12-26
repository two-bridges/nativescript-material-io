import { Common } from './tb-material.common';

export class TbMaterial extends Common {
    constructor() {
        super();
        console.log(MDCRaisedButton);
    }
    createNativeView() {
        console.log('create native view 3');
        const btn = MDCRaisedButton.new();

        // let colorModule = require("color");
        // let red = new colorModule.Color("#ff0000");

        // let raiseButton = btn.init();

        // raiseButton.titleLabel = "TEST";
        // raiseButton.setTitle("Raised Button", forState: .Normal);
        // btn.sizeToFit();
        // raiseButton.addTarget(self, action: "tapped:", forControlEvents: .TouchUpInside);
        // this.nativeView.addSubview(btn);

        // self.view.addSubview(raiseButton);
        // btn.backgroundColor = red;
        btn.setTitleForState("ola", UIControlState.Normal);

        btn.setBackgroundColor(MDCPalette.greenPalette.tint400);
        return btn;
    }
}
