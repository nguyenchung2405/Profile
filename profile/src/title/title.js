import { checkMicroFe, getTokenInCookie } from "../ultils/helper";

export const TOKEN = getTokenInCookie();

const checkProduct = () => {
  if (window.location.href.includes("staging")) {
    return "https://profileservice-staging.tuoitre.vn";
  } else if (
    window.location.href.includes("erp.tuoitre.vn") ||
    window.location.href.includes("nhatoi")
    // || window.location.href.includes("erpfe")
  ) {
    return "https://profileservice-product.tuoitre.vn";
  }
  // if (window.location.href.includes("erp-dev")|| window.location.href.includes("erpfe"))
  else if (
    window.location.href.includes("erp-dev") ||
    window.location.href.includes("erpfe")
  ) {
    return "https://profileservice.tuoitre.vn";
    // return "http://localhost:3000"
  }
};
export const local = checkMicroFe() === true ? checkProduct() : "";
//     window.location.href.includes("staging")
//     ? "https://profileservice-staging.tuoitre.vn"
//     : (window.location.href.includes("erp.tuoitre.vn")||
//     window.location.href.includes("nhatoi")
//     )?
//      "https://profileservice-product.tuoitre.vn"
// : ""

// Regex
export const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const regexPhone = /(84[3|5|7|8|9]|0[3|5|7|8|9])+([0-9]{8}|[0-9]{9})\b/;

export const quaTrinhLVHT = "Quá trình làm việc và học tập";
export const thamGiaToChucCT =
  "Tham gia các tổ chức chính trị, các hôị nghề nghiệp";
export const daoTao = "Đào tạo";
export const boiDuong = "Bồi dưỡng";
export const khenThuong = "Khen thưởng";
export const kyLuat = "Kỷ luật";
export const lichSuBanThan = "Lịch sử bản thân";
export const quanHeGiaDinh = "Quan hệ gia đình";
export const noiSinh_Step1 = "Nơi sinh";
export const queQuan_Step1 = "Quê quán";
export const GET_PROFILE_BY_ID = "GET_PROFILE_BY_ID";
export const GET_PROVINCES = "GET_PROVINCES";
export const GET_DISTRICTS_BIRTH_PLACE = "GET_DISTRICTS_BIRTH_PLACE";
export const GET_DISTRICTS_HOME_TOWN = "GET_DISTRICTS_HOME_TOWN";
export const GET_DISTRICTS_ADDRESS = "GET_DISTRICTS_ADDRESS";
export const GET_DISTRICTS_HOKHAU = "GET_DISTRICTS_HOKHAU";
export const GET_DISTRICTS_STEP8 = "GET_DISTRICTS_STEP8";
export const GET_DISTRICTS_STEP7 = "GET_DISTRICTS_STEP7";
export const GET_DISTRICTS_STEP9 = "GET_DISTRICTS_STEP9";
export const GET_DISTRICTS_STEP7_CON = "GET_DISTRICTS_STEP7_CON";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const CREATE_PROFILE = "CREATE_PROFILE";
export const ONLY_CREATE_PROFILE = "ONLY_CREATE_PROFILE";
export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_INFORMATION = "GET_USER_INFORMATION";
export const GET_DEP_POS = "GET_DEPARTMENT_POSITION";
export const GET_PART = "GET_PART";
export const GET_AVATAR = "GET_AVATAR";
export const EXPORT_EXCEL = "EXPORT_EXCEL";
export const DELETE_DEP_POS = "DELETE_DEP_POS";
export const GET_DEPARTMENT_LIST = "GET_DEPARTMENT_LIST";
export const UPDATE_DEPARTMENT = "UPDATE_DEPARTMENT";
export const GET_DEPARTMENT_INFOR = "GET_DEPARTMENT_INFOR";
export const CREATE_DEPARTMENT = "CREATE_DEPARTMENT";
export const DELETE_DEPARTMENT = "DELETE_DEPARTMENT";
export const GET_POSITIONS_MANA_LIST = "GET_POSITIONS_MANA_LIST";
export const GET_POSITION_TYPE_LIST = "GET_POSITION_TYPE_LIST";
export const CREATE_POSITION_TYPE = "CREATE_POSITION_TYPE";
export const UPDATE_POSITION_TYPE = "UPDATE_POSITION_TYPE";
export const DELETE_POSITION_TYPE = "DELETE_POSITION_TYPE";
export const CREATE_POSITION_AND_MANAGEMENT = "CREATE_POSITION_AND_MANAGEMENT";
export const UPDATE_POSITION_AND_MANAGEMENT = "UPDATE_POSITION_AND_MANAGEMENT";
export const DELETE_POSITION_AND_MANAGEMENT = "DELETE_POSITION_AND_MANAGEMENT";
export const GET_PERSONAL_HISTORY = "GET_PERSONAL_HISTORY";
export const CREATE_PERSONAL_HISTORY = "CREATE_PERSONAL_HISTORY";
export const UPDATE_PERSONAL_HISTORY = "UPDATE_PERSONAL_HISTORY";
export const DELETE_PERSONAL_HISTORY = "DELETE_PERSONAL_HISTORY";
export const CREATE_PARTY = "CREATE_PARTY";
export const UPDATE_PARTY = "UPDATE_PARTY";
export const CREATE_ORGANIZATION = "CREATE_ORGANIZATION";
export const UPDATE_ORGANIZATION = "UPDATE_ORGANIZATION";
export const DELETE_ORGANIZATION = "DELETE_ORGANIZATION";
export const CREATE_TRAINING = "CREATE_TRAINING";
export const UPDATE_TRAINING = "UPDATE_TRAINING";
export const DELETE_TRAINING = "DELETE_TRAINING";
export const CREATE_REWARD_DISCIPLINE = "CREATE_REWARD_DISCIPLINE";
export const DELETE_REWARD_DISCIPLINE = "DELETE_REWARD_DISCIPLINE";
export const UPDATE_REWARD_DISCIPLINE = "UPDATE_REWARD_DISCIPLINE";
export const CREATE_FAMILY_RELATIONSHIP = "CREATE_FAMILY_RELATIONSHIP";
export const CREATE_FAMILY_RELATIONSHIP_STEP7 =
  "CREATE_FAMILY_RELATIONSHIP_STEP7";
