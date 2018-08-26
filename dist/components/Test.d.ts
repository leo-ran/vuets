import { Vue } from '@vuets/class';
interface PropTypes {
    title?: string;
}
export default class extends Vue<PropTypes> {
    private render;
}
export {};
