const SECTIONS = [
  { title:"iOS apps", apps:[
    { n:"Jukebox",       d:"Guests vote on the party playlist. No code to join.", u:"https://jukebox.dancykier.com", b:"store", ic:"jukebox", s:"jukebox" },
    { n:"Stitch",        d:"Combine iPhone screenshots into one long, seam-matched image.",       u:"https://stitch.dancykier.com",  b:"store", ic:"stitch", s:"stitch" },
    { n:"Sports Alerts", d:"Real-time baseball prospect & call-up notifications.",                 u:"https://sportsalerts.dancykier.com", b:"live", ic:"sportsalerts", s:"sportsalerts" },
    { n:"Bus Tracker",   d:"Live bus arrival times, no clutter.",                                  u:"https://bustracker.dancykier.com", b:"live", ic:"bustracker", s:"bustracker" },
    { n:"GroupSnap",     d:"One shared camera roll for everyone at your event.",                   u:"https://groupsnap.dancykier.com", b:"live", s:"groupsnap", ic:"groupsnap", t:["#3a2c96","#7a2f6a"] },
    { n:"Dish It Out",   d:"Rate the dish, not the restaurant. Notes you share with friends.", b:"beta", ic:"dishitout", t:["#c2562c","#7d2f14"] },
    { n:"Media Check",   d:"Is this movie or show OK for my kid? Five severity scores.", b:"beta", s:"mediacheck", ic:"mediacheck", t:["#1a2a3f","#0e4a52"] },
    { n:"Pollenary",     d:"Daily pollen forecast with a morning push.",                           u:"https://pollenary.dancykier.com", b:"store", s:"pollen", ic:"pollen", t:["#1e5a34","#7bbf3a"] },
    { n:"Intercom",      d:"Open the mic; everyone in the room hears you, phone locked.", u:"https://intercom.dancykier.com", b:"beta", ic:"intercom", t:["#1e2a70","#5B7CFA"] },
    { n:"Wordbox",       d:"Word games you play with friends, at your own pace.",                  b:"beta", s:"wordbox", ic:"wordbox", t:["#8a5a12","#e0a72b"] },
  ]},
  { title:"Web & games", apps:[
    { n:"Pinpoint",             d:"Read a clue, drop a pin — unlimited geography practice.", u:"https://geo.dancykier.com", b:"live", ic:"pinpoint", s:"pinpoint" },
    { n:"Chobes Roto Inspector",d:"Live monthly roto standings for a fantasy league.",       u:"https://chobes.dancykier.com", b:"live", ic:"chobes", s:"chobes" },
    { n:"Games",                d:"A hub of quick browser games.",                           u:"https://games.dancykier.com", b:"live", ic:"games", s:"games" },
    { n:"Hexicon",              d:"Spelling-bee style word hunt from a honeycomb.",          u:"https://spellingbee.dancykier.com", b:"live", ic:"hexicon", s:"hexicon" },
    { n:"Scramble",             d:"Find every word in the shaken grid.",                     u:"https://boggle.dancykier.com", b:"live", ic:"boggle", s:"scramble" },
    { n:"Anagrams",             d:"Unscramble against the clock.",                           u:"https://anagrams.dancykier.com", b:"live", ic:"anagrams", s:"anagrams" },
    { n:"Intercom (web)",       d:"The same voice rooms, in a browser. No account.", u:"https://intercom.dancykier.com", b:"live", ic:"intercom", t:["#1e2a70","#5B7CFA"] },
    { n:"Angry Men Rankings",   d:"Live humor standings. Voting is by private link only.", u:"https://amhumor.dancykier.com", b:"live", ic:"angrymen", s:"angrymen" },
  ]},
  { title:"Mac apps", apps:[
    { n:"Beam",              d:"A Spotlight-style search bar that also computes.",                        u:"https://beam.dancykier.com", b:"mac", ic:"beam", t:["#2a5b8a","#0f2136"], cta:"Download" },
    { n:"TextLift",          d:"Drag a region on screen; the text lands on your clipboard.",        u:"https://github.com/moshed/TextLift", b:"mac", ic:"textlift", t:["#173a5b","#3b7fb0"], cta:"GitHub" },
    { n:"Clipboard History", d:"A fast, searchable panel of everything you've copied.",                   u:"https://github.com/moshed/Clipboard-Manager", b:"mac", ic:"clipboard", t:["#2a3340","#586c85"], cta:"GitHub" },
    { n:"ClaudeBar",         d:"Menu-bar notifications for Claude Code, one click to the terminal.", u:"https://github.com/moshed/ClaudeBar", b:"mac", ic:"claudebar", t:["#7a3a1e","#e07b3a"], cta:"GitHub" },
    { n:"RunApp",            d:"One-tap launcher for my iOS apps, with a live log viewer.",         u:"https://github.com/moshed/run-app", b:"mac", ic:"runapp", t:["#1e5a34","#3aa96a"], cta:"GitHub" },
    { n:"ClipPiP",           d:"Float your clipboard in an always-on-top PiP panel.",      u:"https://github.com/moshed/ClipPiP", b:"mac", ic:"clippip", t:["#2c2f7a","#5a5ed6"], cta:"GitHub" },
  ]},
  { title:"Twitter bots", apps:[
    { n:"MLB Home Runs", h:"@mlbhomerbot", d:"Every homer, plus how many parks it would clear.", u:"https://x.com/mlbhomerbot", b:"x", ic:"homerbot", bot:true, t:["#1b2f43","#0c141d"], cta:"Follow" },
    { n:"MLB Prospects", h:"@mlbprospectsbot", d:"Every call-up and MLB debut, the moment it's official.",        u:"https://x.com/mlbprospectsbot", b:"x", ic:"prospectsbot", bot:true, t:["#1b2f43","#0c141d"], cta:"Follow" },
    { n:"MLB Bulk & Openers", h:"@MLBBulkbot", d:"Opener and bulk-pitcher calls before first pitch.",             u:"https://x.com/MLBBulkbot", b:"x", ic:"bulkbot", bot:true, t:["#1b2f43","#0c141d"], cta:"Follow" },
    { n:"MLB Injuries", h:"@MLBInjuryBot", d:"Injuries and IL moves the moment they're reported.",                u:"https://x.com/MLBInjuryBot", b:"x", ic:"injurybot", bot:true, t:["#1b2f43","#0c141d"], cta:"Follow" },
    { n:"MLB Closers", h:"@mlbclosersbot", d:"Save situations and closer role changes as they shift.",           u:"https://x.com/mlbclosersbot", b:"x", ic:"closersbot", bot:true, t:["#1b2f43","#0c141d"], cta:"Follow" },
  ]},
];
const BADGE = { store:["b-store","App Store"], live:["b-live","Live"], mac:["b-mac","macOS"], beta:["b-beta","TestFlight"], x:["b-x","X"] };
const PLAT  = { store:"iOS", live:"iOS", beta:"iOS", mac:"macOS", x:"X" };
const V = 8;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
