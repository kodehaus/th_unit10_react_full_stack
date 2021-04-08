
const axios = require('axios').default;
const config = require('../../config');
  


export function getFlickrApiKey (){
  return 
}

export default class Data {
  async api(path, method, body = null) {
    const url = config.apiUrl + path
    await axios({
      method: method,
      url: url,
      data: {
        body
      }
    })
    

//    return fetch(url, options);
  }

  async getCourses() {
    return await this.api('/courses','GET', {});
    
  } 
  
  async createUser() {
    
  }
}
