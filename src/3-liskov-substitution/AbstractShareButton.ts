import EventHandler from './EventHandler';

export default abstract class AbstractShareButton {
    url: string;
    cssClass: string;
    eventHandler: EventHandler;

    constructor(cssClass: string, url: string) {
        this.cssClass = cssClass;
        this.url = url;
        this.eventHandler = new EventHandler();
    }

    abstract createLink(): string;

    bind() {
        const link = this.createLink();
        this.eventHandler.addEventListenerToClass(this.cssClass, 'click', () => window.open(link));
    }
}