import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TOKEN, local, DELETE_RESOURCE } from "../../title/title";
import { setAvatar, setResources } from "../../redux/Steps/step1/step1Slice";

export default function Image() {
  const [path, setPath] = useState("");
  let { user_id } = useSelector((state) => state.stepsReducer.user_profile_id);
  let { avatar, resources } = useSelector((state) => state.steps1Reducer);
  const dispatch = useDispatch();
  const axiosConfig = axios.create({});
  useEffect(() => {
    if (avatar?.length > 0) {
      // setPath(`http://192.168.61.116:8017${avatar}`);
      setPath(`https://dev-resource.tuoitre.vn${avatar}`)
    }
  }, [avatar]);
  return (
    <div className="image">
      <div className="image-3x4">
        <img src={path} alt="ảnh cá nhân" />
      </div>
      <input
        type="file"
        id="img-input"
        onChange={async (e) => {
          const form = new FormData();
          form.append("image3x4", e.target.files[0]);
          if (user_id) {
            form.append("user_id", user_id);
            // POST ảnh lên
            const result = await axios({
              url: `${local}/api/upload`,
              method: "POST",
              headers: {
                Authorization: "Bearer " + TOKEN,
              },
              data: form,
            });
            let image = result.data.data;
            let indexAvatar = image.findLastIndex(resoures => resoures.type === "3x4");
            if(indexAvatar !== -1 && image[indexAvatar]?.path !== null){
              let  path = image[indexAvatar].path;
              // setPath(`http://192.168.61.116:8017${JSON.parse(path).toString()}`);
              setPath(`https://dev-resource.tuoitre.vn${JSON.parse(path).toString()}`);
          } 
            // let imgIdExsisted = resources.find(img => img?.type === "3x4");
            // if(imgIdExsisted?.id && typeof +imgIdExsisted?.id === "number"){
            //     dispatch({
            //         type: DELETE_RESOURCE,
            //         resource_id: imgIdExsisted?.id
            //     })
            // }
            // dispatch(setResources(result?.data?.data))
            // let {content} = result.data.data[0].resource;
            dispatch(setAvatar(result?.data?.data?.path));
          }
        }}
      />
      <label className="file-input__label" htmlFor="img-input">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="upload"
          className="svg-inline--fa fa-upload fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
          ></path>
        </svg>
        <span>Chỉnh sửa ảnh 3x4</span>
      </label>
    </div>
  );
}
