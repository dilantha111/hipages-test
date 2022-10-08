import React, { useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { AppBar, createTheme, Tab, Tabs } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const Invited = React.lazy(async () => await import('./pages/invited'));
const Accepted = React.lazy(async () => await import('./pages/accepted'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7b12',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
});

const App: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/accepted');
        break;
      default:
        navigate('/');
    }

    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <AppBar position="static" className="AppBar">
          <Tabs
            className="tabContainer"
            value={tabValue}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example">
            <Tab label="Invited" />
            <Tab label="Accepted" />
          </Tabs>
        </AppBar>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<>....</>}>
                <Invited />
              </React.Suspense>
            }
          />

          <Route
            path="/accepted"
            element={
              <React.Suspense fallback={<>....</>}>
                <Accepted />
              </React.Suspense>
            }
          />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
