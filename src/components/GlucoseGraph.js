import React from 'react';
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryScatter,
  VictoryCursorContainer,
} from 'victory-native';
import Svg from 'react-native-svg';

const GlucoseGraph = ({ data }) => (
  <Svg>
    <VictoryChart
      height={310}
      padding={{ top: 20, left: 30, right: 60, bottom: 20 }}
      domainPadding={{ y: 27 }}
      containerComponent={<VictoryVoronoiContainer />}
      standalone={true}
      // containerComponent={
      //   <VictoryCursorContainer
      //     cursorDimension='x'
      //     cursorLabel={({ datum }) => `${Math.round(datum.y, 2)}`}
      //     defaultCursorValue={{ x: 1800, y: 3.5 }}
      //   />
      // }
    >
      <VictoryAxis
        orientation='left'
        dependentAxis
        style={{
          tickLabels: {
            fontSize: 15,
            fill: '#FFFFFF',
          },
          axis: {
            stroke: 'transparent',
          },
        }}
      />
      <VictoryAxis
        style={{
          tickLabels: {
            fontSize: 10,
            fill: '#FFFFFF',
          },
          axis: {
            stroke: 'transparent',
          },
        }}
        tickValues={[1200, 1300, 1400, 1500, 1600, 1700, 1800]}
        // tickFormat={time => `${time}`}
      />
      <VictoryLine
        style={{
          data: { stroke: '#FFFFFF', strokeWidth: 2, opacity: 0.3 },
        }}
        data={data}
        y={() => 4.0}
      />
      <VictoryLine
        style={{
          data: { stroke: '#FFFFFF', strokeWidth: 2, opacity: 0.3 },
        }}
        data={data}
        y={() => 7.0}
      />
      <VictoryLine
        style={{
          data: {
            stroke: '#7CD225',
            strokeWidth: 5,
          },
        }}
        interpolation='monotoneX'
        data={data}
      />
      <VictoryScatter
        size={({ active }) => (active ? 9 : 1)}
        data={data}
        symbol='circle'
        style={{
          data: {
            fill: '#FFFFFF',
            stroke: '#FF3A79',
            strokeWidth: 7,
          },
        }}
        labels={({ datum }) => datum.y}
        labelComponent={
          <VictoryTooltip
            style={{ fontSize: 15, color: 'red' }}
            renderInPortal={false}
          />
        }
      />
    </VictoryChart>
  </Svg>
);

export default GlucoseGraph;
