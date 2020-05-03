import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';
import DOMEventHandler from './DOMEventHandler';

const domEventHandler = new DOMEventHandler();

const twitter = new ShareButtonTwitter(domEventHandler, '.btn-twitter', 'https://');
twitter.bind();

const facebook = new ShareButtonFacebook(domEventHandler, '.btn-facebook', 'https://');
facebook.bind();

const linkedin = new ShareButtonLinkedin(domEventHandler, '.btn-linkedin', 'https://');
linkedin.bind();

const print = new ShareButtonPrint(domEventHandler, '.btn-print');
print.bind();