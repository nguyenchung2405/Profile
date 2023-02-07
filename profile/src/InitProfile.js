import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SubMenu from './components/sidebar/SubMenu';
const InitProfile = () => {
    const userPermission = useSelector(state => state.permission);
    const dispatch = useDispatch()
    // console.log(userPermission)
    useEffect(() => {
        SubMenu(userPermission)
    }, [userPermission, userPermission.length])

    return (
        <div>

        </div>
    );
}

export default InitProfile;
