import React, { useEffect } from 'react'
import { Switch, Route } from "react-router-dom"
import StepsAntd from './components/steps/Steps';
import PageNotFound from './components/PageNotFound';
import TableProfiles from './components/profile/tableProfiles';
import TableDep from './components/department/TableDep';
import TablePositions from './components/positions/TablePositions';
import TablePositionsPermission from './components/permission/positions/positionTablePermission';
import PermissionTable from './components/permission/PermissionTable';
import DepartmentPermissionTable from './components/permission/department/DepartmentPermissionTable';
import { useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import { GET_PERMISSION_OF_USER, TOKEN } from './title/title';
import UserTablePermission from './components/permission/user/UserTable';

export default function RouteClient() {

    const dispatch = useDispatch();
    // console.log(userPermission)
    useEffect(() => {
        // if (<TOKEN></TOKEN> !== undefined) {
            if (TOKEN !== undefined) {
            let decoded = jwt_decode(TOKEN);
            dispatch({
                type: GET_PERMISSION_OF_USER,
                user_id: decoded.id
            })
        }
    }, [dispatch])

    return (
        <Switch>
            <Route  key="422" path="/hr/profile" exact component={TableProfiles} ></Route>
            <Route path="/hr/profile/create" exact component={StepsAntd} />
            <Route path="/hr/profile/:proID" exact component={StepsAntd} />
            <Route path="/hr/profile/create/:userID" exact component={StepsAntd} />
            <Route path="/myprofile/:User_ID" exact component={StepsAntd} />

            <Route path="/hr/department" exact component={TableDep} />
            <Route path="/hr/position" exact component={TablePositions} />
            <Route path="/hr/permission/manage" exact component={PermissionTable} />
            <Route path="/hr/permission/position" exact component={TablePositionsPermission} />
            <Route path="/hr/permission/department-position" exact component={DepartmentPermissionTable} />
            <Route path="/hr/permission/users" exact component={UserTablePermission} />
            <Route path="*" exact component={PageNotFound} />
        </Switch>
    )
}