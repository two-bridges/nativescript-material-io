import { ContentView } from 'tns-core-modules/ui/content-view';
export declare class MatCardCommon extends ContentView {
    message: string;
    _mdcPalettePrefix: string;
    _mdcPaletteFullName: string;
    _mdcShade: string;
    constructor();
    greet(): string;
}
export declare class Utils {
    static SUCCESS_MSG(): string;
}
