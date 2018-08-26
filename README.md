# @vuets/class

This library fully depends on [vue-class-component](https://github.com/vuejs/vue-class-component) [vue](https://github.com/vuejs/vue) Part of the way to learn from [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)

[![npm (scoped with tag)](https://img.shields.io/npm/v/@vuets/class/latest.svg)](https://www.npmjs.com/package/@vuets/class)

# Version 

1. In vscode html5 tag autocomplate attribute 
2. Autocomplate PropTypes hint

# install

```shell
npm i @vuets/class
```


# Usage

### From vue-class-component usage

Example
```ts
import { Component, Vue  } from '@vuets/class'
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

Example 

```ts
interface PropTypes {
  title?: string;
  mode: 1 | 2 | 3;
}

import { Component, Vue  } from '@vuets/class'
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

### decorators

See [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator), Similar vue-property-decorator, Api Please see `index.d.ts`


# License 

MIT License

