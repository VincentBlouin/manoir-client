import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

const DateUtil = {};
DateUtil.fromNow = function (date) {
    console.log(fr);
    return format(date, 'dd MMMM yyyy', {
        locale:fr
    });
};
export default DateUtil;