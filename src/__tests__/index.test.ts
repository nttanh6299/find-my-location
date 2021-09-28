import getLocation from '../index'

test('Should return a valid location', async () => {
  const mockValidIp = "112.69.120.199"
  const mockValidLocation = {
    ip: mockValidIp,
    country_code: "JP",
    country_name: "Japan",
    region_code: "27",
    region_name: "Ōsaka",
    city: "Osaka",
    zip_code: "543-0062",
    time_zone: "Asia/Tokyo",
    latitude: 34.6851,
    longitude: 135.5136,
    metro_code: 0
  }

  const data = await getLocation(mockValidIp)
  expect(data).toEqual(mockValidLocation)
})

test('Should return an unknown location', async () => {
  const mockUnknownIp = "127.0.0.1"
  const mockUnknownLocation = {
    ip: mockUnknownIp,
    country_code: "",
    country_name: "",
    region_code: "",
    region_name: "",
    city: "",
    zip_code: "",
    time_zone: "",
    latitude: 0,
    longitude: 0,
    metro_code: 0
  }

  const data = await getLocation(mockUnknownIp)
  expect(data).toEqual(mockUnknownLocation)
})

test('Should throw an error if the provided ip is invalid', async () => {
  try {
    const mockInvalidIp = "1.a.2.2"
    await getLocation(mockInvalidIp)
  } catch (error) {
    expect(error).toEqual(new Error('The provided ip is invalid!'))
  }
})
