export default function Head() {
  return (
    <>
      <meta content="viewport-fit=cover, width=device-width, initial-scale=1" name="viewport" />
      <meta name="theme-color" content="black" />
      <meta name="description" content="Epoka Clubs Manager" />
      <meta
        name="keywords"
        content="epoka, clubs, manage epoka clubs"
      />
      <link rel="icon" href="/favicon.ico" />
      {/* Primary Tags */}
      <title>Epoka Clubs</title>
      <meta name="title" content="Epoka Clubs" />
      <meta
        name="description"
        content="Manage Epoka Clubs and participate in events to earn certificates."
      />
      {/* Manifest  */}
      <link rel="manifest" href="/manifest.json" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://localhost:3000/" />
      <meta property="og:title" content="Epoka Clubs" />
      <meta
        property="og:description"
        content="Manage Epoka Clubs and participate in events to earn certificates."
      />
      <meta property="og:image" content="http://localhost:3000/api/og" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://localhost:3000/" />
      <meta property="twitter:title" content="Epoka Clubs" />
      <meta
        property="twitter:description"
        content="Manage Epoka Clubs and participate in events to earn certificates."
      />
      <meta property="twitter:image" content="http://localhost:3000/api/og" />
    </>
  );
}
