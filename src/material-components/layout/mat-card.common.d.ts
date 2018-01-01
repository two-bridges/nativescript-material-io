import { ContentView } from 'tns-core-modules/ui/content-view';
export declare class MatCardCommon extends ContentView {
    message: string;
    constructor();
    greet(): string;
}
export declare class Utils {
    static SUCCESS_MSG(): string;
}
