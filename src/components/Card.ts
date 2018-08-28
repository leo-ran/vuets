import { Component, Vue, Prop  } from '@vuets/class'
import { Getter, NameSpace, Mutation, State } from '@vuets/vuex';

interface PropTypes {
    title: string
    onClick: () => any
}

const userModule = NameSpace('userx')

@Component({
    template: require('./card.html')
})
export class Card extends Vue<PropTypes> {
    @Getter('now') public now!: string;
    @Prop(String) public title!: string;
    @userModule.Getter('name') public name!: string;
    @userModule.Mutation('changeName') public changeName!: Function;
    @State('now') public stateNow!: string;
    @userModule.State('name') public stateName!: string;
    @Mutation('changeNow') public run!: Function;
    private created() {
        console.log(this)
    }

    private mounted() {
        setTimeout(() => {
            this.changeName('李四')
        }, 2000);
    }
}