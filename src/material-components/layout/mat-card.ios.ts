import { MatCardCommon } from './mat-card.common';
import { ios } from 'tns-core-modules/utils/utils';

// interface UIView {
//     extend(className: string, implementationObject: object): void;
//     extend(implementationObject: object, options: object): void;
// }

// let ShadowedView2 = UIView.extend({
//     init: function (): UIView {
//         console.log('ShadowedView.init');
//         let view = this.super.init();
//         return this;
//     },
//     get layerClass() {
//         console.log('ShadowedView.layerClass');
//         return CALayer;
//     }
// }, {
//         name: "ShadowedView2",
//         exposedMethods: {
//             layerClass: { returns: interop.types.class, params: [] }
//         }
//     });

export class MatCard extends MatCardCommon {
    iosBackgroundColor: UIColor;

    constructor() {
        super();
        console.log(MDCRaisedButton);
    }
    createNativeView() {
        let view = ShadowedView.new();

        console.log('#### MatCard -> createNativeView()');
        let cardView = ShadowedView.new();

        view.addSubview(cardView);

        return view;
    }

    initNativeView() {
        console.log('#### initNativeView');
        let view = <UIView>this.nativeView;
        view.layer.shadowOffset = CGSizeMake(1, 1);
        view.layer.shadowRadius = 2;

        view.layer.cornerRadius = 2;
        view.layer.shadowColor = UIColor.colorNamed("Red");
        view.layer.shadowOpacity = 0.4;

        // this is required for nativscript (the backgroundcolor must be set, else the card is transparent ;|
        console.log(JSON.stringify(["view.backgroundColor", this._mdcPalettePrefix, this._mdcShade]));
        view.backgroundColor = MDCPalette[this._mdcPaletteFullName][this._mdcShade];
        view.layer.masksToBounds = false;

        // PERFORMANCE: disable rasterisation before animating: https://material.io/components/ios/catalog/shadows/shadow-layers/ 
        // view.layer.shouldRasterize = true;

    }

    get mdcColor() {
        return this._mdcPalettePrefix;
    }

    set mdcColor(palettePrefix: string) {
        console.log('!!!!!!!!!!!!!!! mdcColor');
        let paletteFullName = `${palettePrefix}Palette`;
        // todo: validate the color
        if (MDCPalette[paletteFullName]) {
            this._mdcPalettePrefix = palettePrefix;
            this._mdcPaletteFullName = paletteFullName;
        } else {
            console.error(`mdcColor UNKNOWN: ${palettePrefix}`);
        }
    }

    set mdcTint(shadeSuffix: string) {
        console.log('!!!!!!!!!!!!!!! mdcTint');
        let shadeFullName = /a\d+/.test(shadeSuffix) ? `accent${shadeSuffix.replace('a', '')}` : `tint${shadeSuffix}`;
        if (MDCPalette.greyPalette[shadeFullName]) {
            this._mdcShade = shadeFullName;
        }
    }

    get bar(): boolean {
        return false;
    }

    set bar(theBar: boolean) {
        console.log('#### STANDBY.  Setting bar now...');
        let view = <UIView>this.nativeView;
        console.log(this.nativeView);
        // (<any>view).setText("testicle");
        if (theBar) {
            console.log('#### STANDBY.  to yellow...');
            this.iosBackgroundColor = MDCPalette.bluePalette.tint400;
            // view.backgroundColor = UIColor.yellowColor;

        } else {
            console.log('#### STANDBY.  to orange-atang...');
            this.iosBackgroundColor = MDCPalette.greenPalette.tint400;
            // view.backgroundColor = UIColor.orangeColor;

        }

    }
}

export class ShadowedView extends UIView {
    public hasDumped: boolean = false;
    static new(): ShadowedView {
        console.log('ShadowedView -> super.new()');
        let view = <ShadowedView>super.new();
        console.log('ShadowedView.new');

        // view.displayLayer(layer);

        return view;
    }


    init() {
        super.init();
        console.log('ShadowedView.init');
        this.setDefaultElevation();

        // this.layer.shadowOffset = CGSizeMake(-15, 20);
        // this.layer.shadowRadius = 2;
        // this.layer.shadowColor = UIColor.colorNamed("Red");
        // this.layer.shadowOpacity = 0.8;

        // let shadowPath = new UIBezierPath({ rect: this.bounds });

        // this.layer.shadowPath = (<UIBezierPath>this.bounds).CGPath;
        //this.layer.masksToBounds = false;

        /// this.layer.borderColor = UIColor.redColor.CGColor;

        // console.log(this.superview.layer);

        return this;
    }

    // typescript constructor is never called: https://docs.nativescript.org/angular/runtimes/ios/how-to/objc-subclassing#typescript-support
    constructor() {
        super({ frame: CGRectMake(0, 0, 0, 0) });
        // ShadowedView.layerClass = <any>MDCShadowLayer;
        console.log('ShadowedView.constructor');
    }
    // public static get layerClass(): typeof NSObject {
    //     console.log('layerClass -- test');
    //     return <any>MDCShadowLayer;
    // }


    public layerClass() {
        console.log('MDCShadowLayer.layerClass()');
        return <any>MDCShadowLayer;
    }

    get shadowLayer(): MDCShadowLayer {
        return <MDCShadowLayer>this.layer;
    }

    // get layer(): MDCShadowLayer {
    //     console.log('ShadowedView.layer');
    //     return <MDCShadowLayer>super.layer;
    // }

    public setElevation(points: number) {
        this.shadowLayer.elevation = points;
    }
    public setDefaultElevation() {
        console.log('ShadowedView.setDefaultElevation');
        this.shadowLayer.elevation = MDCShadowElevationCardResting;
    }

    // get layer(): MDCShadowLayer {
    //     console.log('ShadowedView.layer');
    //     return <MDCShadowLayer>super.layer;
    // }

    public layoutSubviews() {
        if (true || !this.hasDumped) {
            if (this.superview) {

                // this.layer.shadowOffset = CGSizeMake(1, 1);
                // //this.layer.shadowRadius = 2;

                // this.layer.cornerRadius = 2;
                // //this.layer.cornerRadius = 20;
                // this.layer.shadowColor = UIColor.colorNamed("Red");
                // this.layer.shadowOpacity = 0.4;
                // // this is required for nativscript (the backgroundcolor must be set, else the card is transparent ;|
                // this.backgroundColor = UIColor.whiteColor;
                // this.layer.masksToBounds = false;

                // // disable rasterisation before animating: https://material.io/components/ios/catalog/shadows/shadow-layers/ 
                // this.layer.shouldRasterize = true;

                // this.superview.layer.shadowOffset = CGSizeMake(1, 2);
                // this.superview.layer.shadowRadius = 2;

                // disable rasterisation before animating: https://material.io/components/ios/catalog/shadows/shadow-layers/ 
                // this.superview.layer.shouldRasterize = true;
                // this.superview.layer.cornerRadius = 2;

                // this.superview.layer.shadowColor = UIColor.colorNamed("Red");
                // TODO: make layer rounded, the corners are incorrect
                // this.superview.layer.shadowOpacity = 0.4;
                // this is required for nativscript (the backgroundcolor must be set, else the card is transparent ;|
                //this.superview.backgroundColor = UIColor.blueColor;
                // this.superview.layer.masksToBounds = false;

                //this.superview.opaque = true;
                console.log(this.superview.layer);
                this.hasDumped = true;
            }
        }
        console.log('layoutSubviews');
    }
}
