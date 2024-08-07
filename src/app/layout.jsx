export const metadata = {
  title: 'Best IVF and Fertility center in Hyderabad | Top Fertility Hospital/Clinic in Hyderabad | Nest Fertility and IVF',
  description: 'Nest Fertility and IVF is the leading fertility clinic in Hyderabad, located in Madeenaguda. We offer comprehensive fertility treatments including IVF, IUI, and more. Our expert team is dedicated to providing personalized care to help you achieve your dream of parenthood. Visit us for the best fertility services in Hyderabad.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Nest Fertility and IVF is the leading fertility clinic in Hyderabad, located in Madeenaguda. We offer comprehensive fertility treatments including IVF, IUI, and more. Our expert team is dedicated to providing personalized care to help you achieve your dream of parenthood. Visit us for the best fertility services in Hyderabad." />
        <meta name="keywords" content="Fertility Clinic Hyderabad, IVF Clinic Hyderabad, Nest Fertility and IVF, Best Fertility Clinic in Hyderabad, Infertility Treatment Hyderabad, IUI Treatment Hyderabad, Reproductive Health Services, IVF Treatment Cost Hyderabad, Fertility Specialists Hyderabad, Madeenaguda Fertility Clinic, Egg Freezing Hyderabad, Sperm Donation Hyderabad, Assisted Reproductive Technology, In Vitro Fertilization Hyderabad, Fertility Consultation Hyderabad" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Best IVF and Fertility center in Hyderabad | Top Fertility Hospital/Clinic in Hyderabad | Nest Fertility and IVF" />
        <meta property="og:description" content="Nest Fertility and IVF is the leading fertility clinic in Hyderabad, located in Madeenaguda. We offer comprehensive fertility treatments including IVF, IUI, and more. Our expert team is dedicated to providing personalized care to help you achieve your dream of parenthood. Visit us for the best fertility services in Hyderabad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nestfertilityandivf.com" />
        <meta property="og:image" content="/og_img.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best IVF and Fertility center in Hyderabad | Top Fertility Hospital/Clinic in Hyderabad | Nest Fertility and IVF" />
        <meta name="twitter:description" content="Nest Fertility and IVF is the leading fertility clinic in Hyderabad, located in Madeenaguda. We offer comprehensive fertility treatments including IVF, IUI, and more. Our expert team is dedicated to providing personalized care to help you achieve your dream of parenthood. Visit us for the best fertility services in Hyderabad." />
        <meta name="twitter:image" content="/og_img.jpg" />

        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        
        <script src="https://kit.fontawesome.com/7ebdac75d5.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
