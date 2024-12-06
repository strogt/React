import { useEffect, useState } from "react";
import  { ChannelItem,fetchChnnelAPI } from "@/api/list";

export const useTabs = ()=>{
    const [channels, setChannels] = useState<ChannelItem[]>([]);
    useEffect(() => {
        const getChannelList = async () => {
        const res = await fetchChnnelAPI();
        setChannels(res.data.data.channels);
        };
        getChannelList();
    }, []);
    return { channels }
}