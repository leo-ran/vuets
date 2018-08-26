// import 'reflect-metadata'

import VueClass from 'vue'
import ComponentDecorator, { createDecorator, VueDecorator } from 'vue-class-component'
import { PropOptions, PropValidator, WatchHandler, ComponentOptions, WatchOptions, InjectKey } from 'vue/types/options';

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
 *
 * @param propType
 * @author YunlongRan<549510622@qq.com>
 * @license MIT
 */
export const Prop = <V extends VueClass>(propType?: PropValidator<Record<string, any> & any>): VueDecorator => {
    return createDecorator((options: ComponentOptions<V>, key: string) => {
        const props: { [key: string]: any } = {}
        options.props = options.props || props
        options.props[key] = propType as PropValidator<Record<string, any>>
    })
}

/**
 * ModelDecorator
 * Example
 * ```
 * import { Vue, Model } from '@vuets/class'
 * export default class extends Vue<PropTypes>{
 *   @Model('update',String) type!: string;
 * }
 * ```
 * @param event
 * @param propType
 * @author YunlongRan<549510622@qq.com>
 * @license MIT
 */
export const Model = <V extends VueClass>(event?: string, propType?: PropValidator<Record<string, any> & any>): VueDecorator => {
    return createDecorator((options: ComponentOptions<VueClass>, key: string) => {
        // add model
        options.model = options.model || {}
        options.model.event = event
        options.model.prop = key

        // add props
        const props: { [key: string]: any } = {}
        options.props = options.props || props
        options.props[key] = propType as PropValidator<Record<string, any>>
    })
}

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
export const Watch = <V extends VueClass>(watchKey: string, option?: WatchOptions): VueDecorator => {
    return createDecorator((options: ComponentOptions<V>, key: any) => {
        options.watch = options.watch || {}
        if (option as WatchOptions) {
            options.watch[watchKey] = {
                handler(this: any, n: any, o: any) {
                    (this[key] as WatchHandler<any>)(n, o)
                },
                ...option as WatchOptions
            }
        } else {
            options.watch[watchKey] = function(this: any, n: any, o: any) {
                (this[key] as WatchHandler<any>)(n, o)
            }
        }
    })
}


interface Decorator<V extends VueClass> {
    (target: V | any, key: PropertyKey, descriptor: TypedPropertyDescriptor<Function>): void;
}

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
export const Emit = <V extends VueClass>(event: string): MethodDecorator => {
    return (target: V | any, key: string | symbol, descriptor: TypedPropertyDescriptor<any>): void => {
        const fn = descriptor.value
        descriptor.value = function(this: V, ...args: any[]) {
            if (typeof fn === 'function') {
                (fn as Function).apply(this, args)
                this.$emit(event, ...args)
            }
        }
    }
}

/**
 * Example
 * ```
 * import { Vue, Provide } from '@vuets/class'
 * export default class extends Vue<PropTypes>{
 *    @Provide() title:string = 100;
 * }
 * ```
 */
export const Provide = <V extends VueClass>(propertyKey?: string | symbol): VueDecorator => {
    return createDecorator((options: ComponentOptions<V>, key: string) => {
        const provide: { merged?: { [index: string]: any } } | any = options.provide || {}
        if (typeof provide !== 'function' || !provide.merged) {
            const original: Function = options.provide as Function
            const merged: { [index: string]: any } = provide.merged || {};
                merged[key] = propertyKey || key
            options.provide = function(this: V | any) {
                let provides: { [index: string]: any } = {}
                if (typeof original === 'function') {
                    provides = { ...original.call(this) }
                }
                Object.keys(merged).forEach((k: string) => {
                    provides[merged[k]] = this[key]
                })
                return provides
            }
            provide.merged = {}
        }
    })
}

interface InjectOptions {
    from?: InjectKey;
    default?: any;
}


/**
 * Example
 * ```
 * import { Vue, Inject } from '@vuets/class'
 * export default class extends Vue<PropTypes>{
 *  @Inject() title!:string;
 *  @Inject('test') a!:any;
 *  @Inject({from:'id', default:10 }) id:number;
 * }
 * ```
 */
export const Inject = <V extends VueClass>(option?: InjectOptions | InjectKey): VueDecorator => {
    return createDecorator((options: ComponentOptions<V>, key: string) => {
        if (!options.inject) {
            options.inject = {}
        }
        if (!Array.isArray(options.inject)) {
            (options.inject as { [i: string]: any })[key] = option || key
        } else {
            (options.inject as Array<InjectOptions | InjectKey>).push(option || key)
        }
    })
}


/**
 * Example
 * ```
 * import { Vue } from '@vuets/class'
 * export default class extends Vue<PropTypes>{}
 * ```
 */
class VueComponentClass<T = any> extends VueClass {
    private readonly propTypes!: T;
}

export const Component = ComponentDecorator

export const Vue = VueClass

export {
    VueClass
}

export const registerHooks = Component.registerHooks

export {
    mixins,
    createDecorator
} from 'vue-class-component'

export {
    Component as VueComponent,
    CreateElement,
    VueConstructor,
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
    DirectiveOptions,
    PluginFunction,
    PluginObject,
    VNodeChildren,
    VNodeChildrenArrayContents,
    VNode,
    VNodeComponentOptions,
    VNodeData,
    VNodeDirective
} from 'vue'









