import IEventHandler from './IEventHandler';

export default abstract class AbstractShareButton {
    cssClass: string;
    eventHandler: IEventHandler;

    constructor(eventHandler: IEventHandler, cssClass: string) {
        this.cssClass = cssClass;
        this.eventHandler = eventHandler;
    }

    abstract createAction(): Function;

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.cssClass, 'click', action);
    }
}