import { List, Image, InfiniteScroll } from "antd-mobile";
import { useEffect, useState } from "react";
import { fetchListAPI, ListRes } from "@/api/list";

type Props = {
  channelId: string;
};

const HomeList = (props: Props) => {
  const { channelId } = props;
  const [list, setList] = useState<ListRes>({
    results: [],
    pre_timestamp: "" + new Date(),
  });

  useEffect(() => {
    const getList = () => {
      fetchListAPI({
        channel_id: channelId,
        timestamp: "" + "" + new Date(),
      }).then((res) => {
        console.log(res);
        setList(res.data.data);
      });
    };
    getList();
  }, [channelId]);

  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    console.log("到底了，开始加载");
    // 上拉加载逻辑
    setHasMore(false);
  };
  return (
    <>
      <List>
        {list.results.map((item) => (
          <List.Item
            key={item.art_id}
            prefix={
              <Image
                src={item.cover.images?.[0]}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={item.pubadate}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </>
  );
};

export default HomeList;
