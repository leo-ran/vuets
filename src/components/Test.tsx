import { Component, Vue, Emit, Inject  } from '@vuets/class'


@Component
export default class extends Vue {
    @Inject({from: 'title', default: 'title'}) public title!: string;
    @Inject({from: 'bar', default: 'bar' }) public title2!: string;
    public c: number = 100;
    private render() {
        return (
            <div onClick={() => { this.click(100) }}>
                test
                <br/>
                {this.title}
                <br/>
                {this.title2}
            </div>
        )
    }
    @Emit('click')
    private click(n: number): void {
        // console.log(this)
    }
    private created() {
        console.log(this)
    }
}