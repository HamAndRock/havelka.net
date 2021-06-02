import React, { useEffect, useState } from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import ReactTooltip from 'react-tooltip';
import {
    ApiResult, Block, getGraphDataForYear, GraphData,
} from '~/components/github/services/contributions';

export interface PureData {
    years: {
        [key: string]: number,
        lastYear: number
    },
    contributions: {
        date: string,
        count: number,
        level: number,
    }[]
}

export type Props = {
    blockMargin?: number;
    blockSize?: number;
    dateFormat?: string;
    fontSize?: number;
    fullYear?: boolean;
    data: {
        data: ApiResult,
        highest: number,
        sum: number
    };

    years?: Array<number>;
};

const GitHubCalendar = ({
    blockMargin = 2,
    blockSize = 12,
    dateFormat = 'MMM d, yyyy',
    fontSize = 14,
    data,
} : Props) => {
    const [graphs, setGraphData] = useState<GraphData[] | null>(null);

    // Fetch data on mount
    useEffect(() => {
        setGraphData(getGraphDataForYear(data.data));
    }, [data]); // eslint-disable-line

    // Refetch if relevant props change

    function getDimensions() {
        const textHeight = Math.round(fontSize * 1.5);

        // Since weeks start on Sunday, there is a good chance that the graph starts
        // in the week before January 1st. Therefore, the calendar shows 53 weeks.
        const width = (53 + 1) * (blockSize + blockMargin) - blockMargin;
        const height = textHeight + (blockSize + blockMargin) * 7 - blockMargin;

        return { width, height };
    }

    function getTooltipMessage(day: Required<Block>) {
        const date = parseISO(day.date);

        return `<div>
            <strong>${day.info.count} contributions</strong> on ${format(date, dateFormat)}

        </div>`;
    }

    function renderMonthLabels(monthLabels: GraphData['monthLabels']) {
        const style = {
            fill: '#000000',
            fontSize,
        };

        // Remove the first month label if there's not enough space to the next one
        // (end of previous month)
        if (monthLabels[1].x - monthLabels[0].x <= 2) {
            monthLabels.shift();
        }

        return monthLabels.map((month) => (
            <text x={(blockSize + blockMargin) * month.x} y={fontSize} key={month.x} style={style}>
                {month.label}
            </text>
        ));
    }

    function renderBlocks(blocks: GraphData['blocks']) {
        const textHeight = Math.round(fontSize * 1.5);

        return blocks
            .map((week) => week.map((day, y) => {
                const color = Math.round(((day.info?.count || 0) / data.highest) * 100) / 100;
                return (
                    <rect
                        x="0"
                        y={textHeight + (blockSize + blockMargin) * y}
                        width={blockSize}
                        height={blockSize}
                        fill={color > 0 ? `rgba(0,71,255,${color + 0.15})` : 'rgba(0,0,0,0.03)'}
                        data-tip={day.info ? getTooltipMessage(day as Required<Block>) : null}
                        key={day.date}
                    />
                );
            }))
            .map((week, x) => (
                // eslint-disable-next-line react/no-array-index-key
                <g key={x} transform={`translate(${(blockSize + blockMargin) * x}, 0)`}>
                    {week}
                </g>
            ));
    }

    const { width, height } = getDimensions();

    return (
        <article>
            {graphs?.map((graph) => {
                const {
                    blocks, monthLabels,
                } = graph;

                return (
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={width}
                            height={height}
                            viewBox={`0 0 ${width} ${height}`}
                            style={{ backgroundColor: '#fff' }}
                        >
                            {renderMonthLabels(monthLabels)}
                            {renderBlocks(blocks)}
                        </svg>
                        <ReactTooltip delayShow={50} html />
                    </div>
                );
            })}
        </article>
    );
};

export default GitHubCalendar;
