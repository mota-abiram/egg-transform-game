import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, Send, Facebook, Twitter, Youtube } from "lucide-react";

// Helper to display a cleaner name in the overlay
const getDisplayName = (query: string) => {
  return query
    .replace(/\+/g, ' ')
    .replace('Star Bazaar ', '')
    .replace('Qmart ', '')
    .replace(' Hyderabad', '');
};

// FIXED: Map Component with Correct Google Maps Embed URL
const MapPlaceholder = ({ mapQuery, className = "sticky top-24 h-[500px] md:h-[650px] rounded-xl bg-white border border-gray-300 shadow-xl overflow-hidden" }: { mapQuery: string; className?: string }) => {
  // CORRECTED: Use the official Google Maps URL format for embedding.
  const mapEmbedBase = "https://maps.google.com/maps?q=";
  const mapEmbedParams = "&output=embed&z=13&iwloc=A"; // Required for embed

  // Final URL includes the correct base, the dynamic query, and the embed parameters
  const mapEmbedUrl = `${mapEmbedBase}${mapQuery}${mapEmbedParams}`;

  return (
    <div className={className}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapEmbedUrl} // <-- Now uses the correct Google Maps URL
        aria-label={`Map showing location: ${mapQuery}`}
      ></iframe>
    </div>
  );
};