export const CREATE_FAMILY_RELATIONSHIP_CON_STEP7 =
  "CREATE_FAMILY_RELATIONSHIP_CON_STEP7";
export const UPDATE_FAMILY_RELATIONSHIP_STEP7 =
  "UPDATE_FAMILY_RELATIONSHIP_STEP7";
export const UPDATE_FAMILY_RELATIONSHIP_CON_STEP7 =
  "UPDATE_FAMILY_RELATIONSHIP_CON_STEP7";
export const UPDATE_FAMILY_RELATIONSHIP = "UPDATE_FAMILY_RELATIONSHIP";
export const GET_DEP_POS_TO_SEARCH = "GET_DEP_POS_TO_SEARCH";
export const SEARCH = "SEARCH";
export const GET_PROFILE_BY_USER_ID = "GET_PROFILE_BY_USER_ID";
export const GET_PROFILE_BY_TOKEN = "GET_PROFILE_BY_TOKEN";
export const UPDATE_PROFILE_ACTIVE = "UPDATE_PROFILE_ACTIVE";
export const GET_PERMISSION_LIST = "GET_PERMISSION_LIST";
export const CREATE_PERMISSION = "CREATE_PERMISSION";
export const UPDATE_PERMISSION = "UPDATE_PERMISSION";
export const DELETE_PERMISSION = "DELETE_PERMISSION";
export const GET_PERMISSION_POSITION = "GET_PERMISSION_POSITION";
export const GET_TABLE_MANAGEMENT = "GET_TABLE_MANAGEMENT";
export const SEARCH_DEPARTMENT = "SEARCH_DEPARTMENT";
export const SEARCH_POSITION = "SEARCH_POSITION";
export const GET_POS_LIST = "GET_POS_LIST";
export const DELETE_RESOURCE = "DELETE_RESOURCE";
export const DELETE_PERMISSION_POS = "DELETE_PERMISSION_POS";
export const POST_PERMISSION_POS = "POST_PERMISSION_POS";
export const DELETE_PERMISSION_DEP_POS = "DELETE_PERMISSION_DEP_POS";
export const POST_PERMISSION_DEP_POS = "POST_PERMISSION_DEP_POS";
export const GET_PERMISSION_DEP_POS = "GET_PERMISSION_DEP_POS";
export const GET_PERMISSION_DEP_POS_LIST = "GET_PERMISSION_DEP_POS_LIST";
export const GET_PERMISSION_POS_LIST = "GET_PERMISSION_POS_LIST";
export const GET_PERMISSION_OF_USER = "GET_PERMISSION_OF_USER";
export const UPLOAD_PDF_STEP7 = "UPLOAD_PDF_STEP7";
