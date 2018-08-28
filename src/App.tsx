import { Component, Vue  } from '@vuets/class'
import { Card } from '@/components/Card';

@Component
export default class extends Vue {
    private render() {
        return (
            <div>
                <Card title="标题" onClick={ () => { console.log(1) }} />
            </div>
        )
    }
}
