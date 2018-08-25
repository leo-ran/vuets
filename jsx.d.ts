import { VNode } from 'vue';
import { HTMLElements } from './HTMLElements';
declare global {
    namespace JSX {
        interface Element extends VNode {
        }
        interface ElementClass {
        }
        interface IntrinsicElements extends HTMLElements {
            [elemName: string]: any;
        }
        interface ElementAttributesProperty {
            propTypes: any;
        }
    }
}

declare module '*.vue'{
    import Vue from 'vue'
    export default Vue
}