import { Flex } from "antd";

import clsx from "clsx";
import styles from "./styles.module.scss";
import plus from "../../assets/svg/plus.svg";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <nav className={clsx(styles.sidebar)}>
      <Flex gap={24}>
        <Flex
          gap={16}
          className={clsx(styles.nav_item)}
          align="center"
          onClick={() => navigate("/new-leftovers")}
        >
          <img src={plus} alt="" />
          <p>Добавить остаток</p>
        </Flex>
      </Flex>
    </nav>
  );
};
