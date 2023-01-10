import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineEdit, AiOutlineMinusCircle} from 'react-icons/ai';
import ModalComponent from '../modal/modal';
import {daoTao as daoTaoTitle, boiDuong as boiDuongTitle, DELETE_TRAINING, local, TOKEN, GET_USER_RESOURCES} from "../../title/title"
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import ModalUpdate from '../modal/modalUpdate';
import { setIsNextStep } from '../../redux/Steps/stepsSlice';
import {FcAddImage} from "react-icons/fc"
import axios from "axios"

export default function Step5() {

    const dispatch = useDispatch()
    let [isShowModal, setIsShowModal] = useState(false)
    let [isShowModal2, setIsShowModal2] = useState(false)
    let [isShowModalUpdate, setIsShowModalUpdate] = useState(false)
    let [isShowModalUpdate2, setIsShowModalUpdate2] = useState(false)
    const {trainingFostering} = useSelector(state => state.step5Reducer)
    let {nextStep, user_profile_id} = useSelector(state => state.stepsReducer);

    useEffect(()=>{
        if(nextStep !== 4){
            dispatch(setIsNextStep(true))
        }
    }, [nextStep])

    useEffect(()=>{
        dispatch({
            type: GET_USER_RESOURCES
        })
    })

    const daoTao = trainingFostering.map((tr_fos, index)=>{
        let tuNgay = moment(new Date(tr_fos.time_from.concat(".000Z"))).format("DD/MM/YYYY");
        let denNgay = moment(new Date(tr_fos.time_to.concat(".000Z"))).format("DD/MM/YYYY");
        if(tr_fos.study_mode === "training"){
            return {
                title: `${tuNgay} - ${denNgay}`,
                description: tr_fos.note,
                subTitle: tr_fos.diploma,
                tr_fos_id: tr_fos.id
            }
        }
    })

    const boiDuong = trainingFostering.map((tr_fos, index)=>{
        let tuNgay = moment(new Date(tr_fos.time_from.concat(".000Z"))).format("DD/MM/YYYY");
        let denNgay = moment(new Date(tr_fos.time_to.concat(".000Z"))).format("DD/MM/YYYY");
        if(tr_fos.study_mode === "fostering"){
            return {
                title: `${tuNgay} - ${denNgay}`,
                description: tr_fos.note,
                tr_fos_id: tr_fos.id
            }
        }
    })

    const renderTraining = ()=>{
        let newDaoTao = daoTao.filter(item => item !== undefined);
        return newDaoTao.map((item, index) => {
            return <div className="process" key={index}>
                <div className="point"></div>
                <div className="process__infor">
                    <p>{item.title}</p>
                    <p className="diploma" title={item.subTitle}>{item.subTitle}</p>
                    <p>{item.description}</p>
                </div>
                <AiOutlineMinusCircle onClick={() => {
                    dispatch({
                        type: DELETE_TRAINING,
                        tr_fos_id: item.tr_fos_id
                    })
                }} />
                <div className="upload__section">
                    <label className="upload__label" htmlFor={`traning_${item.tr_fos_id}`}>
                        <FcAddImage />
                    </label>
                    <input id={`traning_${item.tr_fos_id}`} type="file" className="upload__input"
                    onChange={async (e)=>{
                        const form = new FormData();
                        form.append("file", e.target.files[0]);
                        form.append("user_id", user_profile_id.user_id);
                        form.append("type", `traning_${item.tr_fos_id}`)
                        const uploadFile = await axios({
                            url: `${local}/api/upload/step5`,
                            method: "POST",
                            headers: {
                                Authorization: "Bearer " + TOKEN
                            },
                            data: form
                        });
                    }}
                    />
                </div>
        </div>
        })
    }

    const renderFostering = ()=>{
        let newBoiDuong = boiDuong.filter(item => item !== undefined);
        return newBoiDuong.map( (item, index) => {
            return <div className="process" key={index}>
                <div className="point"></div>
                <div className="process__infor">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
                <AiOutlineMinusCircle onClick={() => {
                    dispatch({
                        type: DELETE_TRAINING,
                        tr_fos_id: item.tr_fos_id
                    })
                }} />
            </div>
    })
    }

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


  return (
    <div className="Step5">
        <div className="Step5__first__content">
            <div className="Step5__content daoTao">
                    <p>Đào tạo:</p>
                    {/*
                    <Steps progressDot current={daoTao.length - 1} direction="vertical">
                        {
                            daoTao.map( (item, index) => {
                                    return <Step title={item.title} 
                                    subTitle={item.subTitle}
                                    description={item.description} 
                                    key={index} />
                            })
                        }
                    </Steps>
                */}
                {renderTraining() }
                <div className="image__files">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fu9NutmAZ_h7ZUDqfWPMvYbbE5VRDWGpTA&usqp=CAU' alt="ảnh đào tạo" />
                </div>
            </div>
            <div className="Step5__footer daoTao">
                <Button 
                onClick={()=>{
                    setIsShowModal(true)
                }}
                type="default"
                icon={<AiOutlinePlusCircle />}>Thêm</Button>
            </div>
            <div className="Step5__footer">
                <Button 
                onClick={()=>{
                    setIsShowModalUpdate(true)
                }}
                type="default"
                icon={<AiOutlineEdit />}>Cập nhật</Button>
            </div>
            <ModalComponent 
            title={daoTaoTitle} 
            isShowModal={isShowModal}
            closeModal={closeModal} />
            <ModalUpdate
            title={daoTaoTitle} 
            isShowModal={isShowModalUpdate}
            closeModal={closeModalUpdate}
            dataStep5={trainingFostering} />
        </div>
        <div className="Step5__second__content">
            <div className="Step5__content daoTao">
                    <p>Bồi dưỡng:</p>
                    {/*
                        <Steps progressDot current={boiDuong.length - 1} direction="vertical">
                    {
                        boiDuong.map( (item, index) => {
                            return <Step title={item.title} description={item.description} key={index} />
                        })
                    }
                    </Steps>
                    */}
                    {renderFostering()}
            </div>
            <div className="Step5__footer daoTao">
                <Button 
                onClick={()=>{
                    setIsShowModal2(true)
                }}
                type="default"
                icon={<AiOutlinePlusCircle />}>Thêm</Button>
            </div>
            <div className="Step5__footer">
                <Button 
                onClick={()=>{
                    setIsShowModalUpdate2(true)
                }}
                type="default"
                icon={<AiOutlineEdit />}>Cập nhật</Button>
            </div>
            <ModalComponent 
            title={boiDuongTitle} 
            isShowModal={isShowModal2}
            closeModal={closeModal2} />
            <ModalUpdate
            title={boiDuongTitle} 
            isShowModal={isShowModalUpdate2}
            closeModal={closeModalUpdate2}
            dataStep5={trainingFostering} />
        </div>
    </div>
  )
}
