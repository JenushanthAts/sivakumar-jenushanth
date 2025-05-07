import Card from "../card/Card";

const Skills = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-3">
        Professional Skills & Expertise
      </h1>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend Development */}
        <div className="relative rounded-3xl overflow-hidden p-8 bg-white dark:bg-gray-900 hover:shadow-2xl transition-shadow duration-300 border-gray-100 dark:border-gray-700 h-full">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Frontend Development
          </h3>
          <ul className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            <li>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-sm text-center font-medium text-gray-700 dark:text-gray-300">
                  React
                </span>
              </div>
            </li>
            {/* Add other frontend skills here like TypeScript, Next.js, etc. */}
          </ul>
        </div>

        {/* Backend Development */}
        <div className="relative rounded-3xl overflow-hidden p-8 bg-white dark:bg-gray-900 hover:shadow-2xl transition-shadow duration-300 border-gray-100 dark:border-gray-700 h-full">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Backend Development
          </h3>
          <ul className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {/* Backend skills go here */}
          </ul>
        </div>

        {/* Database */}
        <div className="relative rounded-3xl overflow-hidden p-8 bg-white dark:bg-gray-900 hover:shadow-2xl transition-shadow duration-300 border-gray-100 dark:border-gray-700 h-full">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Database
          </h3>
          <ul className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {/* Database icons like MySQL, MongoDB */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
