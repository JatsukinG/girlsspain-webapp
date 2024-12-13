import TopModels from '../modules/home/TopModels.tsx'
import MainBanner from '../modules/home/MainBanner.tsx'
import MainSearch from '../modules/home/MainSearch.tsx'


const HomePage = () => {
  return (
      <>
        <MainBanner/>
        <MainSearch/>
        <TopModels/>
      </>
  )
}

export default HomePage