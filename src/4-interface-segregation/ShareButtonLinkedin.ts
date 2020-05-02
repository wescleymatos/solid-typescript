import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonLinkedin extends AbstractLinkShareButton {
    
    constructor(cssClass: string, url: string) {
        super(cssClass, url);
    }
    
    createLink(): string {
        return `${this.url}linkedin.com`;
    }
}