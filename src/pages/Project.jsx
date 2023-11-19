import ProjectList from "../components/projects/ProjectList";
import Navigator from "../components/Navigator";

const Project = () => {
  return (
    <>
      <Navigator path={"Projects"}/>
      <ProjectList />
    </>
  );
};

export default Project;