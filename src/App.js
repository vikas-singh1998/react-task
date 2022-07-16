import React, { useEffect, useState } from 'react'
import { FetchPokemonApi, FetchPokemon, FetchSearchPokemon } from './FetchPokemonApi'
import Card from './Component/Card'
import './App.css'
import Filter from './Component/Filter'
const App = () => {
  let [pokemondata1, setPokemondata] = useState([])
  const [typeData, setTypeData] = useState([])
  const [value, setvalue] = useState("")
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/'
  useEffect(() => {
    getAllPokemon(initialUrl)
    getAllTypePokemon()
    
  },[]);

  const searchPokemon = async () => {
    const apiData = await FetchSearchPokemon(`https://pokeapi.co/api/v2/pokemon/${value.target.value}`)
    let myArray1 = []
    myArray1.push(apiData)
    setPokemondata(myArray1)
  }


  const getAllPokemon = async (url) => {
    const apiData = await FetchPokemonApi(url)
    console.log(apiData);
    await getPokemon(apiData.results)
    setNextUrl(apiData.next);
    setPrevUrl(apiData.previous);

  }

  // get all type of pokemon
  const getAllTypePokemon = async () => {
    const apiData = await FetchPokemonApi(` https://pokeapi.co/api/v2/type/`)
    console.log(apiData);
    setTypeData(apiData.results)
  }

  const getPokemon = async (apiData) => {
    let x = Promise.all(apiData.map(async (res) => {
      const invPokemonData = await FetchPokemon(res.url)
      //  console.log(invPokemonData);
      return invPokemonData
    }))
    setPokemondata(await x)
  }
  
  const next = async () => {
    console.log(nextUrl);
    let data = await getAllPokemon(nextUrl);
    console.log(await data);
    await getPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  }

  const prev = async () => {
    if (!prevUrl) return;
    let data = await getAllPokemon(prevUrl);
    await getPokemon(data.data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  }


    return (
      <>
        <div className="input-group input-group1" >
          <input type="search" className="form-control rounded  " placeholder="Search by pokemon name or id" aria-label="Search" aria-describedby="search-addon" onChange={(value1) => { setvalue(value1) }} />
          <button type="button" className="btn btn-outline-primary searchButton" onClick={searchPokemon}>Search</button>


          <Filter className="dropdown" typeData={typeData}  />

        </div>
        <div className="row">
          {pokemondata1.map((pokemon, index) => {
            return <>

              <div className="col-md-4">
                <Card key={index} pokemon={pokemon} />
              </div>
              {/* </div> */}
            </>
          })}
        </div>
        <div className="btn btn1">
          <button onClick={prev} style={{marginLeft:'160px'}}>Prev</button>
          <button onClick={next} style={{marginLeft:'auto'}}>Next</button>
        </div>
      </>

    )


  }

  export default App
