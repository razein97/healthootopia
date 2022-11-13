import Head from "next/head";

import { useRouter } from "next/router";

const Meta = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta charSet="utf-8"></meta>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonicalURL()} />
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "Healthootopia",
  keywords: "health, fitness, cancer, articles, knowledge",
  description: "latest health articles",
  ogTitle: "Healthootopia",
};
export default Meta;

function canonicalURL() {
  const router = useRouter();
  const site = "https://healthootopia.com";
  const canonicalURL = (site + router.asPath).split("?")[0];

  return canonicalURL;
}
