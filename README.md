# @vuets/class

This library fully depends on [vue-class-component](https://github.com/vuejs/vue-class-component) [vue](https://github.com/vuejs/vue) Part of the way to learn from [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)

[![npm (scoped with tag)](https://img.shields.io/npm/v/@vuets/class/latest.svg)](https://www.npmjs.com/package/@vuets/class)

# Version 

1. In vscode html5 tag autocomplate attribute 
2. Autocomplate PropTypes hint

# install

```shell
npm i @vuets/class vue vue-class-component vue-property-decorator
```


# Usage

### From vue-class-component usage

Example
```ts
import Vue from '@vuets/class'
import { Component } from 'vue-property-decorator'
@Component
export default class extends Vue {
  private render() {
      return (
          <div>
              <Test />
          </div>
      )
  }
}
```

### If you need type hints

Example TSX

```ts
interface PropTypes {
  title?: string;
  mode: 1 | 2 | 3;
}

import Vue from '@vuets/class'
import { Component } from 'vue-property-decorator'
@Component
export default class extends Vue<PropTypes> {
  private render() {
      return (
          <div>
              <Test />
          </div>
      )
  }
}
```

Example TS

```ts
import Vue from '@vuets/class'
import { Component } from 'vue-property-decorator'

interface PropTypes {
  title?: string;
  mode: 1 | 2 | 3;
}

@Component({
  template: require('./any.html')
})
export default class extends Vue<PropTypes> {}
```

> If you use webpack, maybe need `raw-loader` handler html file

### Decorators

See [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator), Similar vue-property-decorator, Api Please see [index.d.ts](https://github.com/ranyunlong/vuets/blob/class/types/index.d.ts)


**1. @Props(propType?: PropOptions)**

> vue props option:
```ts
{
    props: {
      size: {
          type: Number,
          default: 100
      },
      type: Number,
      age: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        validator: (value) => typeof value === 'string'
      }
    }
}
```

> For typescript:

Example
```ts
import Vue from '@vuets/class'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue<PropTypes>{
  @Prop({type: Number, default:100}) size!:number;
  @Prop(Number) type!:number;
  @Prop({type: Number, required:true}) age!:number;
  @Prop({ type: String, validator: (value) => typeof value === 'string' }) public title!: string;
}
```

**2. @Model(event?: string | undefined, propType?: PropOptions)**

> vue props option:
```ts
props: {
  checked: {
    type: Boolean
  },
  model: {
    prop: 'checked',
    event: 'change'
  }
}
```

> For typescript:

Example
```ts
import Vue from '@vuets/class'
import { Component, Model } from 'vue-property-decorator'

@Component
export default class extends Vue<PropTypes>{
  @Model('change',String) checked!: string;
}
```

**3. @Watch(watchKey: string, option?: WatchOptions | undefined)**
> vue props option:

```ts
{
  watch: {
    a(n: boolean, o: boolean){
       console.log(n)
    },
    b: {
      handler: (n: object, o: object)=> console.log(n),
      deep: true
    }
  }
}
```


>  For typescript:

Example
```ts
import Vue from '@vuets/class'
import { Component, Watch } from 'vue-property-decorator'

@Component
export default class extends Vue<PropTypes>{
  public a:boolean = false;
  public b:object = {}
  @Watch('a')
  aWatching(n: boolean, o: boolean):void {
    console.log(n)
  }
  @Watch('b', { deep:true })
  bWatching(n: object, o: object):void {
    console.log(n)
  }
}
```

**4. @Emit(event: string)**
> vue props option: 

```ts
{
  methods: {
    run(n: number){
      this.$emit('click', n)
    }
  }
}
```

>  For typescript:

Example
```ts
import Vue from '@vuets/class'
import { Component, Emit } from 'vue-property-decorator'

export default class extends Vue<PropTypes>{
    @Emit('click')
    run(n: number) {}
}
```

**5. @Provide(propertyKey?: string | symbol | undefined)**
> vue props option: 

```ts
{
  data(){
    return {
      title: 'Im title',
      test: 'Im test'
    }
  },
  provide:{
    title: this.title,
    foo: this.test
  }
}
```
>  For typescript:

Example
```ts
import Vue from '@vuets/class'
import { Component, Provide } from 'vue-property-decorator'

export default class extends Vue<PropTypes>{
  @Provide() title:string = 'Im title';
  @Provide('test') test:string = 'Im test'
}
```

**6. Inject(options?: string | symbol | InjectOptions | undefined)**
> vue props option: 
```ts
{
  inject:{
    title: 'title'
    test:{
      from: 'foo',
      default: 'test data'
    }
  },
  template: `<h1>{{title}} {{this.test}}</h1>`
}
```
>  For typescript:

Example
```ts
import Vue from '@vuets/class'
import { Component, Inject } from 'vue-property-decorator'

export default class extends Vue<PropTypes>{
  @Inject() title!: string;
  @Inject({ from:'foo', default: 'test data' }) test!: string;
  render() {
  	return(
    	<h1>{this.title} {this.test}</h1>
    )    
  }
}

```



# License 

MIT License

