import { ReactNode } from "react";
import "./styles.css";

type Props = {
  children: ReactNode;
};

function Container({ children }: Props) {
  return <div className="container">{children}</div>;
}

export default Container;
