import MainLayout from './layout/main/index.jsx'
import TopModels from './modules/main/TopModels.tsx'
import MainBanner from './modules/main/MainBanner.tsx'
import MainSearch from './modules/main/MainSearch.tsx'

function App() {
  return (
      <MainLayout>
        <MainBanner/>
        <MainSearch/>
        <TopModels/>
      </MainLayout>
  )
}

export default App