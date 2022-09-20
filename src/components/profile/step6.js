import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Button, Steps } from 'antd'
import ModalComponent from '../modal/modal';
import {khenThuong as khenThuongTitle, kyLuat as kyLuatTitle} from "../../title/title"

export default function Step6() {

    const {Step} = Steps;
    let [isShowModal, setIsShowModal] = useState(false)
    let [isShowModal2, setIsShowModal2] = useState(false)

    const khenThuong = [
        {
            title: '05/04/2003',
            description: "Lao động tiên tiến"
        },
        {
            title: '05/04/2009',
            description: "Lao động xuất sắc"
        },
        {
            title: '05/04/2010',
            description: "Lao động xuất sắc"
        },
    ]

    const kyLuat = [
        {
            title: '05/04/2003',
            description: "Kỷ luật 1"
        },
        {
            title: '05/04/2009',
            description: "Kỷ luật 2"
        },
        {
            title: '05/04/2010',
            description: "Kỷ luật 3"
        },
    ];

    const closeModal = ()=>{
        setIsShowModal(false)
    }

    const closeModal2 = ()=>{
        setIsShowModal2(false)
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
