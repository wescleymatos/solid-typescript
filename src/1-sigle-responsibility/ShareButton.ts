import EventHandler from './EventHandler';

export default class Sharebutton {
    url: string;
    eventHandler: EventHandler;

    constructor(url: string) {
        this.url = url;
        this.eventHandler = new EventHandler();
    }

    bind(cssClass: string, socialNetwork: string) {
        let link: string;

        if (socialNetwork === 'twitter') {
            link = `${this.url}twitter.com`;
        }

        if (socialNetwork === 'facebook') {
            link = `${this.url}facebook.com`;            
        }

        if (socialNetwork === 'linkedin') {
            link = `${this.url}linkedin.com`;
        }

        this.eventHandler.addEventListenerToClass(cssClass, 'click', () => window.open(link));
    }
}