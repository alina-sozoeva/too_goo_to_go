import { Checkbox, Table } from "antd";
import { IProducts } from "../../types";
import styles from "./NewLeftovers.module.scss";
import clsx from "clsx";

export const NewLeftovers = () => {
  const data: IProducts[] = [
    { id: "1", name: "Лу Фэн", count: 10 },
    { id: "2", name: "Сун", count: 20 },
    { id: "3", name: "Фань Сяо", count: 2 },
  ];

  const onChange = (checked: boolean, id: string) => {
    console.log(`checked = ${checked}, ${id}`);
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
      dataIndex: "name",
      key: "name",
      render: (text: string) => <p>{text}</p>,
      width: 200,
    },
    {
      title: "Остаток",
      dataIndex: "count",
      key: "count",
      render: (text: number) => (
        <div className={clsx(styles.count)}>
          <div className={clsx(styles.count_wrap)}>
            <button className={clsx(styles.count_btn)}>+</button>
            <input className={clsx(styles.count_input)} value={text} />
            <button className={clsx(styles.count_btn)}>-</button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section>
      <Table dataSource={data} columns={columns} pagination={false} />
    </section>
  );
};
