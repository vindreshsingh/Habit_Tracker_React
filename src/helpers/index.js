// contains all utility methods...
import { notification } from 'antd';
//display notification
export const openNotify = (type, desc, message) => {
  notification[type]({
    message: desc,
    description: message,
  });
};

//alignment of form input box and add button
export const layout = {
  wrapperCol: {
    span: 18,
    offset: 2,
  },
};
export const tailLayout = {
  wrapperCol: {
    offset: 9,
    span: 4,
  },
};
