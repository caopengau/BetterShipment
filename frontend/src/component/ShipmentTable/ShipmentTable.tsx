import { Table } from "antd";
export const ShipmentTable = ({
  dataSource,
  columns,
}: {
  dataSource: any;
  columns: any;
}) => {
  const dataSourceWithKey = dataSource.map((item: any, index: number) => {
    return {
      ...item,
      key: item.id,
    };
  });
  return <Table title={() => 'Failed Delivery'} dataSource={dataSourceWithKey} columns={columns} />;
};
