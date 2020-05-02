import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonFacebook extends AbstractShareButton {
    
    constructor(cssClass: string, url: string) {
        super(cssClass, url);
    }
    
    createLink(): string {
        return `${this.url}facebook.com`;
    }
}