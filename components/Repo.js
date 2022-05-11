import React from "react";
import useSWR, { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const API = "https://api.github.com/repos/vercel/swr";

export async function getStaticProps() {
  const repoInfo = await fetch(API);
  return {
    props: {
      fallback: {
        [API]: repoInfo,
      },
    },
  };
}

export default function Repo() {
  const { data, error } = useSWR(API);

  if (error) return <h3>Error</h3>;
  if (!data) return <h3>Laoding...</h3>;
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
