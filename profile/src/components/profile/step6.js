import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Button, Steps } from 'antd'
import ModalComponent from '../modal/modal';
import {khenThuong as khenThuongTitle, kyLuat as kyLuatTitle} from "../../title/title"
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

export default function Step6() {

    const {Step} = Steps;
    const dispatch = useDispatch();
    let [isShowModal, setIsShowModal] = useState(false)
    let [isShowModal2, setIsShowModal2] = useState(false)
    let [isShowModalUpdate, setIsShowModalUpdate] = useState(false)
    let [isShowModalUpdate2, setIsShowModalUpdate2] = useState(false)
    let {rewardDiscipline} = useSelector(state => state.step6Reducer);

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
        let ngayKhenThuong = moment(new Date(item.time_from)).format("DD/MM/YYYY")
        if(item.type === "reward"){
            return {
                title: `${ngayKhenThuong}`,
                description: item.note,
                re_dis_id: item.id
            }
        }
    })

    const kyLuat = rewardDiscipline.map((item, index)=>{
        let ngayKyLuat = moment(new Date(item.time_from)).format("DD/MM/YYYY")
        if(item.type === "discipline"){
            return {
                title: `${ngayKyLuat}`,
                description: item.note,
                re_dis_id: item.id
            }
        }
    })

   const renderReward = ()=>{
        let newKhenThuong = khenThuong.filter(item => item !== undefined);
        return newKhenThuong.map((item, index) => {
            return <div className="process" key={index}>
                <div className="point"></div>
                <div className="process__infor">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
                <svg onClick={() => {
                    // dispatch({
                    //     type: DELETE_TRAINING,
                    //     tr_fos_id: item.tr_fos_id
                    // })
                }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                    </path>
                </svg>
        </div>
        })
   }

   const renderDiscipline = ()=>{
    let newKyLuat = kyLuat.filter(item => item !== undefined);
    return newKyLuat.map((item, index) => {
        return <div className="process" key={index}>
            <div className="point"></div>
            <div className="process__infor">
                <p>{item.title}</p>
                <p>{item.description}</p>
            </div>
            <svg onClick={() => {
                // dispatch({
                //     type: DELETE_TRAINING,
                //     tr_fos_id: item.tr_fos_id
                // })
            }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                </path>
            </svg>
    </div>
    })
}

  return (
    <div className="Step6">
        <div className="Step6__first__content">
            <div className="Step6__content khenThuong">
                    <p>Khen thưởng:</p>
                    <Steps progressDot current={khenThuong.length - 1} direction="vertical">
                        {
                            khenThuong.map( (item, index) => {
                                    return <Step title={item.title} 
                                    description={item.description} 
                                    key={index} />
                            })
                        }
                    </Steps>
            </div>
            <div className="Step6__footer khenThuong">
                <Button 
                onClick={()=>{
                    setIsShowModal(true)
                }}
                type="default"
                icon={<AiOutlinePlusCircle />}>Thêm</Button>
            </div>
            <ModalComponent 
            title={khenThuongTitle} 
            isShowModal={isShowModal}
            closeModal={closeModal} />
        </div>
        <div className="Step6__second__content">
            <div className="Step6__content kyLuat">
                    <p>Kỷ luật:</p>
                    <Steps progressDot current={kyLuat.length - 1} direction="vertical">
                        {
                            kyLuat.map( (item, index) => {
                                    return <Step title={item.title} description={item.description} key={index} />
                            })
                        }
                    </Steps>
            </div>
            <div className="Step6__footer kyLuat">
                <Button 
                onClick={()=>{
                    setIsShowModal2(true)
                }}
                type="default"
                icon={<AiOutlinePlusCircle />}>Thêm</Button>
            </div>
            <ModalComponent 
            title={kyLuatTitle} 
            isShowModal={isShowModal2}
            closeModal={closeModal2} />
        </div>
    </div>
  )
}
