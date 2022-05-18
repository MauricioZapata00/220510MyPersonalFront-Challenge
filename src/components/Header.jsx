import React, { useState } from 'react'
import { AppBar, Badge, Box, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import DinnerDiningTwoToneIcon from '@mui/icons-material/DinnerDiningTwoTone';
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';
import SetMealTwoToneIcon from '@mui/icons-material/SetMealTwoTone';
import EggAltTwoToneIcon from '@mui/icons-material/EggAltTwoTone';
import EmojiFoodBeverageTwoToneIcon from '@mui/icons-material/EmojiFoodBeverageTwoTone';
import IcecreamTwoToneIcon from '@mui/icons-material/IcecreamTwoTone';

const Header = () => {

    const [presionMenu,setPresionMenu] = useState(false)
    const [presionAbout, setPresionAbout] = useState(false)
    const [presionBlogs, setPresionBlogs] = useState(false)

    const handleClickMenu = (e) => {
        setPresionMenu(e.currentTarget)
    }

    const  handleCloseMenu = () => {
        setPresionMenu(false)
    }

    const handleClickAbout = (e) => {
        setPresionAbout(e.currentTarget)
    }

    const handleCloseAbout = () => {
        setPresionAbout(false)
    }

    const handleClickBlogs = (e) => {
        setPresionBlogs(e.currentTarget)
    }

    const handleCloseBlogs = () => {
        setPresionBlogs(false)
    }

    const abrirMenu = Boolean(presionMenu)
    const abrirAbout = Boolean(presionAbout)
    const abrirBlogs = Boolean(presionBlogs)
    
    return (
        <Box>
            <AppBar elevation={5}>
                <Toolbar sx={{
                    width: "100%",
                    height: "5%",
                    backgroundColor: "#412505",
                    color: "#FFFFFF",
                    fontFamily: "MS Gothic",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: 'space-between',
                    fontWeight: "bold",
                    fontSize: "20px",
                    fontStyle: "normal",
                    paddingBottom: "5%"
                }}>
                    <Box sx={{
                        backgroundColor: "#F7D89D",
                        color: "#000000",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                        width: "7.5%",
                        paddingTop: "4%",
                        height: "10%",
                        fontWeight: "bold",
                        fontSize: "20px",
                        paddingBottom: "3.25%",
                        cursor: "pointer"
                    }} onClick={() => { }}>
                        HOME
                    </Box>
                    <Box>
                        <Typography sx={{
                            cursor: 'pointer',
                            fontFamily: "MS Gothic",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontSize: "20px",
                        }} aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={presionMenu ? "true" : "false"}
                            onClick={(e) => handleClickMenu(e)}>
                            MENU
                        </Typography>
                        <Menu anchorEl={presionMenu} open={abrirMenu} onClose={() => handleCloseMenu()}>
                            <MenuItem onClick={() => { }}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DinnerDiningTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={"Ensaladas"} />
                                    </ListItem>
                                    <Divider />
                                </List>
                            </MenuItem>
                            <MenuItem onClick={() => { }}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <FastfoodTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={"Típicos"} />
                                    </ListItem>
                                </List>
                            </MenuItem>
                            <MenuItem onClick={() => { }}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <SetMealTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={"Carnes"} />
                                    </ListItem>
                                </List>
                            </MenuItem>
                            <MenuItem onClick={() => { }}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <EggAltTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={"Otros"} />
                                    </ListItem>
                                    <Divider />
                                </List>
                            </MenuItem>
                            <MenuItem onClick={() => { }}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <EmojiFoodBeverageTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={"Bebidas"} />
                                    </ListItem>
                                    <Divider />
                                </List>
                            </MenuItem>
                            <MenuItem onClick={() => { }}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <IcecreamTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={"Postres"} />
                                    </ListItem>
                                </List>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Typography sx={{
                            cursor: 'pointer',
                            fontFamily: "MS Gothic",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontSize: "20px",
                        }} aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={presionAbout ? "true" : "false"}
                            onClick={(e) => handleClickAbout(e)}>
                            ABOUT
                        </Typography>
                        <Menu anchorEl={presionAbout} open={abrirAbout} onClose={() => handleCloseAbout()}>
                            <MenuItem onClick={() => { }}>FAQ's</MenuItem>
                            <MenuItem onClick={() => { }}>Visión</MenuItem>
                            <MenuItem onClick={() => { }}>Contáctenos</MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Typography sx={{
                            cursor: 'pointer',
                            fontFamily: "MS Gothic",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontSize: "20px",
                        }} aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={presionBlogs ? "true" : "false"}
                            onClick={(e) => handleClickBlogs(e)}>
                            BLOG
                        </Typography>
                        <Menu anchorEl={presionBlogs} open={abrirBlogs} onClose={() => handleCloseBlogs()}>
                            <MenuItem onClick={() => { }}>Nuestros Chef's</MenuItem>
                            <MenuItem onClick={() => { }}>Cultura</MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        CALL US FOR RESERVATIONS: 000-22-178
                    </Box>
                    <Box>
                        <IconButton sx={{ color: "white" }}>
                            <Badge>
                                <InstagramIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box sx={{ marginRight: "5%" }}>
                        <IconButton sx={{ color: "white" }}>
                            <Badge badgeContent={3}>
                                <TwitterIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header