export default function handler(req, res) {
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="TALON SEAL" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://imgur.com/a/your-image-url" />
        <meta property="fc:frame:button:1" content="Lancer TALON SEAL" />
      </head>
      <body>
        <h1>TALON SEAL est en ligne !</h1>
      </body>
    </html>
  `);
}

