import {Schema} from 'mongoose'
import {mongoose} from "../../db";

/**
 * client	Object	The return value.
 * client.id	String	A unique string identifying the client.
 * [client.redirectUris]	Array<String>	Redirect URIs allowed for the client. Required for the authorization_code grant.
 * client.grants	Array<String>	Grant types allowed for the client.
 * [client.accessTokenLifetime]	Number	Client-specific lifetime of generated access tokens in seconds.
 * [client.refreshTokenLifetime]	Number	Client-specific lifetime of generated refresh tokens in seconds.
 */
export const ClientSchema = new Schema({
  clientSecret: String,
  redirectUris: [String],
  grants: [String],
  accessTokenLifetime: Number,
  refreshTokenLifetime: Number,
}, {
  toObject: {virtuals: true},
});

export const ClientModel = mongoose.model('Client', ClientSchema);
