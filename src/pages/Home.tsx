import React from "react";
import Book from "components/Book";
import ToolBar from "components/ToolBar";
import styles from "./Home.module.scss";
import { Warn, Login } from "components/widgets";
import Grid from "components/widgets/Grid";
import Advertisement from "./Advertisement";

const HOST = `https://www.britishairways.com`;

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
          <Grid
            list={[
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
            ]}
          />

          <div className={styles.ad_group}>
            <Advertisement
              data={{
                img:
                  HOST +
                  "/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Grenadines/185264892_600x337.jpg",
                items: [
                  {
                    mainTitle: "Sale: Up to £100 extra off Caribbean",
                    content:
                      "Book your holiday by 22 September and get an extra discount.",
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
                hint:
                  "Terms and Conditions apply. Holiday packages are ATOL protected.",
              }}
            />

            <Advertisement
              data={{
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
              }}
            />
          </div>

          <Grid
            list={[
              {
                title: "Sale: Indian Ocean",
                img:
                  HOST +
                  "/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Seychelles-SEZ/1021144884_1200x400.jpg",
              },
              {
                title: "Sale: Middle East",
                img:
                  HOST +
                  "/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/UAE/Dubai-DXB/958713512_600x337.jpg",
              },
              {
                title: "Sale: USA & Canada",
                img:
                  HOST +
                  "/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/USA/New-York-NYC/2122869_1200x400.jpg",
              },
              {
                title: "Sale: Asia, Far East & Australia",
                img:
                  HOST +
                  "/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Singapore-SIN/119998407_1200x400.jpg",
              },
            ]}
          />

          <div className={styles.ad_group}>
            <Advertisement
              data={{
                img:
                  HOST +
                  "/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Italy/Venice-VCE/713599501_600x337.jpg",
                items: [
                  {
                    mainTitle: "Sale: Business class from £149 return",
                    content:
                      "Explore our premium sale to European destinations.",
                  },
                  {
                    subTitle: "Flights to Venice",
                    money: "£144",
                    hint: "from London, Nov 2020",
                  },
                  {
                    subTitle: "Flights to Gothenburg",
                    money: "£141",
                    hint: "from London, Nov 2020",
                  },
                  {
                    button: "Book your seat",
                  },
                ],
                hint: "Terms and Conditions apply.",
              }}
            />

            <Advertisement
              data={{
                img:
                  HOST +
                  "/assets/images/MediaHub/Media-Database/Royalty-free-RF/People/Using-Technology/53607330_600x337.jpg",
                items: [
                  {
                    mainTitle: "Claiming and using your voucher",
                    content: "What you need to know about your travel voucher.",
                  },
                  {
                    button: "Find out more",
                  },
                ],
              }}
            />
          </div>
          <div>
            <Advertisement
              data={{
                img:
                  HOST +
                  "/assets/images/MediaHub/Media-Database/Royalty-free-RF/People/Using-Technology/34326650_600x337.jpg",
                items: [
                  {
                    mainTitle: "If you need to contact us",
                    content:
                      "We’re experiencing extremely high call volumes and are responding as quickly as we can so please bear with us.",
                  },
                  {
                    button: "How to contact us",
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
