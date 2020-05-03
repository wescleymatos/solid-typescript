export default interface IEventHandler {
    addEventListenerToClass(cssClass: string, event: string, fn: any);
}