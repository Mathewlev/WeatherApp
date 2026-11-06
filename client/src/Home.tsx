import { Header } from "../library/header/header";
import { Icon } from "../library/icon/icon";
import SunSmile from "../library/svgs/sun_smile.svg?react";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <div className="container" style={{}}>
        <div className="header">
          <Header text={"Weather Today"} level={1}></Header>
          <Icon icon={SunSmile} size="xl" />
        </div>
      </div>
    </main>
  );
}
