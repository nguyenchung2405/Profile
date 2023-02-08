import React from 'react';
import { useSelector } from 'react-redux';
import SubMenu from './components/sidebar/SubMenu';
const InitProfile = () => {
    const userPermission = useSelector(state => state.permission);
    // console.log(userPermission)
    if (userPermission.length !== 0) {
        SubMenu(userPermission)
    }

    return (
        <div>

        </div>
    );
}

export default InitProfile;
