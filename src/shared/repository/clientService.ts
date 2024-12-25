import { api } from "./api";
import { ClientResponseI } from "./response-interface";

const getAllClient = async (): Promise<ClientResponseI[]> => {
  const { data } = await api.get("/b5c803b7e3e61412220c");
  return data;
};

const getClientById = async(id: string): Promise<ClientResponseI> => {
  const { data } = await api.get(`/b5c803b7e3e61412220c/${id}`)
  return data
}

export { getAllClient, getClientById };
