export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://softwayhub.com/#organization",

    name: "SoftwayHub",
    url: "https://softwayhub.com",

    description:
      "SoftwayHub is a software development company building modern websites, custom software, AI solutions, automation and digital products.",

    email: "info@softwayhub.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },

    sameAs: [
      "https://pk.linkedin.com/company/softwayhub",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://softwayhub.com/#website",

    url: "https://softwayhub.com",
    name: "SoftwayHub",

    description:
      "Software development, digital products, AI solutions and business automation.",

    publisher: {
      "@id": "https://softwayhub.com/#organization",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}