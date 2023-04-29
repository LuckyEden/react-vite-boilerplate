import store from "../store"
import { setPokemonName } from "../store/reducers"
import { api } from "./api"


const PokemonAPI = {
    get: async function (name:string) {
        const response = await api.request({
            url: `/pokemon/${name}`,
            method: "GET"
        })
        var payload:any = {
            name: response.data.name
        }
        
        store.dispatch(setPokemonName(payload))
        return response.data
    },
    getPaginated: async function ({ limit, offset }:{ limit: number, offset: number }) {
        const response = await api.request({
            url: "/pokemon/",
            method: "GET",
            params: {
                limit: limit,
                offset: offset,
            }
        })

        return response.data.results
    },
}

export default PokemonAPI;