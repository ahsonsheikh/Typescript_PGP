import * as React from "react";

import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

// convert to object later using interface
export let pyramidData = [
    { x: "Meat", y: 37, text: "37%" },
    { x: "Vegetables", y: 17, text: "17%" },
    { x: "Bread", y: 19, text: "19%" },
    { x: "Eggs", y: 4, text: "4%" },
    { x: "Juices", y: 11, text: "11%" },
    { x: "Coffee", y: 12, text: "12%" },
  ];

const Pyramid = () => {
  const pyramid = React.useRef();

  return (
    <div className="control-pane">
      <div className="control-section row">
        <div className="col">
          <AccumulationChartComponent
            id="pyramid-chart"
            ref={pyramid.current}
            title="Weekly Food Consumption"
            legendSettings={{
              visible: true,
            }}
            tooltip={{ enable: true, format: "${point.x} : <b>${point.y}</b>" }}
            width="100%"
            height="80%"
          >
            <Inject
              services={[
                AccumulationDataLabel,
                AccumulationTooltip,
                PyramidSeries,
                AccumulationLegend,
                AccumulationSelection,
              ]}
            />
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                name="Food"
                dataSource={pyramidData}
                xName="x"
                yName="y"
                type="Pyramid"
                width="45%"
                height="90%"
                neckWidth="15%"
                gapRatio={0.07}
                explode={true}
                // emptyPointSettings={{ mode: "Drop", fill: "red" }}
                dataLabel={{
                  visible: true,
                  position: "Inside",
                  name: "text",
                }}
              ></AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
        </div>
      </div>
    </div>
  );
};

export default Pyramid;
