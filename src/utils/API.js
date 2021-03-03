// import axios from "axios";
// export default {
 
//   getUsers: function() {
//     return axios.get("https://randomuser.me/api/?results=200&nat=us");
//   }
// }


import axios from "axios";
const BASEURL = "https://randomuser.me/";
const APIKEY = "api/?results=200&nat=us";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
