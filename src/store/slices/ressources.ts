import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import * as data from '../../../db.json'

interface IRessourcesState{
    memes:Array<MemeInterface>
    images:Array<ImageInterface>
}

const initialState: IRessourcesState = {
    memes:[...data.memes],
    images:[...data.images]
}

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    addSingleMeme: (state, action: PayloadAction<MemeInterface>) => {
    state.memes.push(action.payload);
    }
  }
});



export const {addSingleMeme} = ressources.actions

const ressourcesReducer=ressources.reducer
export default ressourcesReducer