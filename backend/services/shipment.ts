import { ShipmentDto } from "../dto/ShipmentDto";

const axios = require("axios");

export const getShipments = async ():Promise<ShipmentDto[]> => {
  try {
    const response = await axios.get(
      "https://abc-fashion-bzwn2mw5ya-km.a.run.app/shipments",
      {
        auth: {
          username: "pipelabs",
          password: "h04Kp5NNm4qN",
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
