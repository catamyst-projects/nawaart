import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Header from "../components/Header";
import { getToken } from "../utils/token";

const ArtistsGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ArtistCard = styled.div`
  width: 400px;
  height: 400px;
  margin: 50px;
  h3 {
    text-align: center;
  }
`;

const ArtistImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

const LinkButton = styled(Link)`
  background-color: #333333;
  color: #ffffff;
  padding: 10px 32px;
  text-decoration: none;
`;

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState();
  const url = process.env.REACT_APP_API_URL + "/artists";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      if (response) {
        setArtists(response.data.artists);
      } else {
        setError("Error when getting artists");
      }
    };
    fetchData();
  }, [url]);

  return (
    <div>
      <Header></Header>
      {getToken() && <LinkButton to="/artists/add">Add New Artist</LinkButton>}

      {error && <span>{error}</span>}
      <ArtistsGallery>
        {artists.length > 0 ? (
          artists.map((artist, index) => {
            return (
              <ArtistCard key={index}>
                <Link to={`/artists/${artist.slug}`}>
                  <ArtistImage src={artist.photoUrl}></ArtistImage>
                </Link>
                <h3>{artist.name}</h3>
              </ArtistCard>
            );
          })
        ) : (
          <div>No artists found</div>
        )}
      </ArtistsGallery>
    </div>
  );
};

export default Artists;
