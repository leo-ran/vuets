import { Vue ,Component, Prop } from '@vuets/class'
import { Button } from '@/components/Button';

interface PropTypes {
    title?:string;
}

@Component
export default class extends Vue<PropTypes> {
    render() {
        return (
            <div id="xx">
               <Button type="success" />
            </div>
        )
    }
    
}

