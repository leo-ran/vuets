/*!
 * @vuets/vuex 
 * (c) 2018 Ranyunlong <549510622@qq.com>
 * Released under the MIT License.
 */

import Vue, { ComponentOptions } from 'vue'
import Vuex from 'vuex'
import { createDecorator, VueDecorator } from 'vue-class-component'

Vue.use(Vuex)

interface VueXDecorator {
    (key: string): VueDecorator;
}

const createVuexDecorator = (mixinTo: 'computed' | 'methods', type: 'getter' | 'action' | 'mutation' | 'state', namespace?: string): VueXDecorator => {
    return <V extends Vue>(key: string): VueDecorator => {
        return createDecorator((options: ComponentOptions<V>, propertyKey: string) => {
            if (mixinTo === 'computed') {
                const computed: { [key: string]: any } = { }
                options.computed = options.computed || computed
                options.computed[propertyKey] = function(this: V) {
                    if (typeof key !== 'string') { return }
                    // Getter handler
                    if (namespace as string) {
                        if (!/\/$/.test(namespace as string)) {
                            namespace += '/'
                        }
                        if (type === 'getter') {
                            return this.$store.getters[namespace + key]
                        } else if (type === 'state') {
                            const namespaces: string[] = (namespace as string).split('/').filter((v: string) => {
                                return v.length > 0
                            })
                            let value = this.$store.state
                            namespaces.forEach( (namespacesKey: string) => {
                                value = value[namespacesKey]
                            })
                            return value[key]
                        }
                    }
                    if (type === 'getter') {
                        return this.$store.getters[key]
                    } else if (type === 'state') {
                        return this.$store.state[key]
                    }
                }
            }
            if (mixinTo === 'methods') {
                const methods: { [key: string]: () => void  } = { }
                options.methods = options.methods || methods
                options.methods[propertyKey] = function(this: V, ...args: any[]) {
                    if (typeof key !== 'string') { return }
                    if (namespace as string) {
                        if (!/\/$/.test(namespace as string)) {
                            namespace += '/'
                        }
                        if (type === 'mutation') {
                            this.$store.commit(namespace + key, ...args)
                        } else if (type === 'action') {
                            this.$store.dispatch(namespace + key, ...args)
                        }
                    } else {
                        if (type === 'mutation') {
                            this.$store.commit(key, ...args)
                        } else if (type === 'action') {
                            this.$store.dispatch(key, ...args)
                        }
                    }
                }
            }
        })
    }
}

/**
 * Getter Decorator
 *
 * Example
 * ```
 * import { Component, Vue, Prop  } from '@vuets/class'
 * import { Getter, NameSpace } from '@vuets/vuex';
 * const adminModule = NameSpace('admin')
 * export class Card extends Vue {
 *  @Getter('username') public myUser!: string;
 *  @adminModule.Getter('admin') myAdmin!: string;
 *  private render() {
 *    <div>
 *       {this.myUser}
 *       {this.myAdmin}
 *    </div>
 *  }
 * }
 * ```
 */
export const Getter = createVuexDecorator('computed', 'getter')


/**
 * State Decorator
 *
 * Example
 * ```
 * import { Component, Vue, Prop  } from '@vuets/class'
 * import { State, NameSpace } from '@vuets/vuex';
 * const adminModule = NameSpace('admin')
 * export class Card extends Vue {
 *  @State('username') public myUser!: string;
 *  @adminModule.State('admin') myAdmin!: string;
 *  private render() {
 *    <div>
 *       {this.myUser}
 *       {this.myAdmin}
 *    </div>
 *  }
 * }
 * ```
 * ```
 */
export const State = createVuexDecorator('computed', 'state')

/**
 * Mutation Decorator
 *
 * Example
 * ```
 * import { Component, Vue, Prop  } from '@vuets/class'
 * import { Mutation, NameSpace } from '@vuets/vuex';
 * const adminModule = NameSpace('admin')
 * export class Card extends Vue {
 *  @Getter('username') public myUser!: string;
 *  @Mutation('changeUsername') public usernameChange!: Function;
 *  @adminModule.Getter('admin') myAdmin!: string;
 *  @adminModule.Mutation('changeAdmin') public adminChange!: Function;
 *  private render() {
 *    <div>
 *       {this.myUser}
 *       {this.myAdmin}
 *       <button onClick={this.usernameChange('John')}>change username</button>
 *       <button onClick={this.adminChange('root')}>change admin</button>
 *    </div>
 *  }
 * }
 * ```
 */
export const Mutation = createVuexDecorator('methods', 'getter')

/**
 * Action Decorator
 *
 * Example
 * ```
 * import { Component, Vue, Prop  } from '@vuets/class'
 * import { Action, NameSpace } from '@vuets/vuex';
 * const adminModule = NameSpace('admin')
 * export class Card extends Vue {
 *  @Getter('username') public myUser!: string;
 *  @Action('changeUsername') public usernameChange!: Function;
 *  @adminModule.Getter('admin') myAdmin!: string;
 *  @adminModule.Action('changeAdmin') public adminChange!: Function;
 *  private render() {
 *    <div>
 *       {this.myUser}
 *       {this.myAdmin}
 *       <button onClick={this.usernameChange('John')}>change username</button>
 *       <button onClick={this.adminChange('root')}>change admin</button>
 *    </div>
 *  }
 * }
 * ```
 */
export const Action = createVuexDecorator('methods', 'action')

interface NameSpace {
    Getter: VueXDecorator;
    Mutation: VueXDecorator;
    Action: VueXDecorator;
    State: VueXDecorator;
}
export const NameSpace = (moduleName: string): NameSpace => {
    return {
        Getter: createVuexDecorator('computed', 'getter', moduleName),
        Mutation: createVuexDecorator('methods', 'mutation', moduleName),
        Action: createVuexDecorator('methods', 'action', moduleName),
        State: createVuexDecorator('computed', 'state', moduleName)
    }
}