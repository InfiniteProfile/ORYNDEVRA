# oryndevra
ORYNDEVRA is an endless fictional profile universe. It is static HTML, CSS and vanilla JS with no build step, backend or API key.

## Run
Open `index.html`, or host the folder on GitHub Pages, Cloudflare Pages or Netlify.

## Use
- Scroll forever: 360 profiles load first, 300 more are prepared in the background and appended near profile 100 of the loaded set, then the cycle repeats. Scroll position is never touched.
- Search an exact decimal ID of any length and press Go or Enter to open that being. Text search (name, classification, origin, zone) scans the endless stream for matches.
- Six filters (existence type, origin, axiom field, temporal class, perception, phenomenon) work on the generator itself.
- Links look like `index.html?id=123456789012345678901234567890`. Previous, Next and Related are in the detail view.

## How it works
IDs are strings, never Numbers. Increment and decrement are done digit by digit. A string hash seeds a PRNG, so each ID always yields the same profile and art, with nothing stored. Art is SVG drawn lazily when a card nears the viewport. Cards far above the viewport are removed and replaced by a spacer of equal height to bound memory; a button in that spacer returns to the start.
