import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import axios from "axios";

const baseURL = "https://api.opensea.io/api/v1";

const createRequest = (url) => ({
  url,
});

//Note fetching NFT tokens from opensea marketPlace
//however they allowing to get only 50 tokens as max as a whole for the free-key
export const cryptoNFTAPI = createApi({
  reducerPath: "cryptoNFTAPI",
  baseQuery: fetchBaseQuery({
    baseURL: baseURL,
  }),
  endpoints: (builder) => ({
    getNft: builder.query({
      query: (count) =>
        createRequest(
          `https://api.opensea.io/api/v1/bundles?limit=${count}&offset=0`
        ),
    }),
  }),
});

//Redux toolkit automatically generated the hook for the query endpoint,
//also they provide loading state, fetching state etc
//Export the auto-generated hook for the `getNft` query endpoint
export const { useGetNftQuery } = cryptoNFTAPI;
