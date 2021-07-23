import { imageUrl } from "./constants";
import httpClient from "@/services/httpClient";
import { server } from "@/services/constants";

export const getProducts = () => {
  return httpClient.get(server.PRODUCT_URL);
};


