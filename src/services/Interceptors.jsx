import NProgress from 'nprogress';
import instance from '../services/axiosInstance';
import useAlert from '../hooks/useAlert';
import { useUserContext } from '../contexts/userContexts';

const Interceptors = ({ component }) => {
  const { isLoggedIn, userData, logoutUser } = useUserContext();
  const { toast } = useAlert();

  instance.interceptors.request.use((config) => {
    NProgress.start();
    if (isLoggedIn) {
      config.headers.Authorization = `Bearer ${userData.token}`;
    }

    return config;
  });

  // Calls when a response was gotten from the API (successResponse || error)
  instance.interceptors.response.use(
    (response) => {
      NProgress.done();
      return response;
    },
    (error) => {
      NProgress.done();

      if (error.response?.status === 'ECONNABORTED') {
        toast({ type: 'error', message: error.response.data.message });
        return error;
      }

      if (error.response?.status === 401 && error.config) {
        logoutUser();
      }

      if (error.response?.status === 500) {
        error.response.data.message = 'Something went wrong, Please try again!';
        toast({ type: 'error', message: error.response.data.message });
      }
      return Promise.reject(error);
    }
  );

  return component;
};

export default Interceptors;
