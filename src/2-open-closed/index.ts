import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';

const twitter = new ShareButtonTwitter('.btn-twitter', 'https://');
twitter.bind();

const facebook = new ShareButtonFacebook('.btn-facebook', 'https://');
facebook.bind();

const linkedin = new ShareButtonLinkedin('.btn-linkedin', 'https://');
linkedin.bind();