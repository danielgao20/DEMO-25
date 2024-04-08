const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");

// Your array of startup names
const startupNames = [
  "AirVitalize Innovations",
  "aiStudy",
  "Amino Avenue",
  "Anacapa Robotics",
  "ARLingo",
  "Bahamii",
  "Beige App",
  "BIOMED, INC.",
  "Buzzwa Core",
  "Catalyst Robotics",
  "Convoice",
  "Degreely",
  "Digistone",
  "Dual-X Studio",
  "EVRYN",
  "Fair & Square",
  "Hatchet",
  "Hold-it",
  "Hold-it",
  "Jargon",
  "Joja Entertainment LLC",
  "Kadak",
  "Laminar Copilot",
  "Lav",
  "Lionistic",
  "Maplehouse",
  "Nexus",
  "NutriMind",
  "OfSpectrum",
  "Orbital Entertainment Supply",
  "Packa.Design",
  "Prometheus Data",
  "Quinta",
  "Recei",
  "RevSend",
  "Schej",
  "SeekEats",
  "SentiMind",
  "ShapeShift",
  "Skyguard",
  "Stellace",
  "Tanbii.Inc",
  "TERRATOKES INC",
  "The Indie-stry",
  "ThirdPlace",
  "TwoTwenty Hard Seltzer",
  "Underdose",
  "UpDonor",
  "ViBo Health",
  "WellTra.Ai",
  "Intuition Intelligence"
];

console.log(startupNames.length)
let count = 0
startupNames.forEach((startupName) => {
  count += 1
  const processedName = startupName.replace(/[^\w]/gi, "").toLowerCase();

  const url = `https://demo.troylabs.vc/qr/${processedName}`;

  // Generate QR code with less margin
  QRCode.toFile(
    path.join(__dirname, `/qrcodes/${startupName}.png`),
    url,
    {
      color: {
        dark: "#0077B6", // QR code color
        light: "#ffffff" // Background color
      },
      margin: 1, // Reduce the margin around the QR code. Default is 4.
    },
    (err) => {
      if (err) throw err;
      console.log(`QR code generated for ${startupName}`);
    }
  );
});

console.log(count)