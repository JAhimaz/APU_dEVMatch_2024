import express from "express";
import User from "@models/User";
import { Env } from "@utils/Env";
import Error from "@libs/error";
import Success from "@libs/success";
import fetch from "node-fetch";

const GetNFTCerts = express.Router();

GetNFTCerts.get("/:address", (req, res) => {

  const { address } = req.params;

  if(!address) {
    return Error(res, 400, "BAD_REQUEST", "Please provide an address");
  }

  const URL = "https://service-testnet.maschain.com/api/certificate/get-certificate?" + new URLSearchParams({
    to: address,
  }).toString();
  
  fetch(URL, {
    method: "GET",
    headers: {
      "client_id": Env.MAS_CLIENT_ID,
      "client_secret": Env.MAS_CLIENT_SECRET,
      "Content-Type": "application/json"
    },
  }).then((response) => {
    return response.json();
  }).then((data: unknown) => {
    return Success(res, 200, "CERTS_FOUND", "Certificates have been found", data);
  }).catch((err) => {
    return Error(res, 400, "BAD_REQUEST", err);
  });

})

export default GetNFTCerts;