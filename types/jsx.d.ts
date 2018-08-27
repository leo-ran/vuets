import { VNode } from 'vue'

import { HTMLElements, BaseElement } from './HTMLElements'
declare global {
    namespace JSX {
        interface Element extends VNode {}
        interface ElementClass {}
        interface IntrinsicElements extends HTMLElements {
            [elemName: string]: any;
        }
        interface ElementAttributesProperty {
            propTypes: any;
        }
    }
}
