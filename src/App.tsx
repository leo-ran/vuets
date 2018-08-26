import Test from '@/components/Test'
import { Component, Vue  } from '@vuets/class'

import { Provide } from './test'

@Component
export default class extends Vue {
    @Provide('title') public title: string = '嘎嘎嘎的'
    @Provide('bar') public tst: string = 'vvabar'
    private render() {
        return (
            <div>
                <Test />
            </div>
        )
    }
    private created() {
        console.log(this)
    }
}
