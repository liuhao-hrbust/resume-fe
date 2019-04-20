import ajaxService from '@/common/util/ajaxService';
import CONFIG from '@/common/ajaxConfig';

const post = ajaxService.post;
const Service = {
    register(params) {
        return post(CONFIG.USER.REGISTER, params);
    },
    login(params) {
        return post(CONFIG.USER.LOGIN, params);
    }
};

export default Service;
