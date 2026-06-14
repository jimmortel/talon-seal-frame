export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:title" content="Talon Seal Frame" />
        
        <!-- Frame Meta Tags -->
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://i.imgur.com/mWm79zS.jpeg" />
        <meta property="fc:frame:button:1" content="Talon Seal" />
      </head>
      <body>
        <h1>Talon Seal Frame</h1>
      </body>
    </html>
  `);
}
