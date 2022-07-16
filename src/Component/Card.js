import React, { useState } from 'react'
import '../App.css';
import Modal from "react-bootstrap/Modal";
// import PokemonDetail from './PokemonDetail';
const Card = ({ pokemon }) => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <>


            <div className="card" >
                <div className='pokImage'>

                    <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    {/* <p className="card-text"> {pokemon.name}</p>
                    <div >
                        {
                            pokemon.types?.map((type, i) => {
                                return (

                                    <div className="Card__type" key={i} >
                                        {type.type.name}
                                    </div>
                                )
                            })
                        }

                    </div>

                    <h1 >{pokemon.id}</h1> */}
                     <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Name</label>
                                </div>
                                <div className="col-md-8"> <p>{pokemon.name}</p></div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Id</label>
                                </div>
                                <div className="col-md-8"> <p>{pokemon.id}</p></div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Type</label>
                                </div>
                                <div className="col-md-8">
                                    <div >
                                        {
                                            pokemon.types?.map((type, i) => {
                                                return (

                                                    <div className="Card__type" key={i} >
                                                        {type.type.name}
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="row"></div>
                    <hr />
                    <div>
                        
                    <button onClick={showModal}>Click to open</button>
                    </div>
                </div>
            </div>
            {/* </div>
</div> */}
            <Modal show={isOpen} style={{marginTop:'100px'}}>
                <Modal.Header>Detail</Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="" style={{ width: '200px' }} />
                        </div>
                        <div className='col-md-6'>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Name</label>
                                </div>
                                <div className="col-md-8"> <p>{pokemon.name}</p></div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Id</label>
                                </div>
                                <div className="col-md-8"> <p>{pokemon.id}</p></div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Type</label>
                                </div>
                                <div className="col-md-8">
                                    <div >
                                        {
                                            pokemon.types?.map((type, i) => {
                                                return (

                                                    <div className="Card__type" key={i} >
                                                        {type.type.name}
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Moves</label>
                                </div>
                                <div className="col-md-8"> <p>{pokemon?.moves.length}</p></div>
                            </div>            
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Close</button></Modal.Footer>
            </Modal>
        </>
    )
}

export default Card