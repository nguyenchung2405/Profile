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
import { GET_PERMISSION_OF_USER, TOKEN } from './title/title';
import jwt_decode from "jwt-decode";
import UserTablePermission from './components/permission/user/UserTable';

export default function RouteServer() {
  const dispatch = useDispatch();
  useEffect(() => {
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
      <Route path="/hr/profile" component={TableProfiles} />
      <Route path="/profile-service/hr/profile" component={TableProfiles} />
      <Route path="/hr/profile/:proID" component={StepsAntd} />
      <Route path="/hr/profile/create" component={StepsAntd} />
      <Route path="/hr/profile/create/:userID" component={StepsAntd} />
      <Route path="/myprofile/:User_ID" component={StepsAntd} />

      <Route path="/hr/department" component={TableDep} />
      <Route path="/hr/position" component={TablePositions} />
      <Route path="/hr/permission/manage" component={PermissionTable} />
      <Route path="/hr/permission/position" component={TablePositionsPermission} />
      <Route path="/hr/permission/department-position" component={DepartmentPermissionTable} />
      <Route path="/hr/permission/users" component={UserTablePermission} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
}
