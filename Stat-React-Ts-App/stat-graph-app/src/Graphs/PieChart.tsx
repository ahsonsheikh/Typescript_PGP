import * as React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

// convert to object later using interface
export let pieData = [
  { x: "Meat", y: 37, text: "37%" },
  { x: "Vegetables", y: 17, text: "17%" },
  { x: "Bread", y: 19, text: "19%" },
  { x: "Eggs", y: 4, text: "4%" },
  { x: "Juices", y: 11, text: "11%" },
  { x: "Coffee", y: 12, text: "12%" },
];

const PieChart = () => {
  const pie = React.useRef();

  return (
    <div className="control-pane">
      <div className="control-section row">
        <div className="col">

          <AccumulationChartComponent
            id="pie-chart"
            ref={pie.current}
            title="Weekly Food Consumption"
            legendSettings={{ visible: true }}
            enableSmartLabels={false}
            enableAnimation={true}
            center={{ x: "50%", y: "50%" }}
            tooltip={{ enable: true, format: "${point.x} : <b>${point.y}%</b>" }}
          >

            <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]} />

            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                dataSource={pieData}
                name="Food"
                xName="x"
                yName="y"
                explode={true}
                explodeOffset="15%"
                explodeIndex={0}
                dataLabel={{
                  visible: true,
                  position: "Outside",
                  name: "text",
                  font: {
                    fontWeight: "600",
                  },
                }}
                radius="60%"
              ></AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>

          </AccumulationChartComponent>

        </div>
      </div>
    </div>
  );
};

export default PieChart;
