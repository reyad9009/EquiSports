import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;