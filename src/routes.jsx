import {createBrowserRouter , Outlet} from 'react-router'
import Home from './pages/Home/Page'
import Users from './pages/Users/Page'
import Products from './pages/Products/Page'
import Tickets from './pages/Tickets/Page'
import TicketDetails from './pages/Ticket-details/Page'
import Comments from  './pages/Comments/Page'

const router = createBrowserRouter([
    {
        path: "/",
        element:(
            <div>
                Application Layout
                <Outlet />
            </div>
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
