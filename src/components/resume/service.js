import ajaxService from '@/common/util/ajaxService';
import CONFIG from '@/common/ajaxConfig';

const post = ajaxService.post;
const resumeService = {
    saveResume(params) {
        return post(CONFIG.RESUME.SAVE_RESUME, params);
    },
    getTargetResume(params) {
        return post(CONFIG.RESUME.GET_TARGET_RESUME, params);
    }
};

export default resumeService;
