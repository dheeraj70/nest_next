export const metadata = {
  title: 'Nest Fertility and IVF',
  description: 'Website created with Next.js for Nest Fertility & IVF clinic.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Nest Fertility & IVF clinic offers comprehensive fertility treatments and services. Visit our website to learn more." />
        <meta name="keywords" content="Fertility, IVF, Clinic, Nest Fertility, Infertility Treatment, Reproductive Health" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Nest Fertility & IVF" />
        <meta property="og:description" content="Nest Fertility & IVF clinic offers comprehensive fertility treatments and services. Visit our website to learn more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nest Fertility & IVF" />
        <meta name="twitter:description" content="Nest Fertility & IVF clinic offers comprehensive fertility treatments and services. Visit our website to learn more." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/twitter-image.jpg" />

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
