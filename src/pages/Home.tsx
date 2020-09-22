import React from "react";
import Book from "components/Book";
import ToolBar from "components/ToolBar";
import styles from "./Home.module.scss";
import { Warn, Login } from "components/widgets";
import Grid from "components/widgets/Grid";
import Card from "components/widgets/Card";
import Button from "components/widgets/Button";
import Advertisement from "./Advertisement";

const HOST = `https://www.britishairways.com`;

function Service() {
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

const ad1 = {
  img:
    HOST +
    "/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Grenadines/185264892_600x337.jpg",
  items: [
    {
      mainTitle: "Sale: Up to £100 extra off Caribbean",
      content: "Book your holiday by 22 September and get an extra discount.",
    },
    {
      subTitle: "Barbados flights + 7 nights hotel",
      money: "£537",
      hint: "from London, Nov 2020",
    },
    {
      subTitle: "St Lucia flights + 7 nights hotel",
      money: "£577",
      hint: "from London, Nov 2020",
    },
    {
      button: "Search Caribbean holidays",
    },
  ],
  hint: "Terms and Conditions apply. Holiday packages are ATOL protected.",
};

const ab2 = {
  img:
    HOST +
    "/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Italy/Rome-ROM/20997510_600x337.jpg",
  items: [
    {
      mainTitle: "Explore Italy's beaches and cities",
      content:
        "Book now and change later if you need to. All flights and holidays include flexible booking.",
    },
    {
      subTitle: "2 night city breaks",
      money: "£99",
      hint: "from London, Nov 2020",
    },
    {
      subTitle: "7 night beach holidays",
      money: "£179",
      hint: "from London, Oct 2020",
    },
    {
      button: "Choose your holiday",
    },
  ],
};

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

          <div className={styles.ad_group}>
            <Advertisement img={ad1.img} items={ad1.items} hint={ad1.hint} />
            <Advertisement img={ab2.img} items={ab2.items} />
          </div>
        </div>
      </div>
    </main>
  );
}
