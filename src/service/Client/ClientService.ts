import {ClientModel, ClientSchema} from "./ClientSchema";
import {Client} from "oauth2-server";


export const saveClient = async (client: Client): Promise<Client> => {
  const clientInstance = new ClientModel(client);
  const result = await clientInstance.save();
  return result.toObject();
}

export const getClientById = async (clientId: string): Promise<Client> => {
  const client = await ClientModel.findById(clientId)
  console.log("debug:", client)
  return client.toObject()
}
