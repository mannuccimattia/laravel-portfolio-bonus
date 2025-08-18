import GlobalContext from './contexts/globalContext';
import MasterLayout from './layouts/MasterLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProjectsPage from './pages/ProjectsPage';
import { useState } from 'react';
import ProjectDetailPage from './pages/ProjectDetailPage';

const App = () => {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<MasterLayout />}>
              <Route index element={<Homepage />} />
              <Route path='/projects' element={<ProjectsPage />} />
              <Route path='/projects/:id' element={<ProjectDetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
