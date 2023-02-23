import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
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
  useEffect(()=>{
      if(<TOKEN></TOKEN> !== undefined){
          let decoded = jwt_decode(TOKEN);
          dispatch({
              type: GET_PERMISSION_OF_USER,
              user_id: decoded.id
          })
      }
  }, [dispatch])

  return (
        <Routes>
                <Route path="/hr/profile" element={<TableProfiles />} />
                <Route path="/hr/profile/:proID" element={<StepsAntd />} />
                <Route path="/hr/profile/create" element={<StepsAntd />} />
                <Route path="/hr/profile/create/:userID" element={<StepsAntd />} />
                <Route path="/myprofile/:User_ID" element={<StepsAntd />} />

                <Route path="/hr/department" element={<TableDep />} />
                <Route path="/hr/position" element={<TablePositions />} />
                <Route path="/hr/permission/manage" element={<PermissionTable /> } />
                <Route path="/hr/permission/position" element={<TablePositionsPermission /> } />
                <Route path="/hr/permission/department-position" element={<DepartmentPermissionTable /> } />
                <Route path="/hr/permission/users" element={<UserTablePermission /> } />
                <Route path="*" element={<PageNotFound />} />
        </Routes>
  )
}