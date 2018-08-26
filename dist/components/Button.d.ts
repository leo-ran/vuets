import { Vue } from '@vuets/class';
interface PropTypes {
    type?: 'success' | 'danger' | 'primary';
    size?: number;
}
export declare class Button extends Vue<PropTypes> {
    size: number;
    type: 'success' | 'danger' | 'primary';
    state: boolean;
    watcherState(n: boolean, o: boolean): void;
}
export {};
