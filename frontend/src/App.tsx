import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import ShipmentTable from "./component/ShipmentTable";
import { ShipmentDto } from "./dto/ShipmentDto";
import { ShipmentStatus } from "./enums/ShipmentStatus";

const App = () => {
  const [data, setData] = useState<ShipmentDto[]>([]);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "start",
      dataIndex: "start",
    },
    {
      title: "carrier",
      dataIndex: "carrier",
    },
    {
      title: "status",
      dataIndex: "status",
    },
    {
      title: "customer",
      dataIndex: ["customer", "name"],
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8888/shipments");
      const shipments: ShipmentDto[] = result.data;
      const failedShipments = shipments.filter(shipments => shipments.status === ShipmentStatus.failed_delivery);
      setData(failedShipments);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <ShipmentTable dataSource={data} columns={columns}/>
    </div>
  );
};

export default App;
