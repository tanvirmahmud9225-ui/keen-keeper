import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../components/mainLayout/MainLayout';
import Homepage from '../pages/homepage/Homepage';
import Stats from '../pages/stats/Stats';
import TimeLine from '../pages/timeline/TimeLine';
import FriendDetail from '../components/friendsDetails/FriendDetail';
import NotFound from '../pages/notFound/NotFound';

export const router = createBrowserRouter([
    {
        path: "/", Component: MainLayout,
        children: [
            { index: true, Component: Homepage },
            { path: '/timeline', Component: TimeLine },
            {
                path: "/friendsDetails/:id",
                Component: FriendDetail
            },
            {
                path: "/stats",
                Component: Stats
            },
            {
                path: '*',
                Component: NotFound
            }
        ]
    },
    {
        path: '*',
        Component: NotFound
    }
])