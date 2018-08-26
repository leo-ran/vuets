// import 'reflect-metadata'
import VueClass from 'vue';
import './jsx';
import ComponentDecorator, { createDecorator } from 'vue-class-component';
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
export const Prop = (propType) => {
    return createDecorator((options, key) => {
        const props = {};
        options.props = options.props || props;
        options.props[key] = propType;
    });
};
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
export const Model = (event, propType) => {
    return createDecorator((options, key) => {
        // add model
        options.model = options.model || {};
        options.model.event = event;
        options.model.prop = key;
        // add props
        const props = {};
        options.props = options.props || props;
        options.props[key] = propType;
    });
};
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
export const Watch = (watchKey, option) => {
    return createDecorator((options, key) => {
        options.watch = options.watch || {};
        if (option) {
            options.watch[watchKey] = Object.assign({ handler(n, o) {
                    this[key](n, o);
                } }, option);
        }
        else {
            options.watch[watchKey] = function (n, o) {
                this[key](n, o);
            };
        }
    });
};
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
class VueComponentClass extends VueClass {
}
export const Component = ComponentDecorator;
export const Vue = VueComponentClass;
export const registerHooks = Component.registerHooks;
export { mixins, createDecorator } from 'vue-class-component';
//# sourceMappingURL=index.js.map