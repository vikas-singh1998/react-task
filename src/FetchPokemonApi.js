import axios from "axios";

 export const FetchPokemonApi =async (url) => {
   return axios(url).then(res => {
        return(res.data)
      })
    }


 export const FetchPokemon =async (url) => {
   return axios(url).then(res => {
        return(res.data)
      })
    }

    export const FetchSearchPokemon =async (url) => {
      return axios(url).then(res => {
           return(res.data)
         })
       }


       export const FetchFilterPokemon =async (url) => {
        return axios(url).then(res => {
             return(res.data)
           })
         }
  
