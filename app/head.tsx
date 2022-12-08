export default function Head() {
  return (
    <>

      {/* Manifest  */}
      <link rel="manifest" href="/manifest.json" />
      {/* Must have */}
      <meta content="viewport-fit=cover, width=device-width, initial-scale=1" name="viewport" />
      <meta name="theme-color" content="#00458C" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00458C" />
      <meta name="msapplication-TileColor" content="#00458C" />
      <meta name="description" content="Epoka Clubs Manager" />
      <meta
        name="keywords"
        content="epoka, clubs, manage epoka clubs"
      />
      <link rel="icon" href="/EpokaLogoScaledDown.jpg" />
      {/* Primary Tags */}
      <title>Epoka Clubs</title>
      <meta name="title" content="Epoka Clubs" />
      <meta
        name="description"
        content="Manage Epoka Clubs and participate in events to earn certificates."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://epoka-clubs.vercel.app" />
      <meta property="og:title" content="Epoka Clubs" />
      <meta
        property="og:description"
        content="Manage Epoka Clubs and participate in events to earn certificates."
      />
      <meta property="og:image" content="https://epoka-clubs.vercel.app/api/og" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://epoka-clubs.vercel.app/" />
      <meta property="twitter:title" content="Epoka Clubs" />
      <meta
        property="twitter:description"
        content="Manage Epoka Clubs and participate in events to earn certificates."
      />
      <meta property="twitter:image" content="https://epoka-clubs.vercel.app/api/og" />
    </>
  );
}
