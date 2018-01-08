import { MatCardCommon } from './mat-card.common';
export declare class MatCard extends MatCardCommon {
    iosBackgroundColor: UIColor;
    constructor();
    createNativeView(): ShadowedView;
    initNativeView(): void;
    mdcColor: string;
    mdcTint: string;
    bar: boolean;
}
export declare class ShadowedView extends UIView {
    hasDumped: boolean;
    static new(): ShadowedView;
    init(): this;
    constructor();
    layerClass(): any;
    readonly shadowLayer: MDCShadowLayer;
    setElevation(points: number): void;
    setDefaultElevation(): void;
    layoutSubviews(): void;
}
