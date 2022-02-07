import { x0 } from '../_helpers';

export default class Header {
    constructor() {
        this.el = x0('.m-header');
        if (!this.el) return;
        this.init();
    }

    handleEvents() {}

    init() {
        this.handleEvents();
    }
}
