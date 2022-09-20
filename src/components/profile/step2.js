import React, { useState } from 'react'
import { Steps, Button } from 'antd';
import {AiOutlinePlusCircle} from "react-icons/ai"
import ModalComponent from '../modal/modal';
import { quaTrinhLVHT } from '../../title/title';

export default function Step2() {

    const { Step } = Steps;
    let [isShowModal, setIsShowModal] = useState(false)

    const quaTrinh = [
        {
            title: '05/09/1970 - 10/05/1995',
            description: "Học sinh trường tiểu học Nguyễn Hữu A"
        },
        {
            title: '05/09/1996 - 10/05/1999',
            description: "Học sinh trường trung học cơ sở Toàn Quyết B"
        },
    ]

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
