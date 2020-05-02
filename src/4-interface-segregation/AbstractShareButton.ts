import EventHandler from './EventHandler';

export default abstract class AbstractShareButton {
    cssClass: string;
    eventHandler: EventHandler;

    constructor(cssClass: string) {
        this.cssClass = cssClass;
        this.eventHandler = new EventHandler();
    }

    abstract createAction(): Function;

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.cssClass, 'click', action);
    }
}