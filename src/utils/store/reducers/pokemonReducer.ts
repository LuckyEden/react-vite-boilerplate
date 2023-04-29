import { createSlice } from '@reduxjs/toolkit'


interface PokemonState {
  name: string;
}

// Define the initial state using that type
const initialState: PokemonState = {
  name: "",
}

export const pokeSlice = createSlice({
  name: 'pokemon',

  initialState,
  reducers: {
    setPokemonName: (state:PokemonState, payload:any) => {
      
      state.name = payload.payload.name;
    },
  },
})

export const { setPokemonName } = pokeSlice.actions


export default pokeSlice.reducer