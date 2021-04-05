/*
 * Copyright Vincent Blouin under the GPL License version 3
 */

import axios from 'axios'

const Service = {
    baseUrl: function () {
        // const apiPort = process.env.VUE_APP_API_PORT || '443';
        // return location.protocol + '//' + location.hostname + ':' + apiPort + '/api';
        return "https://manoir.community/wp-json/wp/v2/";
    },
    api: function () {
        const axiosInstance = axios.create({
            baseURL: Service.baseUrl(),
        });
        return axiosInstance;
    }
};
export default Service
