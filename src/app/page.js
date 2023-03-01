"use client";
import { Poppins } from "next/font/google";

import Modal from "@/components/modal/Modal";
import DefaultStarter from "@/components/DefaultStarter";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      {/* <Modal /> */}
      <DefaultStarter />
    </main>
  );
}
