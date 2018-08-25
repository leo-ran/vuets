import VueClass from 'vue';
import './jsx';
import ComponentDecorator, { VueDecorator } from 'vue-class-component';
import { WatchOptions } from 'vue/types/options';
/**
 * PropDecorator
 *
 * Example
 * ```
 * export default class extends Vue<PropTypes>{
 *  @Prop({type: Number, default:100}) size!:number;
 *  @Prop(Number) size!:number;
 *  @Prop({type: Number, required:true}) age!:number;
 * }
 * ```
 *
 * @param propType
 * @author YunlongRan<549510622@qq.com>
 * @license MIT
 */
export declare const Prop: <V extends VueClass>(propType?: import("../../../../../../../Users/ranyunlong/Desktop/project/ts-vue/node_modules/vue/types/options").PropOptions<any> | (() => any) | (new (...args: any[]) => any) | import("../../../../../../../Users/ranyunlong/Desktop/project/ts-vue/node_modules/vue/types/options").Prop<any>[] | undefined) => VueDecorator;
/**
 * ModelDecorator
 *
 * Example
 * ```
 * export default class extends Vue<PropTypes>{
 *   @Model('update',String) type!: string;
 * }
 * ```
 * @param event
 * @param propType
 * @author YunlongRan<549510622@qq.com>
 * @license MIT
 */
export declare const Model: <V extends VueClass>(event?: string | undefined, propType?: import("../../../../../../../Users/ranyunlong/Desktop/project/ts-vue/node_modules/vue/types/options").PropOptions<any> | (() => any) | (new (...args: any[]) => any) | import("../../../../../../../Users/ranyunlong/Desktop/project/ts-vue/node_modules/vue/types/options").Prop<any>[] | undefined) => VueDecorator;
/**
 * WatchDecorator
 *
 * Example
 * ```
 * export default class extends Vue<PropTypes>{
 *  public a:boolean = false;
 *  @Watch('a' ,{ deep:true })
 *  watcherA(): void{
 *      console.log(this.a)
 *  }
 * }
 * ```
 * @param watchKey
 * @param option
 * @author YunlongRan<549510622@qq.com>
 * @license MIT
 */
export declare const Watch: <V extends VueClass>(watchKey: string, option?: WatchOptions | undefined) => VueDecorator;
/**
 * @class VueComponentClass
 * @author YunlongRan<549510622@qq.com>
 * @license MIT
 *
 * Example
 * ```
 * export default class extends Vue<PropTypes>{}
 * ```
 */
declare class VueComponentClass<T = any> extends VueClass {
    readonly propTypes: T;
}
export declare const Component: typeof ComponentDecorator;
export declare const Vue: typeof VueComponentClass;
export declare const registerHooks: typeof ComponentDecorator.registerHooks;
export { mixins, createDecorator } from 'vue-class-component';
