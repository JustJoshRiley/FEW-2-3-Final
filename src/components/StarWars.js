import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loadSearch} from '../actions';
import './StarWars.css'

function StarWars() {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()

    const onChange = (e) => {
        if (e.target.value === '17' || e.target.value > 83 || e.target.value < 1) {
            alert("Not a valid number to query. Sorry sucker")
        } else {
            setQuery(e.target.value)
        }
    }

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
                    onChange={onChange}
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