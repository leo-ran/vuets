import { Vue, Component,Prop, Model, Watch } from '@vuets/class'


interface PropTypes {
    type?: 'success' | 'danger' | 'primary'
    size?: number;
}

@Component({
    template: `
        <button @click="state=!state">按钮一枚{{size}} {{state}}{{type}}</button>
    `
})
export class Button extends Vue<PropTypes>{
    @Prop({type: Number, default:100}) size!:number;
    @Model('update',String) type!: 'success' | 'danger' | 'primary';
    public state:boolean = false;
    @Watch('state') 
    watcherState(n:boolean, o:boolean): void{
        console.log(this.state)
    }
}