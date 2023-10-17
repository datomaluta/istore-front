import { useTranslation } from "react-i18next";

const Layout = (props: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div
      className={`max-w-[75rem] mx-auto bg-white dark:bg-neutral-900  min-h-screen transition-all `}
    >
      {props.children}
    </div>
  );
};

export default Layout;
