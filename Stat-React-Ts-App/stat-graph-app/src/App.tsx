import LineChart from "./Graphs/LineChart";
import PieChart from "./Graphs/PieChart";
import Pyramid from "./Graphs/PyramidChart";
import StackedChart from "./Graphs/StackedChart";

import {
  DashboardLayoutComponent,
  PanelsDirective,
  PanelDirective,
} from "@syncfusion/ej2-react-layouts";
import "/node_modules/@syncfusion/ej2/material.css";

import './App.css';

const WebDashboard = () => {
  const onCreate = () => {
    // logic
};

  const onPanelResize = () => {
    // logic
  };

  return (
    <DashboardLayoutComponent
      created={onCreate}
      columns={6}
      id="predefine_dashboard"
      cellSpacing={[5, 5]}
      resizeStop={onPanelResize}
      allowResizing={true}
      allowDragging={true}>

      <PanelsDirective>
        <PanelDirective header="" content={LineChart} sizeX={3} sizeY={1} row={0} col={0}></PanelDirective>
        <PanelDirective header="" content={StackedChart} sizeX={3} sizeY={1} row={0} col={3}></PanelDirective>
        <PanelDirective header="" content={Pyramid} sizeX={3} sizeY={2} row={1} col={0}></PanelDirective>
        <PanelDirective header="" content={PieChart} sizeX={3} sizeY={2} row={1} col={3}></PanelDirective>
      </PanelsDirective>


    </DashboardLayoutComponent>
  );
};

export default WebDashboard;
