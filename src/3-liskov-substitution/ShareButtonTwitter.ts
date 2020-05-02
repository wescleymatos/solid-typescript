import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonTwitter extends AbstractShareButton {
    
    constructor(cssClass: string, url: string) {
        super(cssClass, url);
    }
    
    createLink(): string {
        return `${this.url}twitter.com`;
    }
}