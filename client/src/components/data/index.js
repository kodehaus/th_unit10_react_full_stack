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

  async getCourse(id) {
    const response =  await this.api(`/api/courses/${id}`,'GET', {},{
      validateStatus: function (status) {
        return status < 600; // Resolve only if the status code is less than 500
      }
    });
    return response;
  } 

  async createUser(userObj){
    const response = await axios.post('http://localhost:5000/api/users', userObj,{
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      }
    });
    return response;

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
      })
      return response;
    }

async updateCourse(courseObj, courseId, userObj) {
  const response = await axios.put(`http://localhost:5000/api/courses/${courseId}`,
    courseObj,
    {
      auth: {
        username: userObj.emailAddress,
        password: userObj.password
      },
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      }
    });
    return response;
  }

  async addCourse(courseObj, userObj){
    const response = await axios.post(`http://localhost:5000/api/courses`,
    courseObj,
    {
      auth: {
        username: userObj.emailAddress,
        password: userObj.password
      },
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
    },
    {
      timeout: 500
    }
  );
  return response;
  }


  async deleteCourse(courseId, user){
    const response = await axios.put(`http://localhost:5000/api/courses/${courseId}/delete`,{},
    {
      auth: {
        username: user.emailAddress,
        password: user.password
      }
    }
  ); 
    return response;
  }
} 

