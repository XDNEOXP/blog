import React, { useState, useEffect } from 'react';
import SkeletonComponent from '../Skeleton/Skeleton';
import ProjectItem from '../ProjectItem/ProjectItem';
import './Projects.css';

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const responesData = await fetch('https://run.mocky.io/v3/8b940479-cdcc-4492-ad4b-1eb33433efbf');
    const getData = await responesData.json();
    setData(getData);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
    return () => {
      loadData();
    };
  }, []);

  return (
    <div className="content-box__projects">
      {loading ? (
        <SkeletonComponent loading />
      ) : ''}
      {data.map((item) => (
        <ProjectItem data={item} key={`project-${item.id}`} />
      ))}
    </div>
  );
};

export default Projects;
