// Import modules separately to reduce bundle size

import {
    subYears, parseISO, setDay, isAfter, getMonth, getDay, format, addDays,
} from 'date-fns';
import { cs } from 'date-fns/locale';

const DATE_FORMAT = 'yyyy-MM-dd';

export type Block = {
    date: string;
    info?: {
        date: string;
        count: number;
        data: any
    };
};

interface MonthLabel {
    x: number;
    label: string;
}

export interface GraphData {
    blocks: Array<Array<Block>>;
    monthLabels: Array<MonthLabel>;
}

export interface ApiResult {
    [date: string]: {
        [profile: string]: number,
        sum: number,
    }
}

function getContributionsForDate(data: ApiResult, date: string) {
    return {

        count: data[date]?.sum || 0,
        date,
        data: data[date] || {},

    };
}

function getBlocksForYear(data: ApiResult) {
    const now = new Date();
    const firstDate = subYears(now, 1);
    const lastDate = now;

    let weekStart = firstDate;

    // The week starts on Sunday - add days to get to next sunday if neccessary
    if (getDay(firstDate) !== 0) {
        weekStart = addDays(firstDate, getDay(firstDate));
    }

    // Fetch graph data for first row (Sundays)
    const firstRowDates = [];
    while (weekStart <= lastDate) {
        const date = format(weekStart, DATE_FORMAT);

        firstRowDates.push({
            date,
            info: getContributionsForDate(data, date),
        });

        weekStart = setDay(weekStart, 7);
    }

    // Add the remainig days per week (column for column)
    return firstRowDates.map((dateObj) => {
        const dates = [];
        for (let i = 0; i <= 6; i += 1) {
            const date = format(setDay(parseISO(dateObj.date), i), DATE_FORMAT);

            if (isAfter(parseISO(date), lastDate)) {
                break;
            }

            dates.push({
                date,
                info: getContributionsForDate(data, date),
            });
        }

        return dates;
    });
}

function getMonthLabels(blocks: GraphData['blocks']): Array<MonthLabel> {
    const weeks = blocks.slice(0, blocks.length - 1);
    let previousMonth = 0; // January

    return weeks.reduce<Array<MonthLabel>>((labels, week, x) => {
        const firstWeekDay = parseISO(week[0].date);
        const month = getMonth(firstWeekDay) + 1;
        const monthChanged = month !== previousMonth;
        const firstMonthIsDecember = x === 0 && month === 12;

        if (monthChanged && !firstMonthIsDecember) {
            labels.push({
                x,
                label: format(firstWeekDay, 'MMM', {
                    locale: cs,
                }),
            });
            previousMonth = month;
        }

        return labels;
    }, []);
}

export function getGraphDataForYear(data: ApiResult): GraphData[] {
    const blocks = getBlocksForYear(data);
    const monthLabels = getMonthLabels(blocks);

    return [
        {
            blocks,
            monthLabels,
        },
    ];
}
