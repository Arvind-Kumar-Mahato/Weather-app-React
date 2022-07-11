import axios from "axios";

async function getCoordinatesOfAddress(address) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key:"f8a481e3023649e49b03a49ef761c686",
        q: address
      }
    }
  );

  return response;
}

export default getCoordinatesOfAddress;
