import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {EventBus} from "@/_helpers/EventBus";

let axt = axios.create({});

axt.defaults.onDownloadProgress = e => {
    EventBus.$emit('progressUpdate', (Math.floor(e.loaded * 1.0) / e.total));
};
axt.interceptors.response.use(value => {
    EventBus.$emit('progressFinish');
    return value;
});

export default axt;
