import React from "react";
import Book from "components/Book";
import ToolBar from "components/ToolBar";
import styles from "./Home.module.scss";
import { Warn, Login } from "components/widgets";
import Grid from "components/widgets/Grid";

function Service() {
  const HOST = `https://www.britishairways.com`;

  const list = [
    {
      title: "All-inclusive offers",
      img:
        HOST +
        "/assets/images/MediaHub/Media-Database/Royalty-free-RF/Holidays/Beach-Holidays/666361340_600x337.jpg",
    },
    {
      title: "Last-minute deals",
      img:
        HOST +
        "/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Netherlands/Amsterdam-AMS/470121156_337x337.jpg",
    },
    {
      title: "2021 trips",
      img:
        HOST +
        "/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/UAE/Dubai-DXB/1031039602_337x337.jpg",
    },
    {
      title: "Sale",
      img:
        HOST +
        "/assets/images/MediaHub/Media-Database/Rights-managed-RM/artwork/Sale/ba-jan-sale-email-header-v2_337x337.jpg",
    },
  ];

  return <Grid list={list} />;
}

export default function Home() {
  return (
    <main>
      <Book />
      <ToolBar />

      <div className={styles.page}>
        <div>
          <Warn />
        </div>

        <div>
          <Login />
          <Service />
        </div>
      </div>
    </main>
  );
}
