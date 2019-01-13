/*!
 * @vuets/class 
 * (c) 2018 Ranyunlong
 * Released under the MIT License.
 */

import './jsx'
import './shims-vue'
import VueConstructor from 'vue'

export declare class Vue<PropTypes> extends VueConstructor {
    readonly $props: PropTypes;
}

export { 
    CreateElement, 
    VueConstructor
} from 'vue/types/vue';

export {
    Component,
    AsyncComponent,
    ComponentOptions,
    FunctionalComponentOptions,
    RenderContext,
    PropOptions,
    ComputedOptions,
    WatchHandler,
    WatchOptions,
    WatchOptionsWithHandler,
    DirectiveFunction,
    DirectiveOptions
} from 'vue/types/options'

export {
    PluginFunction,
    PluginObject
  } from "vue/types/plugin";
  
export {
    VNodeChildren,
    VNodeChildrenArrayContents,
    VNode,
    VNodeComponentOptions,
    VNodeData,
    VNodeDirective
} from "vue/types/vnode";

export default Vue;

export as namespace Vue;