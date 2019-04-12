import ajaxService from '@/common/util/ajaxService';
import CONFIG from '@/common/ajaxConfig';

const post = ajaxService.post;
const Service = {
    register(params) {
        return post(CONFIG.TEST.REGISTER, params);
    }
};

export default Service;
