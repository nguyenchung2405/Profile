import React, { useState } from 'react'
import { Steps } from 'antd';
import SoYeuLyLich from '../profile/step1';
import style from "./steps.module.css"
import Step3_GNĐCSVN from '../profile/step3';

export default function StepsAntd() {

    const { Step } = Steps;
    const [current, setCurrent] = useState(0);

  const onChangeSteps = (value) => {
    setCurrent(value);
  };

  const steps = [
    {
      title: 'Sơ yếu lý lịch',
      content: <SoYeuLyLich />,
    },
    {
      title: 'Lịch sử bản thân',
      content: 'Second-content',
    },
    {
      title: 'Gia nhập Đảng Cộng Sản Việt Nam',
      content: <Step3_GNĐCSVN />,
    },
    {
        title: 'Tham gia các tổ chức chính trị, xã hội, các nghề nghiệp',
        content: 'Last-content',
    },
    {
        title: 'Đào tạo, bồi dưỡng về chuyên môn, nghiệp vụ, lý luận, chính trị ngoại ngữ',
        content: 'Last-content',
    },
    {
        title: 'Khen thưởng kỷ luật',
        content: 'Last-content',
    },
    {
        title: 'Hoàn cảnh kinh tế, quan hệ gia đình',
        content: 'Last-content',
    },
    {
        title: 'Quan hệ gia đình, thân tộc',
        content: 'Last-content',
    },
    {
        title: 'Quan hệ xã hội',
        content: 'Last-content',
    },
];

  return (
    <div className={style.alignCenter}>
        <div className={style.steps}>
            <Steps className={style.editWidth} current={current} onChange={onChangeSteps} direction="vertical">
                {
                    steps.map((item,index)=>{
                        return <Step key={index} title={item.title} />
                    })
                }
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="next">
                {current <= 7
                ?
                <button className="SoYeuLyLich__btn" onClick={()=>{
                    onChangeSteps(current + 1)
                }}>Tiếp theo</button>
                :
                <button className="SoYeuLyLich__btn" onClick={()=>{
                    console.log("Hoàn thành.");
                }}>Hoàn thành</button>
                }
            </div>
        </div>
    </div>
  )
}
