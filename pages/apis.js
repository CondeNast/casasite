const axios = require('axios'); 
export default function makeApiCall(method, url, requestParams){

    let data = {};
    
    axios({
        method: method,
        url: url,
        headers: headers
      })
        .then(response => {
            data = Object.assign({}, response.data);
          
        })
        .catch(error => {
           console.log(error);
           return error;
        })

        return data;
}

