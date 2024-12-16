import VipModels from '@home/VipModels.tsx'
import TopModels from "@home/TopModels.tsx";
import MainBanner from '@home/MainBanner.tsx'
import MainSearch from '@home/MainSearch.tsx'


const HomePage = () => {
    return (
        <>
            <MainBanner/>
            <MainSearch/>
            <VipModels/>
            <TopModels/>
        </>
    )
}

export default HomePage