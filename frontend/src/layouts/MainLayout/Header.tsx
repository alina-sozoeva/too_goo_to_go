import { Flex } from "antd";
import clsx from "clsx";
import styles from "./styles.module.scss";
import bell from "../../assets/svg/bell.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={clsx(styles.header, "container")}>
      <Flex align="center" gap={32}>
        <div onClick={() => navigate("/")}>logo</div>
        <input
          className={clsx(styles.search_input)}
          type="text"
          placeholder="Поиск"
        />
      </Flex>

      <Flex gap={12}>
        <img src={bell} alt="" />
        <button className={clsx(styles.profile_img)}>img</button>
      </Flex>
    </header>
  );
};
