import { VueDecorator } from 'vue-class-component';
interface VueXDecorator {
    (key: string): VueDecorator;
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
export declare const Getter: VueXDecorator;
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
 */
export declare const State: VueXDecorator;
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
export declare const Mutation: VueXDecorator;
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
export declare const Action: VueXDecorator;
interface NameSpace {
    Getter: VueXDecorator;
    Mutation: VueXDecorator;
    Action: VueXDecorator;
    State: VueXDecorator;
}
export declare const NameSpace: (moduleName: string) => NameSpace;
export {};
//# sourceMappingURL=index.d.ts.map