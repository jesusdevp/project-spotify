import axios from "axios";
import { TrackHandler, Client } from "spotify-sdk";

let client = Client.instance;
client.settings = {
  clientId: "f532c4ea3fa94386baeff297a4292e56",
  secretId: "4b62e678d4044ca8aefe980d1bd885ee",
  scopes: [
    "user-follow-modify user-follow-read user-library-read user-top-read"
  ],
  redirect_uri: "http://localhost:3000/"
};

export const checkSignIn = () => {
  return (dispatch, getState) => {
    if (sessionStorage.token) {
      client.token = sessionStorage.token;
    } else if (window.location.hash.split("&")[0].split("=")[1]) {
      sessionStorage.token = window.location.hash.split("&")[0].split("=")[1];
      client.token = sessionStorage.token;
    } else {
      client.login().then(url => {
        window.location.href = url;
      });
    }
  };
};
