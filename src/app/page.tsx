import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {

  const [place, setPlace] = useState("");
  return (
    <div>
    <h1>Hello World</h1>
   </div>
  );
}
