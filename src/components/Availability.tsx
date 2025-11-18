import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, Send } from "lucide-react";

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
      className="py-10 sm:py-16 lg:py-20"
      style={{
        backgroundImage: "linear-gradient(to right bottom, #ffefe8, #f58351)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-[#f58351] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-semibold font-headline tracking-wide" style={{ wordSpacing: "0.25em", letterSpacing: "0.10em" }}>
              We Are Available!
            </span>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-900 px-4 leading-relaxed">
          Find Hello Eggs – India’s 1st Enriched Brown Eggs with D3 & DHA
          at your nearest store or get them delivered to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto mb-8 sm:mb-10 lg:mb-12">

{/* LEFT COLUMN: Retail and Quick Commerce Cards (MATCHED HEIGHT) */}
<div className="h-[400px] md:h-[600px] overflow-auto">
  <Card className="p-6 sm:p-8 flex flex-col bg-gradient-to-br from-[#ffefe8] via-white to-[#ffefe8] border-2 border-[#c8d5db]">
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
            className="bg-[#ffefe8] text-[#f58351] px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-extrabold border border-[#c8d5db] cursor-pointer hover:bg-[#f58351] hover:text-white transition-colors duration-200"
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
            className="bg-[#ffefe8] text-[#f58351] px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-extrabold border border-[#c8d5db] cursor-pointer hover:bg-[#f58351] hover:text-white transition-colors duration-200"
          >
            {loc}
          </span>
        ))}
      </div>
    </div>
  </Card>
</div>

{/* RIGHT COLUMN: MAP (MATCHED HEIGHT) */}
<div className="h-[340px] md:h-[480px] -mt-14 rounded-xl overflow-auto">
  <MapPlaceholder
    mapQuery={currentMapQuery}
    className="h-[620px] md:h-[680px] rounded-xl bg-white border border-gray-300 shadow-xl overflow-hidden sticky top-24"
  />

  <div className="mt-3 p-3 bg-white/90 rounded-b-xl text-center text-sm font-semibold text-gray-800 border-t border-gray-300">
    Currently Viewing: <span className="font-bold text-[#f58351]">{getDisplayName(currentMapQuery)}</span>
  </div>
</div>

</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto mb-10 sm:mb-10 lg:mb-12">

        {/* Online Ordering & Social CTA */}
        <Card className="p-6 sm:p-8 w-full bg-[#ffefe8] border border-[#c8d5db]">
        <div className="text-center space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-semibold font-headline" style={{ wordSpacing: "0.10em", letterSpacing: "0.05em" }}>
              Our <span className="text-gradient">Social Media</span>
            </h3>

            {/* Online Delivery Apps - MODIFIED TO USE ROUNDED LOGOS */}
            

            <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              {/* Instagram CTA */}
              <a
    href="https://instagram.com/helloeggs_india"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow Hello Eggs on Instagram"
    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
  >
    {/* CHANGED: Decreased icon size from w-7/h-7 and sm:w-9/h-9 */}
    <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
  </a>

  {/* Bulk Order Phone */}
  <a
    href="tel:+916309416417"
    aria-label="Call Hello Eggs for bulk orders"
    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
  >
    {/* CHANGED: Decreased icon size from w-7/h-7 and sm:w-9/h-9 */}
    <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
  </a>
</div>
</div>
        </Card>
        {/* Egg Bank Info */}
        <Card className="p-6 sm:p-8 w-full bg-white border border-[#c8d5db]">
        <div className="text-center space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold font-headline" style={{ wordSpacing: "0.25em", letterSpacing: "0.04em" }}>
              Shop now @ <span className="text-gradient">Srinivasa Egg Bank</span>
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-start gap-2 text-left">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#f58351] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-black-700 font-medium">Plot No.82, Phase 2, Kavuri Hills,</p>
                  <p className="text-xs sm:text-sm text-gray-900 font-medium">Madhapur, Hyderabad, Telangana 500081</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="gap-2 text-sm sm:text-base font-logo tracking-wide" style={{ wordSpacing: "0.2em", letterSpacing: "0.03em" }} asChild>
                <a href="tel:+916309416417">
                  <Phone className="w-4 h-4" />
                  +91 6309 416 417
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-sm sm:text-base font-logo tracking-wide" style={{ wordSpacing: "0.2em", letterSpacing: "0.03em" }} asChild>
                <a href="https://srinivasafarms.com" target="_blank" rel="noopener noreferrer">
                  🌐 Visit Website
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
      </div>
    </section>
  );
};

export default Availability;