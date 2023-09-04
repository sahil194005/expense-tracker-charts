
import { ResponsiveLine } from '@nivo/line'

const MyResponsiveLine = ({data}) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 20, bottom: 100, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'set2' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaBlendMode="darken"
        areaBaselineValue={10}
        areaOpacity={0.15}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 52,
                translateY: 91,
                itemsSpacing: 11,
                itemDirection: 'left-to-right',
                itemWidth: 130,
                itemHeight: 64,
                itemOpacity: 0.75,
                symbolSize: 18,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        motionConfig="wobbly"
    />
)

export default MyResponsiveLine