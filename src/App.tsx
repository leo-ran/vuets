import { Vue ,Component } from '@vuets/class'
import Test from '@/components/Test'

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
