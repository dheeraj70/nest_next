export const metadata = {
  title: 'Best IVF and Fertility center in Hyderabad | Nest Fertility and IVF',
  description: 'Nest Fertility and IVF is the leading fertility clinic in Hyderabad, located in Madeenaguda. We offer comprehensive fertility treatments including IVF, IUI, and more. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Nest Fertility and IVF is the leading fertility clinic in Hyderabad, located in Madeenaguda. We offer comprehensive fertility treatments including IVF, IUI, and more. " />
        <meta name="keywords" content="Best Fertility Clinic in Hyderabad, Fertility Clinics Hyderabad, IVF Clinic Hyderabad, Nest Fertility and IVF, Infertility Treatment Hyderabad, IUI Treatment Hyderabad, Reproductive Health Services, IVF Treatment Cost Hyderabad, Fertility Specialists Hyderabad, Madeenaguda Fertility Clinic, Egg Freezing Hyderabad, Sperm Donation Hyderabad, Assisted Reproductive Technology, In Vitro Fertilization Hyderabad, Fertility Consultation Hyderabad, IVF , IUI" />
        <meta name="robots" content="index, follow" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Nest Fertility and IVF",
              "image": "https://nestfertilityandivf.com/og_img.jpg",
              "@id": "https://www.nestfertilityandivf.com",
              "url": "https://www.nestfertilityandivf.com",
              "telephone": "+919550555271",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1st floor, krishna lila plaza, Viswaswara Nagar Colony, Shanti Nagar Colony, Madeenaguda",
                "addressLocality": "Hyderabad",
                "postalCode": "500049",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.4965333802915",
                "longitude": "78.3456101802915"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "191",
                "bestRating" : "5",
                "worstRating" : "0"
              },
              "sameAs": [
                "https://www.instagram.com/nestfertilityivf/",
                "https://www.practo.com/hyderabad/clinic/nest-fertility-and-ivf-madinaguda",
                "https://www.youtube.com/@nestfertility1"
                
              ]
              
            }),
          }}
        />

        <meta property="og:title" content="Best IVF and Fertility center in Hyderabad | Nest Fertility and IVF" />
        <meta property="og:description" content="Nest Fertility and IVF is the leading fertility clinic in Hyderabad, located in Madeenaguda. We offer comprehensive fertility treatments including IVF, IUI, and more. " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nestfertilityandivf.com" />
        <meta property="og:image" content="/og_img.jpg" />
        <meta property="og:site_name" content="Nest Fertility and IVF" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best IVF and Fertility center in Hyderabad | Nest Fertility and IVF" />
        <meta name="twitter:description" content="Nest Fertility and IVF is the leading fertility clinic in Hyderabad, located in Madeenaguda. We offer comprehensive fertility treatments including IVF, IUI, and more. " />
        <meta name="twitter:image" content="/og_img.jpg" />

        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        
        <script src="https://kit.fontawesome.com/7ebdac75d5.js" crossOrigin="anonymous"></script>
        {/*<!-- Google tag (gtag.js) -->*/}
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11476220245"></script>
<script src="/gscript.js"></script>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
