import ajaxConfig from '@/common/util/ajaxService';
import CONFIG from '@/common/ajaxConfig';

const post = ajaxConfig.post;
const testService = {
    postTest(params) {
        return post(CONFIG.TEST.LOGIN, params);
    }
};

export default testService;
