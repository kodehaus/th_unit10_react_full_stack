const config = require('./config');
  


export function getFlickrApiKey (){
  return config.flickrApiKey;
}

export function getDisplayImageCount (){
  return config.imageDisplayCount;
}