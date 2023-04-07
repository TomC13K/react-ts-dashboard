import React from 'react';
import Topbar from './views/global/Topbar';
import Sidebar from './views/global/Sidebar';
import Dashboard from './views/dashboard/Dashboard';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes,Route } from 'react-router-dom';


//themeprociver passing the themes to MUI components

const App:React.FC = () =>{

  const {theme,colorMode} = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>    
    </ColorModeContext.Provider>
  );
}

export default App;
