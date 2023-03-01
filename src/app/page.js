"use client";
import { Inter } from "next/font/google";

import Modal from "@/components/modal/Modal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Modal />
    </main>
  );
}
