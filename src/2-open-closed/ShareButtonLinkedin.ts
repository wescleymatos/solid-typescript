import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonLinkedin extends AbstractShareButton {
    
    constructor(cssClass: string, url: string) {
        super(cssClass, url);
    }
    
    createLink(): string {
        return `${this.url}linkedin.com`;
    }
}