import fetch from 'node-fetch'

export type LocationInfo = {
  country: 'China',
  countryCode: 'CN',
  region: 'LN',
  regionName: 'Liaoning',
  city: 'Dalian',
  district: '',
  zip: '',
  lat: 38.9122,
  lon: 121.6022,
  timezone: 'Asia/Shanghai',
  as: 'AS4837 CHINA UNICOM China169 Backbone',
  asname: 'CHINA169-Backbone',
  reverse: '',
  mobile: false,
  proxy: false,
  hosting: false,
}

export const locationFromIp = async (ip: string) => {
  const locationResponse = await fetch(`http://ip-api.com/json/${ip}?fields=17506815`)
  const locationInfo = await locationResponse.json();
  return locationInfo
}
