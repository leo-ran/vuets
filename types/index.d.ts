/*!
 * @vuets/class 
 * (c) 2018 Ranyunlong
 * Released under the MIT License.
 */

import VueClass from 'vue';
import ComponentDecorator, { VueDecorator } from 'vue-class-component';
import { PropOptions, WatchOptions, InjectKey } from 'vue/types/options';
import './jsx'

/**
 * PropDecorator
 *
 * Example
 * ```
 * import { Vue, Prop } from '@vuets/class'
 * export default class extends Vue<PropTypes>{
 *  @Prop({type: Number, default:100}) size!:number;
 *  @Prop(Number) size!:number;
 *  @Prop({type: Number, required:true}) age!:number;
 * }
 * ```
 */
export declare const Prop: <V extends VueClass>(propType?: PropOptions<any> | (() => any) | (new (...args: any[]) => any) | import("vue/types/options").Prop<any>[] | undefined) => VueDecorator;
/**
 * ModelDecorator
 *
 * Example
 * ```
 * import { Vue, Model } from '@vuets/class'
 * export default class extends Vue<PropTypes>{
 *   @Model('update',String) type!: string;
 * }
 * ```
 */
export declare const Model: <V extends VueClass>(event?: string | undefined, propType?: PropOptions<any> | (() => any) | (new (...args: any[]) => any) | import("vue/types/options").Prop<any>[] | undefined) => VueDecorator;
/**
 * WatchDecorator
 *
 * Example
 * ```
 * import { Vue, Watch } from '@vuets/class'
 * export default class extends Vue<PropTypes>{
 *  public a:boolean = false;
 *  @Watch('a' ,{ deep:true })
 *  watcherA(): void{
 *      console.log(this.a)
 *  }
 * }
 * ```
 */
export declare const Watch: <V extends VueClass>(watchKey: string, option?: WatchOptions | undefined) => VueDecorator;
/**
 * Example
 * ```
 * import { Vue, Emit } from '@vuets/class'
 * export default class extends Vue<PropTypes>{
 *   pulic data !:number;
 *   @Emit('click')
 *   handler(n){
 *      data = n
 *   }
 * }
 * ```
 */
export declare const Emit: <V extends VueClass>(event: string) => MethodDecorator;
/**
 * Example
 * ```
 * import { Vue, Provide } from '@vuets/class'
 * export default class extends Vue<PropTypes>{
 *    @Provide() title:string = 100;
 * }
 * ```
 */
export declare const Provide: <V extends VueClass>(propertyKey?: string | symbol | undefined) => VueDecorator;
interface InjectOptions {
    from?: InjectKey;
    default?: any;
}
/**
 * Example
 *
 * ```
 * import { Vue, Inject } from '@vuets/class'
 * export default class extends Vue<PropTypes>{
 *  @Inject() title!:string;
 *  @Inject('test') a!:any;
 *  @Inject({from:'id', default:10 }) id:number;
 * }
 * ```
 */
export declare const Inject: <V extends VueClass>(options?: string | symbol | InjectOptions | undefined) => VueDecorator;
export declare const Component: typeof ComponentDecorator;
/*
 * Example
 * ```
 * export default class extends Vue<PropTypes>{}
 * ```
 */
declare class VueComponentClass<T = any> extends VueClass {
    private readonly propTypes: T;
 }
export declare const Vue: typeof VueComponentClass;
export { VueClass };
export declare const registerHooks: typeof ComponentDecorator.registerHooks;
export { mixins, createDecorator } from 'vue-class-component';
export { Component as VueComponent, CreateElement, VueConstructor, AsyncComponent, ComponentOptions, FunctionalComponentOptions, RenderContext, PropOptions, ComputedOptions, WatchHandler, WatchOptions, WatchOptionsWithHandler, DirectiveFunction, DirectiveOptions, PluginFunction, PluginObject, VNodeChildren, VNodeChildrenArrayContents, VNode, VNodeComponentOptions, VNodeData, VNodeDirective } from 'vue';