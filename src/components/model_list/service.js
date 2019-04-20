import ajaxService from '@/common/util/ajaxService';
import CONFIG from '@/common/ajaxConfig';

const post = ajaxService.post;
const listService = {
    getModelList(params) {
        return post(CONFIG.MODEL.MODEL_LIST, params);
    }
};

export default listService;
