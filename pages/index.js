import useSWR, { SWRConfig } from "swr";
import Repo from "../components/Repo";

export default function Home(fallback) {
  return (
    <SWRConfig value={{ fallback }}>
      <Repo />
    </SWRConfig>
  );
}
