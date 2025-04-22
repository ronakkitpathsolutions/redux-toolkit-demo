import React from 'react'
import { Navigate } from 'react-router-dom';
import { URLS } from '../constant/urls';

const withUser = (RenderComponent) => {
    
    const WrappedComponent = ({ ...props }) => {
        const token = localStorage.getItem('token');
        return token ? (
            <RenderComponent {...props} />
        ) : (
            <Navigate to={URLS.LOGIN} replace />
        );
    };

    // Set displayName for debugging purposes
    WrappedComponent.displayName = `withUser(${RenderComponent.displayName || RenderComponent.name || 'Component'})`;

    return WrappedComponent;

};
    
export default withUser;