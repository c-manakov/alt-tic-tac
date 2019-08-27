// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';


function playerToString(player) {
  if (player) {
    return "player_2";
  } else {
    return "player_1";
  }
}

function initState(param) {
  return /* record */[
          /* input */"",
          /* round */undefined
        ];
}

function reducer(state, action) {
  if (typeof action === "number") {
    return state;
  } else if (action.tag) {
    return /* record */[
            /* input */action[0],
            /* round */state[/* round */1]
          ];
  } else {
    return /* record */[
            /* input */state[/* input */0],
            /* round *//* record */[
              /* roundId */action[0],
              /* playerId */action[1],
              /* player */action[2],
              /* socket */action[3],
              /* channel */action[4]
            ]
          ];
  }
}

var initialState = /* record */[
  /* input */"",
  /* round */undefined
];

exports.playerToString = playerToString;
exports.initState = initState;
exports.initialState = initialState;
exports.reducer = reducer;
/* No side effect */
