import { Checkbox, Table } from "antd";
import styles from "./NewLeftovers.module.scss";
import clsx from "clsx";
import { useGetProductsQuery } from "../../store";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { IProduct } from "../../types";

export const NewLeftovers = () => {
  const { data, isLoading, isFetching } = useGetProductsQuery();
  const [filteredData, setFilteredData] = useState<IProduct[] | undefined>([]);

  useEffect(() => {
    setFilteredData(data?.result);
  }, [data]);

  const onChange = (checked: boolean, id: string) => {
    console.log(`checked = ${checked}, ${id}`);
  };

  const plusCount = (id: string) => {
    setFilteredData((prev) => {
      return prev?.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  };

  const minusCount = (id: string) => {
    setFilteredData((prev) => {
      return prev?.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity <= 0 ? 0 : item.quantity - 1 }
          : item,
      );
    });
  };

  const columns = [
    {
      title: <Checkbox />,
      dataIndex: "id",
      key: "id",
      render: (text: string) => (
        <Checkbox onChange={(e) => onChange(e.target.checked, text)} />
      ),
      width: 30,
    },
    {
      title: "Наименование",
      dataIndex: "title",
      key: "title",
      render: (text: string) => <p>{text}</p>,
      width: 200,
    },
    {
      title: "Описание",
      dataIndex: "description",
      key: "description",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Дата",
      dataIndex: "create_at",
      key: "create_at",
      width: 200,
      render: (text: Date) => <p>{dayjs(text).format("DD.MM.YYYY HH:mm")}</p>,
    },
    {
      title: "Количество",
      dataIndex: "quantity",
      key: "quantity",
      width: 100,
      render: (_: unknown, record: IProduct) => {
        return (
          <div className={clsx(styles.count)}>
            <div className={clsx(styles.count_wrap)}>
              <button
                className={clsx(styles.count_btn)}
                onClick={() => minusCount(record.id)}
              >
                -
              </button>
              <input
                className={clsx(styles.count_input)}
                value={record.quantity}
              />
              <button
                className={clsx(styles.count_btn)}
                onClick={() => plusCount(record.id)}
              >
                +
              </button>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <section className={clsx(styles.wrap)}>
      <div className={clsx(styles.table_wrap)}>
        <Table
          loading={isLoading || isFetching}
          dataSource={filteredData}
          columns={columns}
          pagination={false}
        />
      </div>
    </section>
  );
};
