import AbstractShareButton from './AbstractShareButton';
import IEventHandler from './IEventHandler';

export default class ShareButtonPrint extends AbstractShareButton {
    
    constructor(eventHandler: IEventHandler, cssClass: string) {
        super(eventHandler, cssClass);
    }
    
    createAction(): Function {
        return () => window.print();
    }
}