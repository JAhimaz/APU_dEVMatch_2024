import express from "express";
import User from "@models/User";
import { Env } from "@utils/Env";
import Error from "@libs/error";
import Success from "@libs/success";
import fetch from "node-fetch";

type MasResponse = {
  status: number,
  result: {
    user: {
      name: string,
      email: string,
      ic: string,
      phone: string,
    },
    wallet: {
      wallet_id: number,
      wallet_name: string,
      wallet_address: string,
      wallet_type: string,
      is_active: number,
      entity_id: number,
      entity_category_id: number,
    }
  }
}

const CheckUser = express.Router();

CheckUser.get("/:address", (req, res) => {
  const { address } = req.params;

  if(!address) {
    return Error(res, 400, "BAD_REQUEST", "Please provide an address");
  }

  User.findOne({ aptosAddr: address }).then(async (user) => {
    if(user) {
      return Success(res, 200, "USER_FOUND", "User has been found", user);
    } else {
      
      // Create a MAS User
      // https://service-testnet.maschain.com/api/wallet/create-user
      // headers
      // client_id and client_secret
      // body includes name, email, ic for the name use the address, ic use the address, email, hash and add @ bloodchain.com

      // CAll the MAS API to create a user
      
      const user = fetch("https://service-testnet.maschain.com/api/wallet/create-user", {
        method: "POST",
        headers: {
          "client_id": Env.MAS_CLIENT_ID,
          "client_secret": Env.MAS_CLIENT_SECRET,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: address,
          email: `${address}@bloodchain.com`,
          ic: address,
      })}).then((response) => {
        return response.json();
      }).then((data: MasResponse) => {
        const newUser = new User({
          id: data.result.wallet.wallet_id.toString(),
          aptosAddr: address,
          version: 0,
          masAddr: data.result.wallet.wallet_address,
          masId: data.result.wallet.wallet_id,
        })

        newUser.save().then((user) => {
          return Success(res, 200, "USER_FOUND", "User has been created", user);
        }).catch((err) => {
          return Error(res, 420, "UNKNOWN_ERROR", err);
        })
      })
    }
  }).catch((err) => {
    return Error(res, 420, "UNKNOWN_ERROR", err);
  })
}) 

export default CheckUser;