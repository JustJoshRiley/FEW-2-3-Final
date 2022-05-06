import React from "react";
import {useSelector} from 'react-redux';
import './Saved.css'

function Saved() {
    const savedResults = useSelector(state => state.saved)

    if (savedResults == null) {
        return null
    }
    return (
        savedResults.map(result => {
            return (
                <div className="Saved">
                    <h1>Name: {result.name}</h1>
                    <h4>Height: {result.height} cm</h4>
                    <h4>Hair Color: {result.hair_color}</h4>
                    <h4>Eye Color: {result.eye_color}</h4>
                    <h1>Home Planet: {result.homeworld.name}</h1>
                    <h4>Climate: {result.homeworld.climate}</h4>
                    <h4>Terrain: {result.homeworld.terrain}</h4>
                    <h4>Population: {result.homeworld.population}</h4>
                    <h1>Films</h1>
                    {result.films.map(film => {
                        return (
                            <h4>{film.title}</h4>
                        )
                    })}
                </div>
            )
        })
    )
}

export default Saved;