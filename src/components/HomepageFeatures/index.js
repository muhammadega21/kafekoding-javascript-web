import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Apa Itu Javascript",
    Svg: require("@site/static/img/home1.svg").default,
    description: (
      <>
        JavaScript adalah bahasa pemrograman yang membuat website lebih
        interaktif dan dinamis.
      </>
    ),
  },
  {
    title: "Mengapa Belajar Javascript",
    Svg: require("@site/static/img/home2.svg").default,
    description: (
      <>
        JavaScript adalah salah satu bahasa pemrograman paling populer di dunia
        dan menjadi inti dari pengembangan web modern.
      </>
    ),
  },
  {
    title: "Tentang Kelas Ini",
    Svg: require("@site/static/img/home3.svg").default,
    description: (
      <>
        Di kelas ini kita akan mempelajari dasar-dasar JavaScript untuk membuat
        website interaktif, sekaligus melatih logika, kreativitas, dan membuka
        peluang besar di dunia teknologi.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
