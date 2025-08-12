import GlobalContext from './contexts/globalContext';
import MasterLayout from './layouts/MasterLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    <>
      {/* <GlobalContext.Provider > */}
      <BrowserRouter>
        <Routes>
          <Route element={<MasterLayout />}>
            <Route index element={<Homepage />} />
            <Route path='/projects' element={<ProjectsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </GlobalContext.Provider> */}
    </>
  )
}

export default App
