import TopModels from '../modules/main/TopModels.tsx'
import MainBanner from '../modules/main/MainBanner.tsx'
import MainSearch from '../modules/main/MainSearch.tsx'


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