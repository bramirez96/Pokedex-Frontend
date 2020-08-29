# React Pokedex Frontend

Created as a school project and taken to the next level in my free time.

## Paradigm Refactor

These changes are implemented in an attempt to make the pokedex more functional. The paradigm of the application will be shifted from searching for the pokemon you want to see and doing a `GET` request for each one to doing a series of large `GET` requests at the beginning of the program run in order to load all pokemon from the website.

## Notable Features

- Ability to query the PokeAPI based on pokemon name or number and populate the displayed list
- Dynamic themeing (background and accent color) that can be changed in settings and is automatically stored in local storage
- Ability to store personal favorites in a different menu, also saved in local storage
- Styling created using styled-components, most of which utilize accent color and theme, which are stored with redux for use across application
  - All styles designed by me and CSS written myself
  - Custom cards that parse pokemon info into a readable format
  - All elements neatly displayed on screen with heavy use of flexbox
  - Important CSS variables stored in external data file for use across components

## Feature Wish List

- Change base functionality of the app:
  - rather than loading a single pokemon and relying on queries, I'd like to load all pokemon at application start
  - Note: this is implemented with bugs on branch `refactor-v2.0`

>I spent a good amount of my vacation week learning to implement redux-saga rather than thunk to better manage complex nested promises, but haven't yet had time to revisit this project and implement my new knowledge

- Popup when a Pokemon card is clicked displaying more detailed info in a lightbox
  - functionality is mostly in place, including redux reducers and actions to handle lightbox state
  - still deciding what extra info would be of interest to users as well as how to make the design visually distinct from the basic cards
  - waiting on redux-saga implementation as this isn't my main priority
