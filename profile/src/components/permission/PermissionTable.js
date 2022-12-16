import { Popconfirm, Table } from 'antd';
import React, { useState } from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai';
import { FiMinusCircle } from 'react-icons/fi';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import PermissionPosition from './PermissionPosition';

export default function PermissionTable() {

    const {Column} = Table;
    const [page, setPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(10);
    const data = [{
        "name": "Xem danh sách loại chức vụ",
        "table_management_id": 29,
        "uri": "/position-types/",
        "method": "get",
        "param": null,
        "body": null,
        "option": null,
        "is_display": false,
        "id": 101,
        "created_at": "2022-12-15T00:15:32",
        "updated_at": "2022-12-15T00:15:32"
      },
      {
        "name": "Xem chi tiết loại chức vụ",
        "table_management_id": 29,
        "uri": "/position-types/{id}",
        "method": "get",
        "param": null,
        "body": null,
        "option": null,
        "is_display": false,
        "id": 100,
        "created_at": "2022-12-15T00:15:32",
        "updated_at": "2022-12-15T00:15:32"
      },
      {
        "name": "Xoá loại chức vụ",
        "table_management_id": 29,
        "uri": "/position-types/{id}",
        "method": "delete",
        "param": null,
        "body": null,
        "option": null,
        "is_display": false,
        "id": 99,
        "created_at": "2022-12-15T00:15:32",
        "updated_at": "2022-12-15T00:15:32"
      },
      {
        "name": "Sửa loại chức vụ",
        "table_management_id": 29,
        "uri": "/position-types/{id}",
        "method": "put",
        "param": null,
        "body": null,
        "option": null,
        "is_display": false,
        "id": 98,
        "created_at": "2022-12-15T00:15:32",
        "updated_at": "2022-12-15T00:15:32"
      },
      {
        "name": "Tạo loại chức vụ",
        "table_management_id": 29,
        "uri": "/position-types/",
        "method": "post",
        "param": null,
        "body": null,
        "option": null,
        "is_display": false,
        "id": 97,
        "created_at": "2022-12-15T00:15:32",
        "updated_at": "2022-12-15T00:15:32"
      },
      {
        "name": "Xem danh sách tài nguyên của user",
        "table_management_id": 28,
        "uri": "/user-resources/",
        "method": "get",
        "param": null,
        "body": null,
        "option": null,
        "is_display": false,
        "id": 96,
        "created_at": "2022-12-15T00:15:32",
        "updated_at": "2022-12-15T00:15:32"
      },];
    
  return (
    <div className="tableProfiles table__position">
        {/*showLoading()*/}
        <Table
          dataSource={data}
          pagination={{
            position: ["bottomLeft"],
            defaultPageSize: 10,
            locale: { items_per_page: "" },
            defaultCurrent: 1,
            showSizeChanger: true,
            total: data.length,
            pageSizeOptions: [10, 50, 100],
            onChange: (page, pageNumber) => {
              setPageNumber(pageNumber);
              setPage(page);
            },
            showTotal: (total) => {
              if (pageNumber * page < total) {
                return `Hiển thị ${pageNumber * page} trong ${total}`;
              }
              return `Hiển thị ${total} trong ${total}`;
            },
          }}
        >
          <Column
            title="Tên quyền"
            key="postionName"
            className="table__pos__name"
            render={(text, record) => {
              return record.name
            }}
          />
          <Column
            title="Loại phương thức"
            key="postionType"
            className="table__pos__type"
            render={(text, record) => {
              return record.method.toUpperCase()
            }}
          />
          <Column
            title=""
            key="thaoTac"
            render={(text, record) => {
              return <div className="thaoTac__Edit">
                <button className="thaoTac__Edit__btn" onClick={() => {
                  // setDataToModal(record)
                  // setIsShowModal(true)
                  // setTitlePosManageModal("Chỉnh sửa chức vụ")
                }}>
                    <MdOutlineModeEditOutline />
                </button>
                <Popconfirm
                  title="Bạn có chắc muốn thực hiện thao tác này ?"
                  okText="Có"
                  cancelText="Không"
                  icon={<AiFillQuestionCircle />}
                  placement="topRight"
                  onConfirm={() => {
                  //   let { id, pos_id } = record;
                  //   dispatch({
                  //     type: DELETE_POSITION_AND_MANAGEMENT,
                  //     data: { pos_mana_id: id, pos_id }
                  //   })
                  }}
                >
                  <button className="thaoTac__Edit__btn thaoTac__Delete__btn">
                    <FiMinusCircle />
                  </button>
                </Popconfirm>
              </div>
            }}
          />
        </Table>
      </div>
  )
}
