import React from 'react';
import Topbar from './views/global/Topbar';
import SidebarMenu from './views/global/SidebarMenu';
import Dashboard from './views/dashboard/Dashboard';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes,Route } from 'react-router-dom';
import Team from "./views/team/Team";
import Contacts from "./views/contacts/Contacts";
import Invoices from "./views/invoices/Invoices";
import Form from "./views/form/Form";


//themeProvider passing the themes to MUI components

const App:React.FC = () =>{

  const {theme,colorMode} = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarMenu />
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/form" element={<Form/>}/>
              {/* <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/faq" element={<Faq/>}/>
              <Route path="/geography" element={<Geography/>}/>
              <Route path="/calendar" element={<Calendar/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>    
    </ColorModeContext.Provider>
  );
}

export default App;
