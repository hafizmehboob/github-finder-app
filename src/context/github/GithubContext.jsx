import { createContext, useReducer, useState } from "react";
import githubReducer from "./GithubReducer";

 const GithubContext = createContext();

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
  

      return (
      <GithubContext.Provider value={{
        ...state,
        dispatch
      }}
      >
        {children}
      </GithubContext.Provider>
     )
}

export default GithubContext;









