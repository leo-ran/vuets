# @vuets/vuex

This library fully depends on [vue-class-component](https://github.com/vuejs/vue-class-component) [vue](https://github.com/vuejs/vue);

[![npm (scoped with tag)](https://img.shields.io/npm/v/@vuets/vuex/latest.svg)](https://www.npmjs.com/package/@vuets/vuex)


# install

```shell
npm i @vuets/vuex
```
If you need vue typescript see [@vuets/class](https://www.npmjs.com/package/@vuets/class) library;

# Usage
In this example used @vuets/class and TSX;
```shell
npm i @vuets/class
```

## Vuex code

```ts
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)


interface UserState  {
    name: string
}

interface RootState {
    username: string;
}

export default new Vuex.Store({
    state: {
        username: 'Danny'
    },
    getters: {
      	username: (state: RootState) => state.username
    },
    mutations: {
        changeUsername: (state: RootState, param: string) => {
            state.username = param
        }
    },
    actions: {
        ACTION_CHANGE_USERNAME: ({commit}, param: string) => {
            commit('changeUsername', param)
        }
    },
    modules: {
        admin: {
            namespaced: true,
            state: {
                name: 'Jobs'
            },
            getters: {
                name: (state: UserState): string => state.name
            },
            mutations: {
                changeName: (state: UserState, param: string): void => {
                    state.name = param
                }
            },
            actions: {
                ACTION_CHANGE_NAME: ({ commit }, param: string) => {
                    commit('changeName', param)
                }
            }
        }
    }
})
```

## Decorators

### 1. @State(key: string):VuexDecorators;

Vue options Example
```ts
{
  computed:{
    myUser() {
      return this.$store.state.username
    }
  }
}
```

@State('username') === computed:{ myUser() { return this.$store.state.username } }


Ts Example
```ts
import { Component, Vue, Prop  } from '@vuets/class'
import { State, NameSpace } from '@vuets/vuex';
const adminModule = NameSpace('admin')
export class Card extends Vue {
  @State('username') public myUser!: string;
  @adminModule.State('name') myAdmin!: string;
  private render() {
     <div>
       {this.myUser}
       {this.myAdmin}
     </div>
  }
}
```

### 2. @Getter(key: string):VuexDecorators;
```ts
import { Component, Vue, Prop  } from '@vuets/class'
import { Getter, NameSpace } from '@vuets/vuex';
const adminModule = NameSpace('admin')
export class Card extends Vue {
  @Getter('username') public myUser!: string;
  @adminModule.Getter('name') myAdmin!: string;
  private render() {
     <div>
       {this.myUser}
       {this.myAdmin}
     </div>
  }
}
```

### 3. @Mutation(key: string):VuexDecorators;
```ts
import { Component, Vue, Prop  } from '@vuets/class'
import { Mutation, NameSpace } from '@vuets/vuex';
const adminModule = NameSpace('admin')
export class Card extends Vue {
  @Getter('username') public myUser!: string;
  @Mutation('changeUsername') public usernameChange!: Function;
  @adminModule.Getter('name') myAdmin!: string;
  @adminModule.Mutation('changeName') public adminChange!: Function;
  private render() {
      <div>
          {this.myUser}
          {this.myAdmin}
          <button onClick={this.usernameChange('John')}>change username</button>
          <button onClick={this.adminChange('root')}>change admin</button>
      </div>
  }
}
```

### 4. @Action(key: string):VuexDecorators;
```ts
import { Component, Vue, Prop  } from '@vuets/class'
import { Mutation, NameSpace } from '@vuets/vuex';
const adminModule = NameSpace('admin')
export class Card extends Vue {
  @Getter('username') public myUser!: string;
  @Action('ACTION_CHANGE_USERNAME') public usernameChange!: Function;
  @adminModule.Getter('name') myAdmin!: string;
  @adminModule.Action('ACTION_CHANGE_NAME') public adminChange!: Function;
  private render() {
      <div>
          {this.myUser}
          {this.myAdmin}
          <button onClick={this.usernameChange('John')}>change username</button>
          <button onClick={this.adminChange('root')}>change admin</button>
      </div>
  }
}
```


# License 

MIT License