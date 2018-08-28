import { Component, Vue } from '@vuets/class'

interface PropTypes {
    type: 'success' | 'error' | 'danger'
}

@Component
export class Button extends Vue<PropTypes> {
    private render() {
      return (
        <button>
            {this.$slots.default}
        </button>
      )
    }
    private created() {
        console.log(this)
    }
}