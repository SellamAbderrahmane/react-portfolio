import * as React from 'react';

const PortfolioContext = React.createContext({});

export const usePortfolio = () => React.useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [about, setAbout] = React.useState({});
  const [educations, setEducations] = React.useState([]);
  const [works, setWorks] = React.useState([]);
  const [skills, setSkills] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  const [references, setReferences] = React.useState([]);

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  React.useEffect(() => {
    const url = 'https://gitconnected.com/v1/portfolio/sellamabderrahmane';
    fetch(url)
      .then((res) => res.json())
      .then((rep) => {
        const { basics, education, skills, work, projects, references } = rep;
        setAbout(basics);
        setEducations(education);
        setSkills(skills);
        setWorks(work);
        setProjects(projects);
        setReferences(references);
      })
      .catch((error) => console.log(error));
  }, []);

  const state = {
    works,
    skills,
    about,
    educations,
    projects,
    references,
    openLink,
  };

  return (
    <PortfolioContext.Provider value={state}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
