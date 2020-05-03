import IEventHandler from "./IEventHandler";

export default class DOMEventHandler implements IEventHandler {
    addEventListenerToClass(cssClass: string, event: string, fn: any) {
        const elements: any = document.querySelectorAll(cssClass);
        for (const element of elements) {
            element.addEventListener(event, fn);
        }
    }
}