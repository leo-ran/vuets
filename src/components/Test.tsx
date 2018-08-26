import { Button } from '@/components/Button'
import {Component, Vue, CreateElement  } from '@vuets/class'

interface PropTypes {
    title?: string;
}

@Component
export default class extends Vue<PropTypes> {
    private render() {
        return (
            <div id="xx">
               <Button type="success" />
            </div>
        )
    }
}
