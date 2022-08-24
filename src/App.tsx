import React from 'react';
import {CurrentlyTime} from "./Componets/CurrentlyTime";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ToggleColorMode from "./Componets/DarkMode";
function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );
    return <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
        </ThemeProvider>
        <CurrentlyTime />
        <ToggleColorMode />
    </>

}

export default App;
