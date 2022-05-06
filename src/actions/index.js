export const LOADSEARCH = 'LOADSEARCH'
export const SAVEPERSON = 'SAVEPERSON'

export const loadSearch = (query) => {
    return async(dispatch) => {
        const path = `https://swapi.dev/api/people/${query}/`
        const response = await fetch(path)
        const json = await response.json()
        console.log(json)
        const result = json

        dispatch({
            type:LOADSEARCH,
            payload:result
        })
    }
}

let SavedResults = []

export const savePerson = (result) => {
    return async(dispatch) => {
        const path = result["homeworld"]
        const planetInfo = await fetch (path)
        const planetJson = await planetInfo.json()

        const filmsRes = await Promise.all(planetJson["films"].map(film => fetch(film)))
        const filmsJson = await Promise.all(filmsRes.map(response => response.json()))


        result["homeworld"] = planetJson
        result["films"] = filmsJson

        SavedResults.push(result)
        const dispatchedResults = []

        for (let i = 0; i < SavedResults.length; i += 1){
            dispatchedResults.push(SavedResults[i])
        }
        SavedResults = dispatchedResults
        dispatch({
            type:SAVEPERSON,
            payload:SavedResults
        })
    }
}