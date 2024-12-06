import "./style.css";
import { Tabs } from "antd-mobile";
import { useTabs } from "./usrTabs";
import HomeList from "./HomeList/HomeList";

const Home = () => {
  const { channels } = useTabs();
  return (
    <div>
      <div className="tabContainer">
        <Tabs>
          {channels.map((item) => (
            <Tabs.Tab title={item.name} key={item.id}>
              <div className="listContainer">
                <HomeList channelId={item.id.toString()} />
              </div>
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
