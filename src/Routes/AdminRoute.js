import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/Authprovider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    
    const location = useLocation()
    if(loading || isAdminLoading){
        return <h2>..Loading</h2>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;