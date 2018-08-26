import Test from '@/components/Test'
import { Component, Vue, CreateElement  } from '@vuets/class'


@Component
export default class extends Vue {
    private render() {
        return (
            <div>
                <Test/>
            </div>
        )
    }
}
