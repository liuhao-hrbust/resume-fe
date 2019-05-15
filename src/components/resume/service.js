import ajaxService from '@/common/util/ajaxService';
import CONFIG from '@/common/ajaxConfig';

const post = ajaxService.post;
const resumeService = {
    saveResume(params) {
        return post(CONFIG.RESUME.SAVE_RESUME, params);
    },
    getResumeInfo(params) {
        return post(CONFIG.RESUME.GET_RESUME_INFO, params);
    }
};

export default resumeService;
