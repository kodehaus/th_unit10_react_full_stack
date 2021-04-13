
const axios = require('axios').default;
const config = require('../../config');
  


export function getFlickrApiKey (){
  return 
}

export default class Data {
  async api(path, method, body = null) {
    const url = config.apiUrl + path
    return await axios({
      method: method,
      url: url,
      data: {
        body
      }
    })
    

//    return fetch(url, options);
  }

  async getCourses() {
    const response =  await this.api('/api/courses','GET', {});
    return response.data;
  } 
  
  async createUser() {
    
  }
}
