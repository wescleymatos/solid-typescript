import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonFacebook extends AbstractLinkShareButton {
    
    constructor(cssClass: string, url: string) {
        super(cssClass, url);
    }
    
    createLink(): string {
        return `${this.url}facebook.com`;
    }
}