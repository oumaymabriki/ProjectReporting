import React from 'react';
import { Redirect, Route } from 'react-router-dom'

export const ProtectedRoute = ({ component: Component, isPublic, isAuthorized, withProps, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
          console.log("isAuthorized", isAuthorized);
        if (isPublic || isAuthorized) return <Component {...props} { ...withProps } />;
        return <Redirect to='/sign-in' />;
      }}
    />
  );
};
