import React from 'react'
import { Box, createTheme, Icon, ImageList, ImageListItem, ThemeProvider, Typography } from '@mui/material'
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import Food1 from '../img/Food1.jpg';
import Jura from '../fonts/Jura.ttf';
import Leckerli from '../fonts/LeckerliOne-Regular.ttf';

const theme = createTheme({
    typography:{
        fontFamily: "Jura, sans-serif",
        fontFamily: "Leckerli One, cursive"
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'Jura';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Jura'), local('Jura'), url(${Jura}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
          styleOverrides: `
            @font-face {
              font-family: 'Leckerli One';
              font-style: cursive;
              font-display: swap;
              font-weight: 400;
              src: local('Leckerli'), local('LeckerliOne-Regular'), url(${Leckerli}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
    },
})

const BodyP1 = () => {
  return (
    <Box sx={{width: '100%', height: '45%'}}>
        <Box>
            <ImageList sx={{
                width: '85%', 
                //height: '85%', 
                //opacity:"100%",
                filter: "brightness(30%)",
                marginRight: "7.5%",
                marginLeft: "7.5%",
                marginTop: "15%"
                }} cols={1} 
                //</Box>rowHeight={385}
                >
                <ImageListItem>
                    <img src={Food1} alt={"Brochetas"} loading="eager"/>
                </ImageListItem>
            </ImageList>
        </Box>
        <Box>
            <Icon sx={{
                position: "absolute",
                marginTop: "10%",
                marginLeft: "50%",
                marginRight: "55%",
                bottom: "25%",
                transform: "scale(4.75)",
                color: "white",}}>
                <SoupKitchenOutlinedIcon />
            </Icon>
              <Box>
                  <ThemeProvider theme={theme}>
                      <Typography sx={{
                            position: "absolute",
                            marginTop: "15%",
                            marginLeft: "31.5%",
                            marginRight: "55%",
                            bottom: "-10%",
                            color: "white",
                            fontWeight: 400,
                            fontFamily: "Jura",
                            fontStyle: "normal",
                            fontSize: "96px",
                        }}>
                            Tastybud
                      </Typography>
                  </ThemeProvider>
              </Box>
            <Box>
                  <ThemeProvider theme={theme}>
                      <Typography sx={{
                          position: "absolute",
                          marginTop: "15%",
                          marginLeft: "11%",
                          marginRight: "5%",
                          bottom: "-40%",
                          color: "white",
                          fontWeight: 400,
                          fontFamily: "Leckerli One",
                          fontStyle: "normal",
                          fontSize: "96px",
                      }}>
                          A delish experience
                      </Typography>
                  </ThemeProvider>
            </Box>
        </Box>
    </Box>
  )
}

export default BodyP1