import { Component, Vue  } from '@vuets/class'
import { Button } from '@/components/Button'

@Component
export default class extends Vue {
    private render() {
        return (
            <div>
                <Button type="success">
                    xx
                </Button>
            </div>
        )
    }
}
