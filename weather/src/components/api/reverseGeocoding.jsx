import axios from "axios";

async function getAddressOfCoordinates(lat, lng) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key: "f8a481e3023649e49b03a49ef761c686",
        q: `${lat}+${lng}`,
      }
    }
  );

  return response;
}

export default getAddressOfCoordinates;
