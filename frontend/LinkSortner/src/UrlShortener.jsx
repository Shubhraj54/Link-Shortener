import React, { useState } from 'react';
import axios from 'axios';

const UrlShortener = () => {
  const [link, setLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortenedLink('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:4000/url/', { link });
      console.log(response);
      
      if (response.data?.shortid) {
        setShortenedLink(response.data.shortid);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (err) {
      console.error("Error shortening link:", err);
      setError(err.response?.data?.message || "Failed to shorten the link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter your URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
          style={{ padding: '10px', width: '300px' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '10px' }} disabled={loading}>
          {loading ? 'Shortening...' : 'Shorten'}
        </button>
      </form>
      {shortenedLink && (
        <div style={{ marginTop: '20px' }}>
          <h3>Shortened Link:</h3>
          <p><a href={shortenedLink} target="_blank" rel="noopener noreferrer">{shortenedLink}</a></p>
        </div>
      )}
      {error && (
        <div style={{ marginTop: '20px', color: 'red' }}>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
