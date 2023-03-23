import * as React from "react";
import { Project } from "../interfaces/project";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../store/db";
import { IndexableType } from "dexie";
import { delay, MOCK_DELAY } from "../utils/delay";

type PC = {
  loading: boolean;
  project?: Project;
  createProject: (project: Project) => Promise<IndexableType>;
  updateProject: (project: Project) => Promise<IndexableType>;
  deleteProject: (project: Project) => Promise<void>;
};

const createProject = async (project: Project): Promise<IndexableType> => {
  delay(MOCK_DELAY);
  return await db.projects.add({
    id: project.id,
    name: project.name,
    projectOwner: project.projectOwner,
    created: new Date(),
  });
};

const updateProject = async (project: Project): Promise<IndexableType> => {
  delay(MOCK_DELAY);
  return await db.projects.update(project.id, {
    name: project.name,
  });
};

const deleteProject = async (project: Project): Promise<void> => {
  delay(MOCK_DELAY);
  await db.projects.delete(project.id);
};

export const ProjectContext = React.createContext<PC>({
  loading: true,
  project: undefined,
  createProject,
  updateProject,
  deleteProject,
});

type ProjectProviderProps = {
  id: number;
  children: React.ReactNode;
};

const ProjectProvider = (props: ProjectProviderProps) => {
  delay(MOCK_DELAY);
  const project = useLiveQuery(async () => {
    return await db.projects.get(props.id);
  }, [props.id]);

  const loading = !!project;
  return (
    <ProjectContext.Provider
      value={{
        loading,
        project,
        createProject,
        updateProject,
        deleteProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

const useProject = () => React.useContext(ProjectContext);

export { ProjectProvider, useProject };
