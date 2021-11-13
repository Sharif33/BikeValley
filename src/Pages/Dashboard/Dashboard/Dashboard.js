import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button, CircularProgress } from '@mui/material';
import useAuth from '../../../Hooks/useAuth/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../../LogIn/AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddBike from '../AddBike/AddBike';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import { Logout } from '@mui/icons-material';
import ManageOrder from '../AllOrders/ManageOrder';
import DashboardHome from './DashboardHome';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, logOut, admin, isLoading } = useAuth();
    if (isLoading) { return <CircularProgress /> }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            {
                user?.email && <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    '& > :not(style) + :not(style)': {
                        px: 2,
                        mb: 1,
                    },
                }}>
                    <Box sx={{ display: 'block' }}>
                        <img className="img-fluid px-3 w-50 rounded-circle mx-auto" src={user?.photoURL} alt="" />
                        <h5>{user?.displayName}</h5>
                    </Box>
                    <Button onClick={logOut} variant="outlined" color="error"><Logout fontSize="small" /> Logout</Button>
                </Box>
            }

            <Divider />

            <Box sx={{ px: 2 }} >
                <List>
                    <Link to={`${url}`}><Button color="inherit"><DashboardIcon /> Dashboard</Button></Link>
                </List>
            </Box>
            {!admin && <Box sx={{ px: 2 }} >
                <List>
                    <Link style={{ textDecoration: "none" }} to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>
                </List>
                <List>
                    <Link to={`${url}/reviews`}><Button color="inherit">Review</Button></Link>
                </List>
                <List>
                    <Link to={`${url}/pay`}><Button color="inherit">Payment</Button></Link>
                </List>
            </Box>}

            {/* {admin && isLoading && <CircularProgress />} */}

            {
                admin && <Box sx={{ px: 2 }}>
                    <List>
                        <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                    </List>
                    <List>
                        <Link to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
                    </List>
                    <List>
                        <Link to={`${url}/manageOrder`}><Button color="inherit">All Orders</Button></Link>
                    </List>
                    <List>
                        <Link to={`${url}/addBike`}><Button color="inherit">Add Bike</Button></Link>
                    </List>
                </Box>
            }

            <Box sx={{ px: 2 }} >
                <List>
                    <Link to="/"><Button color="inherit">Home</Button></Link>
                </List>
            </Box>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrder`}>
                        <ManageOrder></ManageOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addBike`}>
                        <AddBike></AddBike>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;