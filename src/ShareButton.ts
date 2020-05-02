export default class Sharebutton {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    bind(cssClass: string, socialNetwork: string) {
        let link: string;

        if (socialNetwork === 'twitter') {
            link = `https://twitter.com`;
        }

        if (socialNetwork === 'facebook') {
            link = `https://facebook.com`;            
        }

        if (socialNetwork === 'linkedin') {
            link = `https://linkedin.com`;
        }

        const elements: any = document.querySelectorAll(cssClass);
        for (const element of elements) {
            element.addEventListener('click', event => window.open(link));
        }
    }
}