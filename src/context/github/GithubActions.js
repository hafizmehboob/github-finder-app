import axios from "axios";
const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {Authorization: `token ${GITHUB_TOKEN}`}
})

 // Get Search Results
 export const searchUsers = async(text) => {
    const params = new URLSearchParams({
       q: text
     });
    const response = await github.get(`/search/users?${params}`);
    return response.data.items;  
  }

  // combine get single user & user repos

  export const getUserAndRepos = async(login) => {
    const [user, repos] = await Promise.all([
          github.get(`/users/${login}`),
          github.get(`/users/${login}/repos`)
    ])
    return { user: user.data, repos: repos.data }
  }


  //   // Get user repos
  // export const getUserRepos = async(login) => {
  //     const params = new URLSearchParams({
  //       sort: 'created',
  //       per_page: 10
  //     })  
  //     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,
  //        {
  //            headers: {
  //                Authorization: `token ${GITHUB_TOKEN}`
  //            }
  //        })
  //     const data = await response.json();    
  //     return data; 
  //   } 
  //       // Get Single User Results
  //     export const getUser = async(login) => {
  //       const response = await fetch(`${GITHUB_URL}/users/${login}`,
  //          {
  //              headers: {
  //                  Authorization: `token ${GITHUB_TOKEN}`
  //              }
  //          });
  //          if(response.status === 404) {
  //            window.location ='/notfound'
  //         } else {
  //            const data = await response.json();    
  //            return data; 
  //          }
  //     }
  