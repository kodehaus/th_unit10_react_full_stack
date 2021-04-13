
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
      data: JSON.stringify(body)
    })
    

//    return fetch(url, options);
  }

  async getCourses() {
    const response =  await this.api('/api/courses','GET', {});
    return response.data;
  } 
  
  async getUser(username, password) {
    const response = await axios.get('http://localhost:5000/api/users',
    {
      auth: {
        username: username,
        password: password
      },
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      }
    }
  )

    // const body = {
    //   auth: {
    //     username: username,
    //     password: password
    //   }
    // }
    // const response =  await this.api('/api/users','GET', body);
    return response;
  } 
  async createUser() {
    
  }
}
