/*!
 * @vuets/class 
 * (c) 2018 Ranyunlong
 * Released under the MIT License.
 */

import './jsx'
import './shims-vue'
import VueConstructor, { CreateElement, RenderContext, VNode } from 'vue'
import { NavigationGuard } from 'vue-router'

export declare class Vue<PropTypes = any> extends VueConstructor {
    readonly $props: PropTypes;
    public render?(createElement?: CreateElement, hack?: RenderContext<PropTypes>): VNode;
    public renderError?(createElement?: CreateElement, err?: Error): VNode;

    public beforeRouteEnter?: NavigationGuard<VueConstructor>;
    public beforeRouteLeave?: NavigationGuard<VueConstructor>;
    public beforeRouteUpdate?: NavigationGuard<VueConstructor>;

    public beforeCreate?(this: VueConstructor): void;
    public created?(): void;
    public beforeDestroy?(): void;
    public destroyed?(): void;
    public beforeMount?(): void;
    public mounted?(): void;
    public beforeUpdate?(): void;
    public updated?(): void;
    public activated?(): void;
    public deactivated?(): void;
    public errorCaptured?(err: Error, vm: VueConstructor, info: string): boolean | void;
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