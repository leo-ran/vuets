import { Vue ,Component, Prop } from '@vuets/class'
import { Button } from '@/components/Button';
import { CreateElement } from 'vue';

interface PropTypes {
    title?:string;
}

@Component
export default class extends Vue<PropTypes> {
    render(h: CreateElement) {
        return (
            <div id="xx">
               <Button type="success" />
            </div>
        )
    }
    
}

