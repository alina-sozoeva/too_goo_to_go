import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import styles from "./styles.module.scss";
import clsx from "clsx";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.line}></div>
      <div className={clsx(styles.layout)}>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
