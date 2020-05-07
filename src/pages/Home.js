import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import axios from "axios";

const Hero = styled.div`
  height: 100vh;
  background-image: url("/assets/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeroDetails = styled.div`
  font-family: "Armata";
  padding: 50px;
  h2 {
    font-size: 2em;
  }
  p {
    font-size: 1.5em;
  }
`;

const Section = styled.section`
  margin: 100px 0;
  h2 {
    margin: 50px;
    font-size: 2.5em;
  }
`;

const Stories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px;
`;

const Story = styled.div`
  width: 400px;
  margin-bottom: 50px;
`;

const HomePage = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState();
  const url = process.env.REACT_APP_API_URL + "/stories";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      if (response) {
        setStories(response.data.stories);
        console.log(response.data.stories);
      } else {
        setError("Error when getting stories");
      }
    };
    fetchData();
  }, [url]);

  return (
    <div>
      <Hero>
        <Header></Header>
        <HeroDetails>
          <h2>Billy Childish</h2>
          <p>
            remember all the / high and exalted things remember all the low /
            and broken things
          </p>
          <p>New York, W 22nd Street</p>
          <p>January 23 - March 21, 2020</p>
        </HeroDetails>
      </Hero>
      <Section>
        <h2>Stories</h2>
        <Stories>
          {stories.length > 0 ? (
            stories.map((story, index) => {
              return (
                <Story key={index}>
                  <img
                    src="/assets/story.jpg"
                    alt="Home at The Peninsula New York"
                  />
                  <h3>Home at The Peninsula New York</h3>
                  <p>Through March 2020</p>
                  <p>
                    Lehmann Maupin presents an exhibition featuring Ashley
                    Bickerton, Heidi Bucher, Do Ho Suh, Catherine Opie, and
                    Angel Otero that showcases works addressing themes of
                    identity, heritage, and community.
                  </p>
                </Story>
              );
            })
          ) : (
            <div>No Stories Found</div>
          )}
        </Stories>
      </Section>
    </div>
  );
};

export default HomePage;
