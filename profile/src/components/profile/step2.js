import React, { useEffect, useState } from 'react'
import { Steps, Button } from 'antd';
import {AiOutlinePlusCircle} from "react-icons/ai"
import ModalComponent from '../modal/modal';
import { GET_USER_DEGREE, quaTrinhLVHT } from '../../title/title';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

export default function Step2() {
    
    const { Step } = Steps;
    const dispatch = useDispatch()
    const {personal_history} = useSelector(state => state.step2Reducer)
    let [isShowModal, setIsShowModal] = useState(false)
    console.log(personal_history)
    const quaTrinh = personal_history.map((history, index)=>{
        let tuNgay = moment(new Date(history.work_from)).format("DD/MM/YYYY");
        let denNgay = moment(new Date(history.work_to)).format("DD/MM/YYYY");
        let description = history.work_place;
        return {
            title: `${tuNgay} - ${denNgay}`,
            description
        }
    }); 

    const closeModal = ()=>{
        setIsShowModal(false)
    }

    return (
        <div className="Step2">
            <div className="Step2__header">
                <p>Cử nhân công nghệ thông tin</p>
                <p>trường đại học khoa học tự nhiên</p>
            </div>
            <div className="Step2__content">
                <p>Quá trình học tập và làm việc:</p>
                <Steps progressDot current={quaTrinh.length - 1} direction="vertical">
                    {
                        quaTrinh.map( (item, index) => {
                            return <Step title={item.title} description={item.description} key={index} />
                        })
                    }
                </Steps>
            </div>
            <div className="Step2__footer">
                <Button type="default"
                icon={<AiOutlinePlusCircle />}
                onClick={()=>{
                    setIsShowModal(true)
                }}
                >Thêm</Button>
            </div>
            <ModalComponent 
            title={quaTrinhLVHT} 
            isShowModal={isShowModal}
            closeModal={closeModal} />
        </div>
    )
}
