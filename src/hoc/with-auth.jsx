import React from 'react'
import { Navigate } from 'react-router-dom';
import { URLS } from '../constant/urls';

const withAuth = (RenderComponent) => {
    const WrappedComponent = (props) => {
        const token = localStorage.getItem('token');
        console.log('token :>> ', token);
        if (token) {
            return <Navigate to={URLS.USERS} replace />;
        }
        
        return <RenderComponent {...props} />;
    };

    // Set displayName for debugging purposes
    WrappedComponent.displayName = `withAuth(${RenderComponent.displayName || RenderComponent.name || 'Component'})`;

    return WrappedComponent;
};

export default withAuth;