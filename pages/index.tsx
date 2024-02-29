import { Inter } from "next/font/google";
import Zod from "./Zod";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Zod />
    </>
  );
}
