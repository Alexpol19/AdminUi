import React from "react";
//

const options = {
  elementType: ["line", "area", "bar", "bubble"],
  primaryAxisType: ["linear", "time", "log", "ordinal"],
  secondaryAxisType: ["linear", "time", "log", "ordinal"],
  primaryAxisPosition: ["top", "left", "right", "bottom"],
  secondaryAxisPosition: ["top", "left", "right", "bottom"],
  secondaryAxisStack: [true, false],
  primaryAxisShow: [true, false],
  secondaryAxisShow: [true, false],
  tooltipAnchor: [
    "closest",
    "top",
    "bottom",
    "left",
    "right",
    "center",
    "gridTop",
    "gridBottom",
    "gridLeft",
    "gridRight",
    "gridCenter",
    "pointer"
  ],
  tooltipAlign: [
    "auto",
    "top",
    "bottom",
    "left",
    "right",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "center"
  ],
  snapCursor: [true, false]
};

const pageLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

const optionKeys = Object.keys(options);

export default function useChartConfig({
  series,
  useR,
  show = [],
  count = 0,
  resizable = false,
  canRandomize = false,
  dataType = "ordinal",
  elementType = "line",
  primaryAxisType = "linear",
  secondaryAxisType = "linear",
  primaryAxisPosition = "bottom",
  secondaryAxisPosition = "left",
  primaryAxisStack = true,
  secondaryAxisStack = true,
  primaryAxisShow = true,
  secondaryAxisShow = true,
  tooltipAnchor = "closest",
  tooltipAlign = "auto",
  snapCursor = true,
  datums = 10
}) {
  const [state, setState] = React.useState({
    count,
    resizable,
    canRandomize,
    dataType,
    elementType,
    primaryAxisType,
    secondaryAxisType,
    primaryAxisPosition,
    secondaryAxisPosition,
    primaryAxisStack,
    secondaryAxisStack,
    primaryAxisShow,
    secondaryAxisShow,
    tooltipAnchor,
    tooltipAlign,
    snapCursor,
    datums,
    data: makeDataFrom(dataType, series, useR, datums)
  });

  React.useEffect(() => {
    setState(old => ({
      ...old,
      data: makeDataFrom(dataType, series, useR, datums)
    }));
  }, [count, dataType, datums, series, useR]);

  const randomizeData = () =>
    setState(old => ({
      ...old,
      data: makeDataFrom(dataType, series, useR, datums)
    }));

  const Options = optionKeys
    .filter(option => show.indexOf(option) > -1)
    .map(option => (
      <div key={option}>
        {option}: &nbsp;
        <select
          value={state[option]}
          onChange={({ target: { value } }) =>
            setState(old => ({
              ...old,
              [option]:
                typeof options[option][0] === "boolean"
                  ? value === "true"
                  : value
            }))
          }
        >
          {options[option].map(d => (
            <option value={d} key={d.toString()}>
              {d.toString()}
            </option>
          ))}
        </select>
        <br />
      </div>
    ));

  return {
    ...state,
    randomizeData,
    Options
  };
}

function makeDataFrom(dataType, series, useR, datums) {
  return [
    ...new Array(series || Math.max(Math.round(Math.random() * 5), 1))
  ].map((d, i) => makeSeries(i, dataType, useR, datums));
}

function makeSeries(i, dataType, useR, datums) {
  const start = 0;
  const length = datums;
  const min = 0;
  const max = 5000;
  const nullChance = 0;
  return {
    label: `Nr. utilizatori`,
    data: [...new Array(length)].map((_, i) => {
      let x = start + i;
      if (dataType === "ordinal") {
        x = `Page ${pageLetters[x]}`;
      }
      const y =
        Math.random() < nullChance
          ? null
          : min + Math.round(Math.random() * (max - min));
      return {
        primary: x,
        secondary: y,
      };
    })
  };
}
