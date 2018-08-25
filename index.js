"use strict";
// import 'reflect-metadata'
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_1 = tslib_1.__importDefault(require("vue"));
require("./jsx");
const vue_class_component_1 = tslib_1.__importStar(require("vue-class-component"));
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
exports.Prop = (propType) => {
    return vue_class_component_1.createDecorator((options, key) => {
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
exports.Model = (event, propType) => {
    return vue_class_component_1.createDecorator((options, key) => {
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
exports.Watch = (watchKey, option) => {
    return vue_class_component_1.createDecorator((options, key) => {
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
class VueComponentClass extends vue_1.default {
}
exports.Component = vue_class_component_1.default;
exports.Vue = VueComponentClass;
exports.registerHooks = exports.Component.registerHooks;
var vue_class_component_2 = require("vue-class-component");
exports.mixins = vue_class_component_2.mixins;
exports.createDecorator = vue_class_component_2.createDecorator;
//# sourceMappingURL=index.js.map