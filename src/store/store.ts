import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addSingleMeme } from "./slices/ressources";
import currentReducer, { update, clear } from "./slices/current";
import { emptyMeme } from "orsys-tjs-meme";

export const store = configureStore({
  reducer: {
    ressources: ressourcesReducer,
    current: currentReducer,
  },
});

store.subscribe(() => {
  console.groupCollapsed("Changement dans le store");
  console.log(store.getState());
  console.groupEnd();
});

store.dispatch(
  update({
    ...emptyMeme,
    id: 999,
    titre: "Mon meme Redux",
    text: "Salut Redux Test Dispatch !",
    imageId: 0,
  })
);

store.dispatch(
  addSingleMeme({
    ...emptyMeme,
    id: 1000,
    titre: "Nouveau meme",
    text: "Ajouté dans ressources",
    imageId: 1,
  })
);

store.dispatch(clear());

export type RootState = ReturnType<typeof store.getState>
export type useAppDispatch = typeof store.dispatch