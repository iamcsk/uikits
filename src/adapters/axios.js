import axios from 'axios'

/*eslint-disable */
const HTTP = axios.create({
  baseURL: 'statics/',
  headers: {
    'Content-Type': 'application/json'
  },
  transformResponse: [function (data,req) {
    /*
      transformResponse function will return response in text format
      without this function promise will return response in JSON
      We will validate repsponse data here itself
     */
    if(data.hasOwnProperty('length') && data.length === 0) {
        console.error(" Empty response ");
        data = []
    }


    var jsonData;
    try {
      jsonData = JSON.parse(data)
      if(jsonData.statusCode === 500){
        this.$notify.error({
          title: 'Error',
          message: 'Internal server error '
        });
      }
    } catch (e) {
      // console.error(" could not parse response ");
      // jsonData = ''
    }

    return jsonData;
  }],
})
/*eslint-enable */

export default HTTP
