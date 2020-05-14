import { combineReducers } from "redux";

import { reducer as pokemonList } from "./pokemonList";
import { reducer as popup } from "./popup";
import { reducer as header } from "./header";
import { reducer as favorites } from "./favorites";
import { reducer as settings } from "./settings";

export default combineReducers({
  pokemonList,
  popup,
  header,
  favorites,
  settings,
});
