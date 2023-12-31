import React, { useEffect, useState } from 'react'
import { Transfer, Modal, Select } from 'antd';
import "../permission.css"
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_PERMISSION_DEP_POS, DELETE_PERMISSION_POS, GET_PERMISSION_DEP_POS, GET_PERMISSION_DEP_POS_LIST, GET_PERMISSION_POSITION, POST_PERMISSION_DEP_POS, POST_PERMISSION_POS } from '../../../title/title';
import { setPermissionHave, setPermissionNot } from '../../../redux/Slice/permissionSlice';
import DualListBox from 'react-dual-listbox';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function ModalPerDepPos(props) {

    const {isShowModal, setIsShowModal, pos_dep_mana_id, depList, posList, isUpdate, permissionList} = props;
    const dispatch = useDispatch();
    const {Option} = Select;
    const [depPos, setDepPos] = useState({dep_id: "", pos_id: ""});
    const [targetKeys, setTargetKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [data, setData] = useState([]);
    const [rootPermissionArr, setRootPermissionArr] = useState([]);
    const {permissionHave, permissionNot} = useSelector(state => state.permissionReducer);
    // console.log(permissionHave, permissionNot)
    // console.log(data, targetKeys)
    useEffect(()=>{
      return ()=>{
        dispatch(setPermissionHave([]))
        dispatch(setPermissionNot([]))
      }
    }, [])

    useEffect(()=>{
        if(isUpdate && isShowModal){
            dispatch({
              type: GET_PERMISSION_DEP_POS,
              data: pos_dep_mana_id
            });
            setDepPos({...pos_dep_mana_id})
        } else {
            if(!isShowModal){
              setDepPos({dep_id: "", pos_id: ""})
              setTargetKeys([])
              setSelectedKeys([])
              setData([]);
            } else {
              let newPermissionArr = permissionList.map((item)=>{
                return {
                  ...item,
                  key: item.id,
                  label: item.name,
                  value: item.id
                }
              });
              setData([...newPermissionArr]);
              setTargetKeys([])
            }
        }
    }, [pos_dep_mana_id, isShowModal, isUpdate]);

    useEffect(()=>{
        let perArr = concatArr();
        let perHaveArr = perArr.arrHave.map((item, index)=>{
          let  newOptionsArr = item.options.map(per => {
            let newItem = {
                ...per,
                label: per.name,
                value: per.id
              }
              return newItem;
          })
          return {
            ...item,
            options: newOptionsArr
          }
      });
      let perNotArr = perArr.arrNot.map((item, index)=>{
        let  newOptionsArr = item.options.map(per => {
          let newItem = {
              ...per,
              label: per.name,
              value: per.id
            }
            return newItem;
        })
        return {
          ...item,
          options: newOptionsArr
        }
      })
      let newData = [].concat(perHaveArr, perNotArr);
      let newTargetArrNotHandle = perHaveArr.map((item)=>{
        return item.options.map(per => per.value)
      });
      let newTargetArr = []
      newTargetArrNotHandle.forEach(per => {
        newTargetArr = [...newTargetArr, ...per]
      })
      setTargetKeys([...newTargetArr]);
      setRootPermissionArr([...newTargetArr])
      setData([...newData]);

        {/*let perHaveArr = perArr.arrHave.map((item, index)=>{
            let newItem = {
              ...item,
              key: item.id
            }
            return newItem
        });
        let perNotArr = perArr.arrNot.map((item, index)=>{
            let newItem = {
              ...item,
              key: item.id
            }
            return newItem
        })
        let newData = [].concat(perHaveArr, perNotArr);
        setTargetKeys([...perHaveArr.map((item)=>{
          return item.key
        })]);
        setRootPermissionArr([...perHaveArr.map((item)=>{
          return item.key
        })])
      setData([...newData]); */}
    }, [permissionHave, permissionNot]);
    
    const concatArr = ()=>{
        let newArrHave = [];
        let newArrNot = [];

        if(permissionHave.length > 0){
          let name;
          for(let item of permissionHave){
            for(let itemHave of item.groups){
              let newArrHaveOptions =[];
              name = itemHave.name;
              newArrHaveOptions = newArrHaveOptions.concat(itemHave.permission);
              newArrHave.push({
                label: name,
                options: newArrHaveOptions
              })
            }
          }
        }
        if(permissionNot.length > 0){
          let name;
          for(let item of permissionNot){
            for(let itemNot of item.groups){
              let newArrNotOptions =[];
              name = itemNot.name;
              newArrNotOptions = newArrNotOptions.concat(itemNot.permission);
              newArrNot.push({
                label: name,
                options: newArrNotOptions
              })
            }
          }
        }

        // CODE CŨ TRANSFER ANTD

        // if(permissionHave.length > 0){
        //   for(let item of permissionHave){
        //     for(let itemHave of item.groups){
        //       newArrHave = newArrHave.concat(itemHave.permission)
        //     }
        //   }
        // }
        // if(permissionNot.length > 0){
        //   for(let item of permissionNot){
        //     for(let itemNot of item.groups){
        //       newArrNot = newArrNot.concat(itemNot.permission)
        //     }
        //   }
        // }
        // console.log(newArrHave, newArrNot)
        return {
            arrHave: newArrHave,
            arrNot: newArrNot
        }
    }

    const onChange = (nextTargetKeys, direction, moveKeys) => {
      // console.log('targetKeys:', nextTargetKeys);
      // console.log('direction:', direction);
      // console.log('moveKeys:', moveKeys);
      setTargetKeys(nextTargetKeys);
    };

    const closeModal = ()=>{
      setIsShowModal(false);
    }

    const handleClickButton = ()=>{
      let deleteArr = rootPermissionArr.filter(per => !targetKeys.includes(per));
      let postArr = targetKeys.filter(per => !rootPermissionArr.includes(per));
      if(deleteArr.length > 0){
        dispatch({
          type: DELETE_PERMISSION_DEP_POS,
          data: {deleteArr, depPos}
        })
      }
      if(postArr.length > 0){
        dispatch({
          type: POST_PERMISSION_DEP_POS,
          data: {postArr, depPos}
        })
      }
      closeModal()
    }
    
    const renderDepOption = ()=>{
        return depList?.map((item)=>{
          return <Option value={+item.id}>{item.name}</Option>
        })
    }

    const renderPosOption = ()=>{
        return posList?.map((item)=>{
          return <Option value={+item.id}>{item.position.name}</Option>
        })
    }

    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
      // console.log('sourceSelectedKeys:', sourceSelectedKeys);
      // console.log('targetSelectedKeys:', targetSelectedKeys);
      setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

  return (
    <div>
      <Modal
      title={<span className='modal__title'>Bảng gán quyền</span>}
      width="812px"
      closeIcon={<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.61719 6.5L13.4609 11.3438C13.5911 11.474 13.5911 11.6172 13.4609 11.7734L12.5625 12.6719C12.4062 12.8021 12.263 12.8021 12.1328 12.6719L11.3125 11.8125L7.28906 7.82812L2.44531 12.6719C2.3151 12.8021 2.17188 12.8021 2.01562 12.6719L1.11719 11.7734C0.986979 11.6172 0.986979 11.474 1.11719 11.3438L5.96094 6.5L1.11719 1.65625C0.986979 1.52604 0.986979 1.38281 1.11719 1.22656L2.01562 0.328125C2.17188 0.197917 2.3151 0.197917 2.44531 0.328125L7.28906 5.17188L12.1328 0.328125C12.263 0.197917 12.4062 0.197917 12.5625 0.328125L13.4609 1.22656C13.5911 1.38281 13.5911 1.52604 13.4609 1.65625L12.6016 2.47656L8.61719 6.5Z" fill="black"/>
      </svg>}
      open={isShowModal}
      footer={null}
      onCancel={closeModal}
    >
          <div className="select__dep__pos">
              <Select
              allowClear
              showSearch
              placeholder="Phòng ban"
              filterOption={(input, option) =>
              (option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
              value={depPos.dep_id !== "" ? depPos.dep_id : null}
              onChange={(value)=>{
                  setDepPos({
                    ...depPos,
                    dep_id: value
                  })
              }}
          >
                  {renderDepOption()}
              </Select>
              <Select
                  allowClear
                  showSearch
                  placeholder="Chức vụ"
                  filterOption={(input, option) =>
                  (option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
                  value={depPos.pos_id !== "" ? depPos.pos_id : null}
                  onChange={(value)=>{
                    setDepPos({
                      ...depPos,
                      pos_id: value
                    })
                }}
              >
                      {renderPosOption()}
              </Select>
          </div>
          <DualListBox
          className="per__dep__pos__modal"
          options={data}
          selected={targetKeys}
          onChange={(value)=> setTargetKeys(value)}
          canFilter={true}
          filterCallback={(option, filterInput)=>{
              return (option?.label ?? '').toLowerCase().includes(filterInput.toLowerCase())
          }}
          icons={{
            moveRight: <AiOutlineRight />,
            moveAllRight: <AiOutlineDoubleRight />,
            moveLeft: <AiOutlineLeft />,
            moveAllLeft: <AiOutlineDoubleLeft />
          }}
          >

          </DualListBox>
          <div className="alignCenter permission__transfer__footer">
              <button type='button' className="dep__btn"
                onClick={()=>{
                    closeModal()
                }}>
                    Đóng
              </button>
              <button type='button' className="dep__btn"
                onClick={handleClickButton}
              >
                  {!isUpdate ? "Tạo" : "Cập nhật"}
              </button>
          </div>
      </Modal>

        {/**
      <Modal
            title={<span className='modal__title'>Bảng gán quyền</span>}
            width="800px"
            closeIcon={<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.61719 6.5L13.4609 11.3438C13.5911 11.474 13.5911 11.6172 13.4609 11.7734L12.5625 12.6719C12.4062 12.8021 12.263 12.8021 12.1328 12.6719L11.3125 11.8125L7.28906 7.82812L2.44531 12.6719C2.3151 12.8021 2.17188 12.8021 2.01562 12.6719L1.11719 11.7734C0.986979 11.6172 0.986979 11.474 1.11719 11.3438L5.96094 6.5L1.11719 1.65625C0.986979 1.52604 0.986979 1.38281 1.11719 1.22656L2.01562 0.328125C2.17188 0.197917 2.3151 0.197917 2.44531 0.328125L7.28906 5.17188L12.1328 0.328125C12.263 0.197917 12.4062 0.197917 12.5625 0.328125L13.4609 1.22656C13.5911 1.38281 13.5911 1.52604 13.4609 1.65625L12.6016 2.47656L8.61719 6.5Z" fill="black"/>
            </svg>}
            open={isShowModal}
            footer={null}
            onCancel={closeModal}
        >
            <div className="select__dep__pos">
                <Select
                    allowClear
                    showSearch
                    placeholder="Phòng ban"
                    filterOption={(input, option) =>
                    (option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
                    value={depPos.dep_id !== "" ? depPos.dep_id : null}
                    onChange={(value)=>{
                        setDepPos({
                          ...depPos,
                          dep_id: value
                        })
                    }}
                >
                        {renderDepOption()}
                </Select>
                <Select
                    allowClear
                    showSearch
                    placeholder="Chức vụ"
                    filterOption={(input, option) =>
                    (option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
                    value={depPos.pos_id !== "" ? depPos.pos_id : null}
                    onChange={(value)=>{
                      setDepPos({
                        ...depPos,
                        pos_id: value
                      })
                  }}
                >
                        {renderPosOption()}
                </Select>
            </div>
            <Transfer
                className="permission__transfer"
                dataSource={data}   
                locale={{searchPlaceholder: "Tìm kiếm quyền", itemsUnit: "quyền", itemUnit: "quyền"}}
                titles={['Quyền chưa có', 'Quyền đã có']}
                showSearch
                filterOption={(inputValue, option) => option.name.toLowerCase().indexOf(inputValue) > -1}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={onChange}
                onSelectChange={onSelectChange}
                render={item => item.name}    
            />
            <div className="alignCenter permission__transfer__footer">
                <button type='button' className="dep__btn"
                  onClick={()=>{
                      closeModal()
                  }}>
                      Đóng
                </button>
                <button type='button' className="dep__btn"
                  onClick={handleClickButton}
                >
                    {!isUpdate ? "Tạo" : "Cập nhật"}
                </button>
            </div>
        </Modal>
      */}
    </div>
  )
}