const Availability = () => {
  // Default map location on initial load
  const defaultMapQuery = "Star+Bazaar+Kondapur+Hyderabad";
  const [currentMapQuery, setCurrentMapQuery] = useState(defaultMapQuery);

  // Handler to update the state (which updates the map)
  const handleLocationClick = (loc: string, storeName: string) => {
    // Construct the search query for the embed map
    const newQuery = `${storeName}+${loc}+Hyderabad`.replace(/ /g, '+');
    setCurrentMapQuery(newQuery);
  };

  const retailers = [
    "Big Bazaar", "Reliance Fresh", "Spencer's", "More", "V-Mart",
    "Star Bazaar", "Ratnadeep", "Metro", "D-Mart"
  ];

  const quickCommerce = [
    "Zepto", "Blinkit"
  ];

  const cities = [
    "Bangalore", "Hyderabad", "Chennai", "Mumbai", "Pune", "Delhi",
    "Kochi", "Coimbatore", "Mysore", "Vizag", "Vijayawada", "Guntur",
    "Rajahmundry", "Kakinada", "Nellore", "Tirupati"
  ];

  return (
    <section
      className="py-10 sm:py-16 lg:py-20 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-semibold font-headline tracking-wide" style={{ wordSpacing: "0.25em", letterSpacing: "0.10em" }}>
              We Are Available!
            </span>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4 leading-relaxed">
            Find Hello Eggs – India’s 1st Enriched Brown Eggs with D3 & DHA
            at your nearest store or get them delivered to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto mb-8 sm:mb-10 lg:mb-12">

          {/* LEFT COLUMN: Retail and Quick Commerce Cards (MATCHED HEIGHT) */}
          <div className="h-[400px] md:h-[600px] overflow-auto">
            <Card className="p-6 sm:p-8 flex flex-col bg-card border border-border">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2 font-headline" style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}>
                <span>🏪</span> Retail Stores
              </h3>

              <p className="text-[16px] sm:text-base text-gray-900 mb-4 leading-relaxed">
                Now stocked at leading supermarkets across Hyderabad.
              </p>

              {/* Star Bazaar */}
              <div className="mb-4">
                <p className="text-base sm:text-lg font-semibold mb-2" style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}>Star Bazaar</p>
                <div className="flex flex-wrap gap-2 sm:gap-3 font-bold" style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}>
                  {[
                    "Kondapur", "Gachibowli", "Panjagutta", "Bowenpally",
                    "Saket", "Alwal", "Vanasthalipuram", "Kharmanghat"
                  ].map((loc) => (
                    <span
                      key={`star-${loc}`}
                      onClick={() => handleLocationClick(loc, "Star Bazaar")}
                      className="bg-secondary/50 text-foreground px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-extrabold border border-border cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Qmart */}
              <div>
                <p className="text-base sm:text-lg font-semibold mb-2" style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}>Qmart</p>
                <div className="flex flex-wrap gap-2 sm:gap-3 font-bold" style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}>
                  {["Gachibowli", "Banjara Hills"].map((loc) => (
                    <span
                      key={`qmart-${loc}`}
                      onClick={() => handleLocationClick(loc, "Qmart")}
                      className="bg-secondary/50 text-foreground px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-extrabold border border-border cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT COLUMN: MAP (MATCHED HEIGHT) */}
          <div className="h-[300px] md:h-[420px]">
            <MapPlaceholder
              mapQuery={currentMapQuery}
              className="h-full rounded-xl bg-white border border-gray-300 shadow-xl overflow-hidden"
            />
            <div className="-mt-1 p-3 bg-white/90 rounded-b-xl text-center text-sm font-semibold text-gray-800 border-t border-gray-300">
              Currently Viewing:{" "}
              <span className="font-bold text-primary">
                {getDisplayName(currentMapQuery)}
              </span>
            </div>
          </div>
        </div>

        {/* Egg Bank Info Card (NOW CENTERED AND BELOW STORES/MAP) */}
        <div className="max-w-6xl mx-auto w-full mb-12 sm:mb-16">
          <Card className="rounded-2xl text-card-foreground shadow-xl p-6 sm:p-8 w-full bg-card border border-border flex flex-col justify-center">
            <div className="text-center space-y-6 sm:space-y-8">
              <h3 className="text-3xl sm:text-4xl font-semibold font-headline" style={{ wordSpacing: '0.25em', letterSpacing: '0.04em' }}>
                Shop now @ <span className="text-gradient">Srinivasa Egg Bank</span>
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 bg-secondary/30 p-4 rounded-xl border border-border">
                <div className="flex items-start gap-3 text-left">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-base sm:text-lg text-foreground font-bold leading-tight">Plot No.82, Phase 2, Kavuri Hills,</p>
                    <p className="text-sm sm:text-base text-muted-foreground font-medium">Madhapur, Hyderabad, Telangana 500081</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button asChild size="lg" className="h-14 px-8 gap-3 text-base sm:text-lg font-bold shadow-lg bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-300" style={{ wordSpacing: '0.2em', letterSpacing: '0.03em' }}>
                  <a href="tel:+916309416417">
                    <Phone className="w-5 h-5" />
                    +91 6309 416 417
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base sm:text-lg font-bold bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300" style={{ wordSpacing: '0.2em', letterSpacing: '0.03em' }}>
                  <a href="https://srinivasafarms.com" target="_blank" rel="noopener noreferrer">
                    🌐 Visit Website
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto mb-10 sm:mb-10 lg:mb-12">
          {/* Social Media & Order Online - NOW CENTERED AND FULL WIDTH */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            {/* Social Media Card */}
            <Card className="p-6 sm:p-8 flex-1 bg-secondary/20 border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-semibold font-headline" style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}>
                  Our <span className="text-gradient">Social Media</span>
                </h3>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/helloeggs_india"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Hello Eggs on Instagram"
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/HelloEggsIndia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Hello Eggs on Facebook"
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1877F2] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>

                  {/* Twitter (X) */}
                  <a
                    href="https://x.com/helloeggs_india?s=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Hello Eggs on X"
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@HelloEggsIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Subscribe to Hello Eggs on YouTube"
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF0000] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 sm:w-8 sm:h-8 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </Card>

            {/* Order Online Card */}
            <Card className="p-6 sm:p-8 flex-1 bg-secondary/20 border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-semibold font-headline" style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}>
                  Order <span className="text-gradient">Online</span>
                </h3>

                <div className="flex flex-row items-center justify-center gap-8 sm:gap-12">
                  {[
                    { name: 'Blinkit', logo: 'blinkit.jpeg', fit: 'object-cover', padding: 'p-0', link: 'https://link.blinkit.com/b/p3o9zd8v' },
                    { name: 'Zepto', logo: 'zepto.png', fit: 'object-cover', padding: 'p-0', link: 'https://zepto-prod.onelink.me/tC90/iifcnkrf', imageClass: 'scale-[1.3]' }
                  ].map((partner) => (
                    <div key={partner.name} className="flex flex-col items-center gap-3">
                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-md border border-border hover:scale-110 transition-transform duration-300 overflow-hidden"
                      >
                        <img
                          src={`${import.meta.env.BASE_URL}${partner.logo}`}
                          alt={partner.name}
                          className={`w-full h-full ${partner.fit} ${(partner as any).imageClass || ''}`}
                        />
                      </a>
                      <span className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Availability;