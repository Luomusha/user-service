import {ClientModel, ClientSchema} from "./ClientSchema";
import {Client} from "oauth2-server";


export const saveClient = async (client: Client): Promise<Client> => {
  const clientInstance = new ClientModel(client);
  const result = await clientInstance.save();
  return client;
}

export const getClientById = async (clientId: string): Promise<Client> => {
  const client = await ClientModel.findById(clientId)
  return client.toObject()
}

// saveClient({
//   id: 'aaaaaabbbbbb',
//   redirectUris: ['http://www.baidu.com'],
//   grants: ['authorization_code',
//     'client_credentials',
//     'refresh_token',
//     'password'],
//   accessTokenLifetime: 3600,
//   refreshTokenLifetime: 7200,
// })
