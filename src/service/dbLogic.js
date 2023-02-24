//rafce ; arrow function export default 단축키
import axios from "axios";

// 리액트와 서블릿을 톰캣 서버로 연동
export const jsonDeptList = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const reaponse = axios({
        method: "get",
        url: process.env.REACT_APP_DEV_JSP_IP + "dept/jsonDeptList.st1",
        parmas: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
