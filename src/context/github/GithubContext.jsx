import { createContext, useReducer, useState } from "react";
import githubReducer from "./GithubReducer";

 const GithubContext = createContext();

 const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
 const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
   // const [users, setUsers] = useState([]);
  //  const [loading, setLoading] = useState(true);
   /** using reducer function replacing useState **/
    const initialState = {
      users: [],
      user: {},
      repos: [],
      loading: false
    }

  const [state, dispatch] = useReducer(githubReducer, initialState);
  // Get initial users (testing purposes)
  // const fetchUsers = async() => {
  //   setLoading();

  //       const response = await fetch(`${GITHUB_URL}/users`,
  //          {
  //              headers: {
  //                  Authorization: `token ${GITHUB_TOKEN}`
  //              }
  //          })
  //       const data = await response.json();    
  //       // setUsers(data)
  //       // setLoading(false)
  //       // replacing with dispatch
  //       dispatch({
  //         type: 'GET_USERS',
  //         payload: data
  //       })
  //     } 
  // Get Search Results
 
    const searchUsers = async(text) => {
        setLoading();
        const params = new URLSearchParams({
           q: text
         })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`,
           {
               headers: {
                   Authorization: `token ${GITHUB_TOKEN}`
               }
           })
        const {items} = await response.json();    
        dispatch({
          type: 'GET_USERS',
          payload: items
        })
      } 

  // Get user repos
 
  const getUserRepos = async(login) => {
    setLoading();
    
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,
       {
           headers: {
               Authorization: `token ${GITHUB_TOKEN}`
           }
       })
    
    const data = await response.json();    
    
    dispatch({
      type: 'GET_REPOS',
      payload: data
    })

  } 


      // Get Single User Results
     const getUser = async(login) => {
      setLoading();

      const response = await fetch(`${GITHUB_URL}/users/${login}`,
         {
             headers: {
                 Authorization: `token ${GITHUB_TOKEN}`
             }
         });

         if(response.status === 404) {
         
           window.location ='/notfound'
         
        } else {
           const data = await response.json();    
        
          dispatch({
            type: 'GET_USER',
            payload: data
          })
       
         }
  
    }


      // set Loading
      const setLoading = () => dispatch({
        type  : 'SET_LOADING'
      });
      
           // clear users
      const clearUsers = () => dispatch({
            type: 'CLEAR_USERS'
      });

      return (
      <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
      >
        {children}
      </GithubContext.Provider>
     )
}

export default GithubContext;









