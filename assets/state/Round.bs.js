// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Json = require("rex-json/./src/Json.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Socket$ReactHooksTemplate = require("../Socket.bs.js");

var Invalid = Caml_exceptions.create("Round-ReactHooksTemplate.Invalid");

function joinRound(dispatch, roundId) {
  return fetch("/api/join/" + roundId).then((function (prim) {
                  return prim.text();
                })).then((function (resp) {
                var json = Json.parse(resp);
                var match = Json.get("player_id", json);
                if (match !== undefined) {
                  var match$1 = match;
                  if (typeof match$1 !== "number") {
                    if (!match$1.tag) {
                      var playerId = match$1[0];
                      var match$2 = Json.get("player", json);
                      if (match$2 !== undefined) {
                        var match$3 = match$2;
                        if (typeof match$3 !== "number") {
                          if (!match$3.tag) {
                            switch (match$3[0]) {
                              case "player_1" : 
                                  var socket = Socket$ReactHooksTemplate.initSocket(playerId, "player_1");
                                  var channel = Socket$ReactHooksTemplate.joinRoom(socket, roundId);
                                  Curry._1(dispatch, /* JoinRound */Block.__(0, [
                                          roundId,
                                          playerId,
                                          /* Player1 */0,
                                          socket,
                                          channel
                                        ]));
                                  break;
                              case "player_2" : 
                                  var socket$1 = Socket$ReactHooksTemplate.initSocket(playerId, "player_2");
                                  var channel$1 = Socket$ReactHooksTemplate.joinRoom(socket$1, roundId);
                                  Curry._1(dispatch, /* JoinRound */Block.__(0, [
                                          roundId,
                                          playerId,
                                          /* Player2 */1,
                                          socket$1,
                                          channel$1
                                        ]));
                                  break;
                              default:
                                
                            }
                          }
                          
                        }
                        
                      }
                      
                    }
                    
                  }
                  
                }
                return Promise.resolve(/* () */0);
              }));
}

function startNewRound(dispatch) {
  return fetch("/api/start").then((function (prim) {
                  return prim.text();
                })).then((function (resp) {
                var json = Json.parse(resp);
                var match = Json.get("id", json);
                if (match !== undefined) {
                  var match$1 = match;
                  if (typeof match$1 === "number" || match$1.tag) {
                    return Promise.reject(Invalid);
                  } else {
                    return joinRound(dispatch, match$1[0]);
                  }
                } else {
                  return Promise.reject(Invalid);
                }
              }));
}

exports.Invalid = Invalid;
exports.joinRound = joinRound;
exports.startNewRound = startNewRound;
/* Json Not a pure module */
