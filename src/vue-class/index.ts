// import 'reflect-metadata'

import VueClass from 'vue'
import './jsx'
import ComponentDecorator, { createDecorator, VueDecorator } from 'vue-class-component'
import { PropValidator, WatchHandler, ComponentOptions, WatchOptions } from 'vue/types/options';

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
export const Prop = <V extends VueClass>(propType?: PropValidator<Record<string,any> & any>):VueDecorator => {
    return createDecorator((options: ComponentOptions<V>, key:string)=>{
        const props: { [key:string]: any} = {}
        options.props = options.props || props
        options.props[key] = propType as PropValidator<Record<string,any>>
    })
}

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
export const Model = <V extends VueClass>(event?:string,propType?:PropValidator<Record<string,any> & any>):VueDecorator => {
    return createDecorator((options:ComponentOptions<VueClass>, key:string)=>{
        // add model
        options.model = options.model || {}
        options.model.event = event
        options.model.prop = key

        // add props
        const props: { [key:string]: any} = {}
        options.props = options.props || props
        options.props[key] = propType as PropValidator<Record<string,any>>
    })
}

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
export const Watch = <V extends VueClass>(watchKey:string, option?: WatchOptions ):VueDecorator => {
    return createDecorator((options: ComponentOptions<V>, key:any)=>{
        options.watch = options.watch || {}
        if(option as WatchOptions){
            options.watch[watchKey]={
                handler(this:any, n:any, o:any){
                    (this[key] as WatchHandler<any>)(n,o)
                },
                ...option as WatchOptions
            }
        }else{
            options.watch[watchKey] = function(this:any, n:any, o:any){
                (this[key] as WatchHandler<any>)(n,o)
            }
        }
    })
}

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
class VueComponentClass<T = any> extends VueClass{
    readonly propTypes!: T;
}

export const Component = ComponentDecorator

export const Vue = VueComponentClass

export const registerHooks = Component.registerHooks

export { 
    mixins,
    createDecorator
} from 'vue-class-component'






 



