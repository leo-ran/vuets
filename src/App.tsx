import { Vue ,Component } from '@vuets/class'
import Test from '@/components/Test'
import { CreateElement } from 'vue';

@Component
export default class extends Vue {
    private render(h: CreateElement) { 
        return (
            <div>
                <Test/>
            </div>
        )
    }
}
