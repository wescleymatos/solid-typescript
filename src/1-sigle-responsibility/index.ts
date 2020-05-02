import ShareButton from './ShareButton';

const shareButton = new ShareButton('https://');
shareButton.bind('.btn-twitter', 'twitter');
shareButton.bind('.btn-facebook', 'facebook');
shareButton.bind('.btn-linkedin', 'linkedin');