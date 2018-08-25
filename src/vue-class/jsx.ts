import { VNode } from 'vue'


import { HTMLElements }  from './HTMLElements'
declare global {
    namespace JSX {
        interface Element extends VNode {}
        interface ElementClass {
            // render: any;
        }
        interface IntrinsicElements extends HTMLElements{
            [elemName: string]: any;
        }
        interface ElementAttributesProperty {
            propTypes: any;
        }
        
    }
}
