import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loadSearch} from '../actions';
import './StarWars.css'

function StarWars() {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()

    return (
        <div className='StarWars'>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(loadSearch(query))
                }}
            >
                <input
                    type="number"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default StarWars;