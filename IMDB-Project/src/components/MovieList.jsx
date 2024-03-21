// eslint-disable-next-line no-unused-vars
import { Component } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export default function MovieList() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}



// {
//     "page": 1,
//     "results": [
//       {
//         "adult": false,
//         "backdrop_path": "/gMJngTNfaqCSCqGD4y8lVMZXKDn.jpg",
//         "genre_ids": [
//           28,
//           12,
//           878
//         ],
//         "id": 640146,
//         "original_language": "en",
//         "original_title": "Ant-Man and the Wasp: Quantumania",
//         "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
//         "popularity": 8567.865,
//         "poster_path": "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
//         "release_date": "2023-02-15",
//         "title": "Ant-Man and the Wasp: Quantumania",
//         "video": false,
//         "vote_average": 6.5,
//         "vote_count": 1886
//     }
      