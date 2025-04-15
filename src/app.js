import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js'
import Body from './components/Body.js'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Error from './components/Error.js'
import ResturantMenu from './components/ResturantMenu.js'
import UserContext from './utils/UserContext.js'

const AppLayout = () => {

    const [ userInfo, setUserInfo ] = useState();

    //authentication
    useEffect(() => {
        const data = {
            name: "Utsav Kumar"
        }
        setUserInfo(data.name);
    }, [])

    return (
        <UserContext.Provider value={{ loggedInUser: userInfo }}>
            <div className='app'>
                <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
                    <Header />
                </UserContext.Provider>
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/resturnant/:resId",
                element: <ResturantMenu />,
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter} />);