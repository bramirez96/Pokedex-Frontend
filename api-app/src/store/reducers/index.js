import { combineReducers } from "redux";

import { reducer as popup } from "./popup";
import { reducer as header } from "./header";
import { reducer as favorites } from "./favorites";
import { reducer as settings } from "./settings";
import { reducer as pokemon } from "./pokemon_2.0";

export default combineReducers({
  popup,
  header,
  favorites,
  settings,
  pokemon,
});
