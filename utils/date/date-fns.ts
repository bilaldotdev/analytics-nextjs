import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

/* <<--------------------------------------------------------->> */
interface cur_month_days_params_interface {
  includeEndOfWeek?: boolean;
  includeStartOfWeek?: boolean;
  targetMonth: number | Date;
}
/* <<--------------------------------------------------------->> */
export const getDaysOfMonth = (
  params: cur_month_days_params_interface,
): Array<any> => {
  let start_of_month = startOfMonth(params.targetMonth);
  let end_of_month = endOfMonth(params.targetMonth);
  if (params.includeEndOfWeek) {
    return eachDayOfInterval({
      start: start_of_month,
      end: endOfWeek(end_of_month),
    });
  }
  if (params.includeStartOfWeek) {
    return eachDayOfInterval({
      start: startOfWeek(start_of_month),
      end: endOfWeek(end_of_month),
    });
  }
  if (params.includeStartOfWeek && params.includeEndOfWeek) {
    return eachDayOfInterval({
      start: startOfWeek(start_of_month),
      end: endOfWeek(end_of_month),
    });
  }
  return eachDayOfInterval({
    start: start_of_month,
    end: end_of_month,
  });
};
