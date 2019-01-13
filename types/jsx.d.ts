import { VNode } from 'vue'

import { HTMLElements, BaseElement } from './HTMLElements'

interface VueElementTransition{
    name?: string;
    appear?: boolean;
    css?: boolean;
    type?: 'transition' | 'animation';
    mode?: 'out-in' | 'in-out' | string;
    'enter-class'?: string;
    'leave-class'?: string;
    'appear-class'?: string;
    'enter-to-class'?: string;
    'leave-to-class'?: string;
    'appear-to-class'?: string;
    'enter-active-class'?: string;
    'leave-active-class'?: string;
    'appear-active-class'?: string;
    onBeforeEnter?:() => void;
    onBeforeLeave?:() => void;
    onBeforeAppear?:() => void;
    onEnter?:() => void;
    onLeave?:() => void;
    onAppear?:() => void;
    onAfterEnter?:() => void;
    onAfterLeave?:() => void;
    onAfterAppear?:()=> void;
    onEnterCancelled?:()=> void;
    onLeaveCancelled?:()=> void;
    onAppearCancelled?:()=>void;
}

interface VueElementTransitionGroup extends VueElementTransition{
    tag?: string;
    'move-class'?: string;
    mode?: any;
}

interface VueElement {
    'router-link': {
        to?: string | {
            path?: string;
            params?: {[key: string]: any};
            name?: string;
            query?: {[key: string]: any}
        };
    };
    'router-view': {
        name?: string;
    };
    transition: VueElementTransition;
    'transition-group':VueElementTransitionGroup;
    'keep-alive': {
        include?: string | RegExp;
        exclude?: string | RegExp;
    };
    'slot': { name?: string };
}

declare global {
    namespace JSX {
        interface Element extends VNode {}
        interface ElementClass {}
        interface IntrinsicElements extends HTMLElements, VueElement {
            [elemName: string]: any;
        }
        interface ElementAttributesProperty {
            $props: any;
        }
    }
}