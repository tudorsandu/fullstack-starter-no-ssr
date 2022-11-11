import * as React from "react";
import { useQuery } from "react-query";

interface IFetchDemoProps {}

const FetchDemo: React.FunctionComponent<IFetchDemoProps> = () => {
  const { isLoading, error, data, isFetching } = useQuery(["repoData"], () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query")
      .then((res) => res.json())
      .then((data) => data)
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred</p>;

  return (
    <div className="ml-10">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
};

export default FetchDemo;
