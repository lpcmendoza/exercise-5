import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import VerticalChart from "@/components/VerticalChart";


export default function Home() {
  return (
    <>
      
      <main className={`${styles.main} `}>
        <VerticalChart/>
      </main>
    </>
  );
}
