import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import SkeletonComponent from '../Skeleton/Skeleton';
import ProjectItem from '../ProjectItem/ProjectItem';
import './Projects.css';

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const loadData = async () => {
    if (!cancelled) {
      setLoading(true);
      const responesData = await fetch('https://run.mocky.io/v3/5336ddc8-72b1-4126-8fd8-51057e02753a');
      const getData = await responesData.json();
      setData(getData);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    return () => {
      setCancelled(true);
    };
  }, []);

  return (
    <div className="content-box__projects">
      {loading ? (
        <SkeletonComponent loading />
      ) : ''}
      <Row xs={1} md={3} className="g-4 mt-5 mb-5">
        {data.map((item) => (
          <ProjectItem data={item} key={`project-${item.id}`} />
        ))}
      </Row>
    </div>
  );
};

export default Projects;
