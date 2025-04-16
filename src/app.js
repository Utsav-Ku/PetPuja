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
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'
import Cart from './components/Cart'

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
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
                <div className='app'>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/cart",
                element:<Cart />,
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter} />);