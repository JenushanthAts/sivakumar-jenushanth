import React from "react";
import Card from "../card/Card";

const Skills = () => {
  return (
    <div>
      <h1 className="text-center mt-3">Skills</h1>
      <div className="grid-container">
        <div className="grid-row">
          <div className="col-xs-12 col-md-6">
            <Card
              title="Frond End"
              data={[
                "HTML5",
                "CSS3",
                "REACT",
                "NEXT",
                "REDUX",
                "SASS",
                "BOOTSTRAP",
                "TAILWIND CSS",
                "MATERIAL UI",
              ]}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <Card
              title="Back End"
              data={["NODE", "NEST", "EXPRESS", "MONGODB", "MYSQL", "DYNAMODB"]}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <Card
              title="Programming Languages"
              data={["TYPESCRIPT", "JAVASCRIPT", "PYTHON"]}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <Card
              title="Tools"
              data={[
                "POSTMAN",
                "BITBUCKET",
                "GITLAB",
                "GITHUB",
                "GIT",
                "DIALOGFLOW",
                "SOCKET.IO",
                "LINUX",
                "WINDOWS",
                "VS CODE",
                "AWS",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
