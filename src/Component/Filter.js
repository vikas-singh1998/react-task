import React ,{useState} from 'react'
import {FetchFilterPokemon} from '../FetchPokemonApi'


const Filter = ({typeData}) => {
    const [filterParam, setFilterParam] = useState('')
    // const [filterPokemondata,setFilterPokemondata] = useState([])

    // useEffect(() => {
    //     setPokemondata()
    // }, [])
    

    // const getAllTypePokemonFilter = async() => {
    //     const apiData= await FetchFilterPokemon(filterParam)
    
    //     // getPokemonFilter(apiData.pokemon)
    //       //  console.log(apiData.pokemon);
    //     //setTypeData(apiData)
    //  }


    //  const getPokemonFilter = async(apiData) => {
    //     let x= Promise.all( apiData.map(async(res)=>{
    //       const invPokemonData= await FetchFilterPokemon(res.pokemon.url)
    //       return invPokemonData
    //      }))
    //      setFilterPokemondata(await x)
     
    //   }

    
  return (
   
<div className="dropdown">

  <select name="" id="" onChange={(e) => {
        setFilterParam(e.target.value)
        
         }}>
      <option value="">Please Select</option>
  {
    typeData.map(data=>{
       return <>
        <option value={data.url}>{data.name}</option>
        </>
    })
  }
  </select>
</div>

  )
}

export default Filter