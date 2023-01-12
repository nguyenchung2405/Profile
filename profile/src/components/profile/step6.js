import React, { useEffect, useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineEdit, AiOutlineMinusCircle } from 'react-icons/ai';
import { Button, Image } from 'antd'
import ModalComponent from '../modal/modal';
import {DELETE_RESOURCE, DELETE_REWARD_DISCIPLINE, khenThuong as khenThuongTitle, kyLuat as kyLuatTitle, local, TOKEN} from "../../title/title"
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import ModalUpdate from '../modal/modalUpdate';
import { setIsNextStep } from '../../redux/Steps/stepsSlice';
import { FcAddImage } from 'react-icons/fc';
import axios from "axios"
import { setResources } from '../../redux/Steps/step1/step1Slice';

export default function Step6() {

    const dispatch = useDispatch();
    let [isShowModal, setIsShowModal] = useState(false)
    let [isShowModal2, setIsShowModal2] = useState(false)
    let [isShowModalUpdate, setIsShowModalUpdate] = useState(false)
    let [isShowModalUpdate2, setIsShowModalUpdate2] = useState(false)
    let {rewardDiscipline} = useSelector(state => state.step6Reducer);
    let {nextStep, user_profile_id} = useSelector(state => state.stepsReducer);
    let {resources} = useSelector(state => state.steps1Reducer);
    
    useEffect(()=>{
        if(nextStep !== 5){
            dispatch(setIsNextStep(true))
        }
    }, [nextStep])

    const closeModal = ()=>{
        setIsShowModal(false)
    }

    const closeModal2 = ()=>{
        setIsShowModal2(false)
    }

    const closeModalUpdate = ()=>{
        setIsShowModalUpdate(false)
    }

    const closeModalUpdate2 = ()=>{
        setIsShowModalUpdate2(false)
    }

    const khenThuong = rewardDiscipline.map((item, index)=>{
        let ngayKhenThuong = moment(new Date(item.time_from.concat(".000Z"))).format("DD/MM/YYYY")
        if(item.type === "reward"){
            let imgType = `${item.type}_${item.id}`;
            let imgStudy = resources.find(img => img.type === imgType);
            return {
                title: `${ngayKhenThuong}`,
                description: item.note,
                re_dis_id: item.id,
                imgStudy
            }
        }
    })

    const kyLuat = rewardDiscipline.map((item, index)=>{
        let ngayKyLuat = moment(new Date(item.time_from.concat(".000Z"))).format("DD/MM/YYYY")
        if(item.type === "discipline"){
            let imgType = `${item.type}_${item.id}`;
            let imgStudy = resources.find(img => img.type === imgType);
            return {
                title: `${ngayKyLuat}`,
                description: item.note,
                re_dis_id: item.id,
                imgStudy
            }
        }
    })

   const renderReward = ()=>{
        let newKhenThuong = khenThuong.filter(item => item !== undefined);
        return newKhenThuong.map((item, index) => {
            return <div className="process step6" key={index}>
                <div className="point"></div>
                <div className="process__infor">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
                <AiOutlineMinusCircle onClick={() => {
                    dispatch({
                        type: DELETE_REWARD_DISCIPLINE,
                        re_dis_id: item.re_dis_id
                    })
                    if(item?.imgStudy?.id && typeof +item?.imgStudy?.id ==="number"){
                        dispatch({
                            type: DELETE_RESOURCE,
                            resource_id: item?.imgStudy?.id
                        })
                    }
                }} />
                <div className="upload__section">
                <label className="upload__label" htmlFor={`reward_${item.re_dis_id}`}>
                    <FcAddImage />
                </label>
                <input id={`reward_${item.re_dis_id}`} type="file" className="upload__input"
                onChange={async (e)=>{
                    const form = new FormData();
                    let imgIdExsisted = item?.imgStudy?.id;
                    form.append("file", e.target.files[0]);
                    form.append("user_id", user_profile_id.user_id);
                    form.append("type", `reward_${item.re_dis_id}`);
                    form.append("imgIdExsisted", imgIdExsisted);
                    const uploadFile = await axios({
                        url: `${local}/api/upload/step5`,
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + TOKEN
                        },
                        data: form
                    });
                    dispatch(setResources(uploadFile?.data?.data))
                }}
                />
                </div>
                <div className="image__files">
                    <Image src={`data:image/png;base64,${item.imgStudy?.resource?.content}`} alt="ảnh đào tạo" />
                </div>
        </div>
        })
   }

   const renderDiscipline = ()=>{
    let newKyLuat = kyLuat.filter(item => item !== undefined);
    return newKyLuat.map((item, index) => {
        return <div className="process step6" key={index}>
            <div className="point"></div>
            <div className="process__infor">
                <p>{item.title}</p>
                <p>{item.description}</p>
            </div>
            <AiOutlineMinusCircle onClick={() => {
                dispatch({
                    type: DELETE_REWARD_DISCIPLINE,
                    re_dis_id: item.re_dis_id
                })
                if(item?.imgStudy?.id && typeof +item?.imgStudy?.id ==="number"){
                    dispatch({
                        type: DELETE_RESOURCE,
                        resource_id: item?.imgStudy?.id
                    })
                }
            }} />
            <div className="upload__section">
                <label className="upload__label" htmlFor={`discipline_${item.re_dis_id}`}>
                    <FcAddImage />
                </label>
                <input id={`discipline_${item.re_dis_id}`} type="file" className="upload__input"
                onChange={async (e)=>{
                    const form = new FormData();
                    let imgIdExsisted = item?.imgStudy?.id;
                    form.append("file", e.target.files[0]);
                    form.append("user_id", user_profile_id.user_id);
                    form.append("type", `discipline_${item.re_dis_id}`);
                    form.append("imgIdExsisted", imgIdExsisted);
                    const uploadFile = await axios({
                        url: `${local}/api/upload/step5`,
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + TOKEN
                        },
                        data: form
                    });
                    dispatch(setResources(uploadFile?.data?.data))
                }}
                />
            </div>
            <div className="image__files">
                <Image src={`data:image/png;base64,${item.imgStudy?.resource?.content}`} alt="ảnh đào tạo" />
            </div>
    </div>
    })
}

  return (
    <div className="Step6">
        <div className="Step6__first__content">
            <div className="Step6__content khenThuong">
                    <p>Khen thưởng:</p>
                    {renderReward()}
            </div>
            <div className="Step6__footer khenThuong">
                <Button 
                onClick={()=>{
                    setIsShowModal(true)
                }}
                type="default"
                icon={<AiOutlinePlusCircle />}>Thêm</Button>
            </div>
            <div className="Step6__footer khenThuong">
                <Button 
                onClick={()=>{
                    setIsShowModalUpdate(true)
                }}
                type="default"
                icon={<AiOutlineEdit />}>Cập nhật</Button>
            </div>
            <ModalComponent 
            title={khenThuongTitle} 
            isShowModal={isShowModal}
            closeModal={closeModal} />
            <ModalUpdate
            title={khenThuongTitle} 
            isShowModal={isShowModalUpdate}
            closeModal={closeModalUpdate}
            dataStep6={rewardDiscipline} />
        </div>
        <div className="Step6__second__content">
            <div className="Step6__content kyLuat">
                    <p>Kỷ luật:</p>
                    {renderDiscipline()}
            </div>
            <div className="Step6__footer kyLuat">
                <Button 
                onClick={()=>{
                    setIsShowModal2(true)
                }}
                type="default"
                icon={<AiOutlinePlusCircle />}>Thêm</Button>
            </div>
            <div className="Step6__footer kyLuat">
                <Button 
                onClick={()=>{
                    setIsShowModalUpdate2(true)
                }}
                type="default"
                icon={<AiOutlineEdit />}>Cập nhật</Button>
            </div>
            <ModalComponent 
            title={kyLuatTitle} 
            isShowModal={isShowModal2}
            closeModal={closeModal2} />
            <ModalUpdate
            title={kyLuatTitle} 
            isShowModal={isShowModalUpdate2}
            closeModal={closeModalUpdate2}
            dataStep6={rewardDiscipline} />
        </div>
    </div>
  )
}
