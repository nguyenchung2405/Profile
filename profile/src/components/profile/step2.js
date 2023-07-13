import React, { useEffect, useState } from "react";
import { Steps, Button, Image } from "antd";
import {
  AiOutlinePlusCircle,
  AiOutlineEdit,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import ModalComponent from "../modal/modal";
import {
  DELETE_PERSONAL_HISTORY,
  DELETE_RESOURCE,
  local,
  quaTrinhLVHT,
  TOKEN,
} from "../../title/title";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { setIsNextStep } from "../../redux/Steps/stepsSlice";
import ModalUpdate from "../modal/modalUpdate";
import { FcAddImage } from "react-icons/fc";
import axios from "axios";
import { setResources } from "../../redux/Steps/step1/step1Slice";

export default function Step2() {
  const { Step } = Steps;
  const dispatch = useDispatch();
  const { personal_history } = useSelector((state) => state.step2Reducer);
  let { nextStep, user_profile_id } = useSelector(
    (state) => state.stepsReducer
  );
  let { resources } = useSelector((state) => state.steps1Reducer);
  let [isShowModal, setIsShowModal] = useState(false);
  let [isShowModalUpdate, setIsShowModalUpdate] = useState(false);

  const quaTrinh = personal_history.map((history) => {
    let tuNgay = moment(new Date(history?.work_from?.concat(".000Z"))).format(
      "DD/MM/YYYY"
    );
    let denNgay = moment(new Date(history?.work_to?.concat(".000Z"))).format(
      "DD/MM/YYYY"
    );
    let description = history.work_place;
    // let imgType = `history_${history.id}`;
    let imgType = `personal-history_${history.id}`;
    // console.log(imgType);
    // console.log(resources)
    // let imgStudy = resources.find(img => img.type === imgType);
    let typeImg=(element)=>element.type==="personal-history"
    let imgStudy = resources.find((img) => 
    img.type===imgType
    );
    let imageId=resources.findLastIndex(typeImg)
    let img=resources[imageId]
    return {
      title: `${tuNgay} - ${denNgay}`,
      description,
      id: history.id,
      imgStudy,
      // imageId,
    };
  });

  const closeModal = () => {
    setIsShowModal(false);
  };

  const closeModalUpdate = () => {
    setIsShowModalUpdate(false);
  };

  useEffect(() => {
    if (nextStep !== 1) {
      dispatch(setIsNextStep(true));
    }
  }, [nextStep]);

  return (
    <div className="Step2">
      <div className="Step2__content">
        <p>Quá trình học tập và làm việc:</p>
        {quaTrinh.map((item, index) => {
          console.log(item)
          return (
            <div className="process">
              <div className="point"></div>
              <div className="process__infor">
                <p>{item.title}</p>
                <p>{item.description}</p>
              </div>
              <AiOutlineMinusCircle
                onClick={() => {
                  dispatch({
                    type: DELETE_PERSONAL_HISTORY,
                    personal_history_id: item.id,
                  });
                  if (
                    item?.imgStudy?.id &&
                    typeof +item?.imgStudy?.id === "number"
                  ) {
                    dispatch({
                      type: DELETE_RESOURCE,
                      resource_id: item?.imgStudy?.id,
                    });
                  }
                }}
              />
              <div className="upload__section">
                <label className="upload__label" htmlFor={`personal-history_${item.id}`}>
                  <FcAddImage />
                </label>
                <input
                  id={`personal-history_${item.id}`}
                  type="file"
                  className="upload__input"
                  onChange={async (e) => {
                    const form = new FormData();
                    let imgIdExsisted = item?.imgStudy?.id;
                    // let imgIdExsisted = item?.imageId;
                    form.append("file", e.target.files[0]);
                    form.append("user_id", user_profile_id.user_id);
                    form.append("type", `personal-history_${item.id}`);
                    form.append("imgIdExsisted", imgIdExsisted);
                    const uploadFile = await axios({
                      url: `${local}/api/upload/step5`,
                      method: "POST",
                      headers: {
                        Authorization: "Bearer " + TOKEN,
                      },
                      data: form,
                    });
                    dispatch(setResources(uploadFile?.data?.data));
                  }}
                />
              </div>
              <div className="image__files">
                {/* <Image src={`data:image/png;base64,${item.imgStudy?.resource?.content}`} alt="ảnh đính kèm" /> */}
                <Image src={item?.imgStudy?.path.length>0?`https://dev-resource.tuoitre.vn${JSON.parse(item?.imgStudy?.path).toString()}`:""} alt="ảnh đính kèm" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="Step2__footer">
        <Button
          type="default"
          icon={<AiOutlinePlusCircle />}
          onClick={() => {
            setIsShowModal(true);
          }}
        >
          Thêm
        </Button>
      </div>
      <div className="Step2__footer">
        <Button
          type="default"
          icon={<AiOutlineEdit />}
          onClick={() => {
            setIsShowModalUpdate(true);
          }}
        >
          Cập nhật
        </Button>
      </div>
      <ModalComponent
        title={quaTrinhLVHT}
        isShowModal={isShowModal}
        closeModal={closeModal}
      />
      <ModalUpdate
        title={quaTrinhLVHT}
        isShowModal={isShowModalUpdate}
        closeModal={closeModalUpdate}
        dataStep2={personal_history}
      />
    </div>
  );
}
