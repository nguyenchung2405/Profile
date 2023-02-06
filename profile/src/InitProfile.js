import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SubMenu from './components/sidebar/SubMenu';

const InitProfile = () => {
    const userPermission = useSelector(state => state.permission);
    console.log(userPermission)
    useEffect(() => {
        SubMenu(userPermission)
    }, [userPermission, userPermission.length])

    return (
        <div>

        </div>
    );
}

export default InitProfile;
