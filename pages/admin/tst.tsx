/** @format */

// /** @format */

// import useSWR, { SWRConfig } from "swr";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
// const API = "http://localhost:3000/api/category";

// export async function getServerSideProps() {
//   const repoInfo = await fetcher(API);
//   return {
//     props: {
//       fallback: {
//         [API]: repoInfo,
//       },
//     },
//   };
// }

// function Repo() {
//   const { data, error } = useSWR(API);

//   // there should be no `undefined` state
//   console.log("Is data ready?", !!data);

//   if (error) return "An error has occurred.";
//   if (!data) return "Loading...";
//   return (
//     <div>
//       <h1>{data[0]._id}</h1>
//       {/* <h1>{data.name}</h1>
//       <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong>{" "}
//       <strong>✨ {data.stargazers_count}</strong>{" "}
//       <strong>🍴 {data.forks_count}</strong> */}
//     </div>
//   );
// }

// export default function App({ fallback }: any) {
//   return <SWRConfig value={{ fallback }}>{/* <Repo  /> */}</SWRConfig>;
// }

import React from "react";

type Props = {};

function tst({}: Props) {
  return <div>tst</div>;
}

export default tst;
