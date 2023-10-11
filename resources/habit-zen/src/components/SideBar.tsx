import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Inbox from '@mui/icons-material/Inbox';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SettingsIcon from '@mui/icons-material/Settings';
import {styled, useTheme} from '@mui/material/styles';
import {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import logoImage from '../assets/logo.png';


const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
    open?: boolean;
}>(({theme, open}) => ({
    flexGrow: 1, padding: theme.spacing(3), transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen,
    }), marginLeft: `-${drawerWidth}px`, ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut, duration: theme.transitions.duration.enteringScreen,
        }), marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen,
    }), ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut, duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1), ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export function SideBar() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState("All habits");

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleListItemClick = (itemName: string) => {
        setSelectedItem(itemName);
    };

    return (<Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <StyledAppBar position="fixed" open={open} color="default">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{mr: 2, ...(open && {display: 'none'})}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {selectedItem}
                    </Typography>
                </Toolbar>
            </StyledAppBar>
            <Drawer
                sx={{
                    width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {
                        width: drawerWidth, boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Box sx={{height: 80, margin: '0 auto 0 auto', padding: '0.5rem'}}>
                        <img src={logoImage} style={{ maxWidth: '100%', maxHeight: '100%' }}  />
                    </Box>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    <ListItem key={"All habits"} disablePadding>
                        <ListItemButton selected={selectedItem === "All habits"}
                                        onClick={() => handleListItemClick("All habits")}>
                            <ListItemIcon>
                                {selectedItem === "All habits" ? <Inbox sx={{color: "white"}}/> : <Inbox/>}
                            </ListItemIcon>
                            <ListItemText primary={"All habits"}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Today"} disablePadding>
                        <ListItemButton selected={selectedItem === "Today"}
                                        onClick={() => handleListItemClick("Today")}>
                            <ListItemIcon>
                                {selectedItem === "Today" ? <WbSunnyIcon sx={{color: "white"}}/> : <WbSunnyIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={"Today"}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"This week"} disablePadding>
                        <ListItemButton selected={selectedItem === "This week"}
                                        onClick={() => handleListItemClick("This week")}>
                            <ListItemIcon>
                                {selectedItem === "This week" ? <DateRangeIcon sx={{color: "white"}}/> : <DateRangeIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={"This week"}/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem key={"Settings"} disablePadding>
                        <ListItemButton selected={selectedItem === "Settings"}
                                        onClick={() => handleListItemClick("Settings")}>
                            <ListItemIcon>
                                {selectedItem === "Settings" ? <SettingsIcon sx={{color: "white"}}/> : <SettingsIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={"Settings"}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>);
}
