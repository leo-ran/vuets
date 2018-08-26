import * as tslib_1 from "tslib";
import { Component, Model, Prop, Vue, Watch } from '@vuets/class';
let Button = class Button extends Vue {
    constructor() {
        super(...arguments);
        this.state = false;
    }
    watcherState(n, o) {
        // console.log(this.state)
    }
};
tslib_1.__decorate([
    Prop({ type: Number, default: 100 }),
    tslib_1.__metadata("design:type", Number)
], Button.prototype, "size", void 0);
tslib_1.__decorate([
    Model('update', String),
    tslib_1.__metadata("design:type", String)
], Button.prototype, "type", void 0);
tslib_1.__decorate([
    Watch('state'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean, Boolean]),
    tslib_1.__metadata("design:returntype", void 0)
], Button.prototype, "watcherState", null);
Button = tslib_1.__decorate([
    Component({
        template: `
        <button @click="state=!state">按钮一枚{{size}} {{state}}{{type}}</button>
    `
    })
], Button);
export { Button };
//# sourceMappingURL=Button.js.map