import { axiosClient } from "@common/resources/api";

class InterceptorHandler {
  private tokenInterceptorId: number;
 
  setTokenInterceptor = () => {
    this.tokenInterceptorId = axiosClient.interceptors.request.use(config => {
      const token = localStorage.getItem("@Token");
      if(config.headers) config.headers.authorization = `Bearer ${token}`;
      return config;
    });
  };
 
  removeTokenInterceptor = () => {
    axiosClient.interceptors.request.eject(this.tokenInterceptorId);
  };
}
 
export const interceptorHandler = new InterceptorHandler();