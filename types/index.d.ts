/*!
 * @vuets/class 
 * (c) 2018 Ranyunlong
 * Released under the MIT License.
 */

import { VueConstructor } from 'vue'

declare class VuePropTypes<T> {
    private readonly $props: T;
}

export interface VueTypescriptConstructor<PropTypes> extends VueConstructor, VuePropTypes<PropTypes>{}
export const Vue: VueTypescriptConstructor<any>;

export { CreateElement } from 'vue/types/vue';

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