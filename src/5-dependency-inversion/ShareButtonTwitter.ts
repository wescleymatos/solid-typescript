import AbstractLinkShareButton from './AbstractLinkShareButton';
import IEventHandler from './IEventHandler';

export default class ShareButtonTwitter extends AbstractLinkShareButton {
    
    constructor(eventHandler: IEventHandler, cssClass: string, url: string) {
        super(eventHandler, cssClass, url);
    }
    
    createLink(): string {
        return `${this.url}twitter.com`;
    }
}