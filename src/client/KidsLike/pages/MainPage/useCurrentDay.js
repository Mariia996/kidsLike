import moment from 'moment';

const useCurrentDay = (idx) => {
    const now = new Date()
    const currentDayIndex = now.getDay() || 7;
    const currentWeek = Array(7).fill(0).map((_, index) => moment().add((index - currentDayIndex + 1), 'days'));
    return currentWeek[idx].format("dddd, DD-MM-YYYY");
}

export default useCurrentDay;

