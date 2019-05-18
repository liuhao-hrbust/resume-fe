import ajaxService from '@/common/util/ajaxService';
import CONFIG from '@/common/ajaxConfig';

const post = ajaxService.post;
const listService = {
    getModelList(params) {
        return post(CONFIG.MODEL.MODEL_LIST, params);
    },
    getResumeList(params) {
        return post(CONFIG.RESUME.GET_RESUME_LIST, params);
    },
    createNewResumeId(params) {
        return post(CONFIG.RESUME.CREATE_NEW_RESUME_ID, params);
    }
};

export default listService;
