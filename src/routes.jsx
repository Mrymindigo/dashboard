import {createBrowserRouter , Outlet} from 'react-router'
import Home from './pages/Home/Page'
import Users from './pages/Users/Page'
import Products from './pages/Products/Page'
import Tickets from './pages/Tickets/Page'
import TicketDetails from './pages/Ticket-details/Page'
import Comments from  './pages/Comments/Page'
import DashboardLayout from './components/layout/DashboardLayout'

const router = createBrowserRouter([
    {
        path: "/",
        element:(
            <DashboardLayout />
        ),
        children:[
            {
                index:true,
                element: <Home />
            }
            ,
            {
                path:'users',
                element: <Users />
            },
            {
                path:'products',
                element: <Products />
            },
            {
                path:'tickets',
                element:<Tickets />
            },
            {
                path:'ticketDetails',
                element: <TicketDetails />
            },
            {
                path:'comments',
                element: <Comments />
            }
        ]
    }
])

export default router
