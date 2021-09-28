import fetch from 'node-fetch'
import isIP from 'is-ip'

const apiDomain = 'https://freegeoip.app/json'

export interface ILocation {
  ip: string
  country_code: string
  country_name: string
  region_code: string
  region_name: string
  city: string
  zip_code: string
  time_zone: string
  latitude: number
  longitude: number
  metro_code: number
}

/**
 * Get user's location from their IP
 * @param {string} ipv4
 * @returns {ILocation} user's location
 */
async function getLocation(ip: string): Promise<ILocation> {
  if (typeof ip !== 'string' || !isIP.v4(ip)) {
    throw new Error('The provided ip is invalid!')
  }

  const url = `${apiDomain}/${ip}`
  const location = await fetch(url).then(res => res.json() as Promise<ILocation>)

  return location
}

export default getLocation
