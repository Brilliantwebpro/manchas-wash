import { Helmet } from "react-helmet-async";
import { brand, seoKeywords } from "../data/siteData.js";

const Seo = ({
  title,
  description,
  path = "",
  schema,
  image = "/og-image.jpg",
}) => {
  const baseUrl = brand.website || "https://manchaswash.com";
  const url = `${baseUrl}${path}`;
  const metaTitle = `${title} | ${brand.name}`;
  const metaDescription = description ?? "Local car wash and detailing services.";

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={seoKeywords.join(", ")} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {schema ? (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      ) : null}
    </Helmet>
  );
};

export default Seo;
