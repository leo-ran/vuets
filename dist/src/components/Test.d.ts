import { Vue } from '@vuets/class';
import { CreateElement } from 'vue';
interface PropTypes {
    title?: string;
}
export default class extends Vue<PropTypes> {
    render(h: CreateElement): JSX.Element;
}
export {};
