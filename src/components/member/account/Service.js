import ajaxService from '@/common/util/ajaxService';
import CONFIG from '@/common/ajaxConfig';

const post = ajaxService.post;
const resumeService = {
    changePassword(params) {
        return post(CONFIG.USER.CHANGE_ACCOUNT, params);
    }
};

export default resumeService;
