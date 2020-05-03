import AbstractShareButton from './AbstractShareButton';
import IEventHandler from './IEventHandler';

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
    url: string;

    constructor(eventHandler: IEventHandler, cssClass: string, url: string) {
        super(eventHandler, cssClass);
        this.url = url;
    }

    abstract createLink(): string;

    createAction(): Function {
        const link = this.createLink();
        return () => window.open(link);
    }
}