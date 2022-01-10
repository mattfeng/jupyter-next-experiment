import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import {
  KernelAPI,
  KernelManager,
  KernelMessage,
  ServerConnection,
} from "@jupyterlab/services";

export default function Home() {
  useEffect(() => {
    (async () => {
      try {
        const settings = ServerConnection.makeSettings({
          baseUrl: "http://localhost:8888",
        });
        console.log(settings);
        const kernelManager = new KernelManager({ serverSettings: settings });
        console.log(kernelManager);
        const kernel = await kernelManager.startNew({
          name: "python",
        });

        kernel.statusChanged.connect((_, status) => {
          console.log(`Status: ${status}`);
        });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return <div className={styles.container}></div>;
}
