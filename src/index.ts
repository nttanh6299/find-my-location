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
async function get(ip: string): Promise<ILocation | null> {
  if (typeof ip !== 'string' || !isIP.v4(ip)) {
    throw new Error('The provided ip is invalid!')
  }

  const url = `${apiDomain}/${ip}`
  try {
    const location = await fetch(url).then(res => res.json() as Promise<ILocation>)

    if (!location) return null

    const { ip, country_code, country_name, region_code, region_name, city, zip_code, time_zone, latitude, longitude, metro_code } = location

    return {
      ip,
      country_code,
      country_name,
      region_code,
      region_name,
      city,
      zip_code,
      time_zone,
      latitude,
      longitude,
      metro_code,
    }
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

export default get
