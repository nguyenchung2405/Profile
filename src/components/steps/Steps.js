import React, { useState } from 'react'
import { Steps } from 'antd';
import SoYeuLyLich from '../profile/step1';
import style from "./steps.module.css"
import Step3Component from '../profile/step3';
import Step2 from '../profile/step2';
import Step4 from "../profile/step4"
import Step5 from '../profile/step5';
import Step6 from '../profile/step6';
import Step7 from '../profile/step7';

export default function StepsAntd() {

    const { Step } = Steps;
    const [current, setCurrent] = useState(0);

    const onChangeSteps = (value) => {
      setCurrent(value);
    };

    let [isSubmitted,setIsSubmitted] = useState(false);

    const steps = [
      {
        title: 'Sơ yếu lý lịch',
        content: <SoYeuLyLich submit={isSubmitted} />,
      },
      {
        title: 'Lịch sử bản thân',
        content: <Step2 />,
      },
      {
        title: 'Gia nhập Đảng Cộng Sản Việt Nam',
        content: <Step3Component />,
      },
      {
          title: 'Tham gia các tổ chức chính trị, xã hội, các nghề nghiệp',
          content: <Step4 />,
      },
      {
          title: 'Đào tạo, bồi dưỡng về chuyên môn, nghiệp vụ, lý luận, chính trị ngoại ngữ',
          content: <Step5 />,
      },
      {
          title: 'Khen thưởng kỷ luật',
          content: <Step6 />,
      },
      {
          title: 'Hoàn cảnh kinh tế, quan hệ gia đình',
          content: <Step7 />,
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
          <div className={style["steps__noflex"]}>
              <section className={style.steps}>
                  <Steps className={style.editWidth} current={current} onChange={onChangeSteps} direction="vertical">
                  {
                      steps.map((item,index)=>{
                          return <Step key={index} title={item.title} />
                      })
                  }
                  </Steps>
                  <div className="steps-content">{steps[current].content}</div>
              </section>
              <div className="next">
                      {current <= 7
                      ?
                      <button className="SoYeuLyLich__btn" onClick={()=>{
                        setIsSubmitted(true);
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
