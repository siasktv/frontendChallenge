import React from "react";
import { Tasks } from "../../../stories/pages/Dashboard/Tasks";

export interface TasksViewProps {}

const TasksView: React.FC<TasksViewProps> = () => {
  return <Tasks />;
};

export default TasksView;
