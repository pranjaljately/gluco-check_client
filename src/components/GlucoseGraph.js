import React from 'react';
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryScatter,
} from 'victory-native';
import Svg from 'react-native-svg';
import PropTypes from 'prop-types';

const GlucoseGraph = ({ readings }) => {
  const formatGraphData = readings => {
    const formattedData = readings.map(reading => ({
      x: new Date(reading.readingTime),
      y: reading.value,
    }));
    return formattedData;
  };

  const graphData = formatGraphData(readings);

  return (
    <Svg>
      <VictoryChart
        height={310}
        padding={{ top: 25, left: 33, right: 45, bottom: 20 }}
        domainPadding={{ y: 20 }}
        containerComponent={<VictoryVoronoiContainer />}
        standalone
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
            ticks: {
              stroke: '#FF3A79',
              strokeWidth: 3,
              size: 3,
            },
          }}
          // tickValues={[1200, 1300, 1400, 1500, 1600, 1700, 1800]}
          // domain={[1300, 1900]}
          scale={{ x: 'time' }}
          tickFormat={() => ''}
          // tickCount={6}
        />
        {graphData.length !== 0 && (
          <VictoryLine
            style={{
              data: { stroke: '#FFFFFF', strokeWidth: 2, opacity: 0.3 },
            }}
            data={graphData}
            // x='readingTime'
            y={() => 4.0}
          />
        )}

        {graphData.length !== 0 && (
          <VictoryLine
            style={{
              data: { stroke: '#FFFFFF', strokeWidth: 2, opacity: 0.3 },
            }}
            data={graphData}
            // x='readingTime'
            y={() => 7.0}
          />
        )}
        {graphData.length !== 0 && (
          <VictoryLine
            style={{
              data: {
                stroke: '#7CD225',
                strokeWidth: 4,
              },
            }}
            interpolation='monotoneX'
            data={graphData}
            // x='readingTime'
            // y='value'
            animate={{
              duration: 500,
              onLoad: { duration: 1000 },
            }}
          />
        )}
        {graphData.length !== 0 && (
          <VictoryScatter
            size={({ active }) => (active ? 9 : 2)}
            symbol='circle'
            style={{
              data: {
                fill: '#FFFFFF',
                stroke: '#FF3A79',
                strokeWidth: 7,
              },
            }}
            animate={{
              duration: 100,
              onLoad: { duration: 1000 },
            }}
            data={graphData}
            // x='readingTime'
            // y='value'
            labels={({ datum }) => datum.y.toFixed(1)}
            labelComponent={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <VictoryTooltip
                style={{ fontSize: 15, color: 'red' }}
                renderInPortal={false}
              />
            }
          />
        )}
      </VictoryChart>
    </Svg>
  );
};

GlucoseGraph.propTypes = {
  readings: PropTypes.array.isRequired,
};

export default GlucoseGraph;
