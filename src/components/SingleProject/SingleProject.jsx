import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MdBookmarkAdd, MdBookmarkRemove } from 'react-icons/md';
import ButtonBookmark from 'react-bootstrap/Button';
import Image from '../Image/Image';
import BookmarkContext from '../../contexts/BookmarkContext';

const SingleProject = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { bookmarks, dispatchBookmarks } = useContext(BookmarkContext);
  const added = bookmarks.includes(id);

  const loadData = async () => {
    const responesData = await fetch('https://run.mocky.io/v3/8e7ad3a2-9754-4d94-b398-f749d9e250b6');
    const getData = await responesData.json();
    setData(getData.find((item) => item.id === id));
  };
  const handelAdd = () => {
    if (added) {
      dispatchBookmarks({
        type: 'REMOVE_FROM_BOOKMARK',
        id: data.id,
      });
    } else {
      dispatchBookmarks({
        type: 'ADD_TO_BOOKMARK',
        id: data.id,
      });
    }
  };

  useEffect(() => {
    loadData();
  }, [id]);
  return (
    <div className="card p-5 mt-5 mb-5">
      <h5>{data.title}</h5>
      <Image imgSrc={data.image} imgAlt={data.title} imgClassName="w-100 mt-2" />
      <p className="blockquote mt-3">{data.description}</p>
      <div className="d-flex flex-row w-100 mt-3">
        <ButtonBookmark onClick={handelAdd} className="w-25 mx-auto" variant="outline-dark" size="lg">{added ? <MdBookmarkRemove /> : <MdBookmarkAdd />}</ButtonBookmark>
      </div>
    </div>
  );
};

export default SingleProject;
