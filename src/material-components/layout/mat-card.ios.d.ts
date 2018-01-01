import { MatCardCommon } from './mat-card.common';
export declare class MatCard extends MatCardCommon {
    constructor();
    createNativeView(): ShadowedView;
    initNativeView(): void;
}
export declare class ShadowedView extends UIView {
    hasDumped: boolean;
    static new(): ShadowedView;
    init(): this;
    constructor();
    readonly shadowLayer: MDCShadowLayer;
    setElevation(points: number): void;
    setDefaultElevation(): void;
    layoutSubviews(): void;
}
