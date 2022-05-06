import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {savePerson} from '../actions';
import './Result.css';

function DisplayResult() {
    const result = useSelector(state => state.search)
    const dispatch = useDispatch()

    if (result == null) {
        return null
    }

    return (
        <div className='Result'>
            <h1>Name: {result.name}</h1>
            <h4>Height: {result.height} cm</h4>
            <h4>Hair Color: {result.hair_color}</h4>
            <h4>Eye Color: {result.eye_color}</h4>
            <button
                type='submit'
                onClick={e => {
                e.preventDefault()
                dispatch(savePerson(result))
                }}
                >Save
            </button>
        </div>
    )
}

export default DisplayResult;