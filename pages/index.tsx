import { Inter } from "next/font/google";
import RoomRegister from "./roomregister";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <RoomRegister />
    </>
  );
}
