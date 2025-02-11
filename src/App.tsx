import './index.css';
import { useState } from 'react';
import { artistList } from './data.tsx';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < artistList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(artistList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let artist = artistList[index];

  return (
    <div className="gallery-container">
      <h1>ERNZ DANIELLE MANALO</h1>
      <div className="buttons">
        <button onClick={handleBackClick}>Back</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <h2><b>{artist.name}</b></h2>
      <h3>{index + 1} of {artistList.length}</h3>
      <button className='showm' onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p className="artist-description">{artist.description}</p>}
      <img className="artist-image" src={artist.url} alt={artist.alt} />
    </div>
  );
}