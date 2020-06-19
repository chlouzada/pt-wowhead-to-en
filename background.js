const prefix = 'en';

var handler = function (details) {
  let url = details.url;
  let tokens = url.split('.');

  if (tokens[1] === 'classic')
    url = 'https://' + tokens[1] + '.' + tokens[2] + '.' + tokens[3];
  else url = 'https://' + prefix + '.' + tokens[1] + '.' + tokens[2];

  // let url = details.url;
  // let tokens = (url.split('.')[1] === 'classic') ? url.split('classic.wowhead.com') : url.split('wowhead.com') ;

  // alert(tokens[0])
  // alert(tokens[1])

  // if (tokens[1] === 'classic')
  //   url = 'https://' + tokens[1] + '.' + tokens[2] + '.' + tokens[3];
  // else
  //   url = 'https://' + prefix + '.' + tokens[1] + '.' + tokens[2];

  return {
    redirectUrl: url,
  };
};

var requestFilter = {
  urls: ['*://pt.wowhead.com/*', '*://pt.classic.wowhead.com/*'],
};

var extraInfoSpec = ['blocking'];

chrome.webRequest.onBeforeRequest.addListener(
  handler,
  requestFilter,
  extraInfoSpec
);
