import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, Send } from "lucide-react";


// FIXED: Map Component with Correct Google Maps Embed URL
const MapPlaceholder = ({ mapQuery, className = "sticky top-24 h-96 md:h-[600px] rounded-xl bg-white border border-gray-300 shadow-xl overflow-hidden" }: { mapQuery: string; className?: string }) => {
  // CORRECTED: Use the official Google Maps URL format for embedding.
  const mapEmbedBase = "https://maps.google.com/maps?q=";
  const mapEmbedParams = "&output=embed&z=13&iwloc=A"; // Required for embed
  
  // Final URL includes the correct base, the dynamic query, and the embed parameters
  const mapEmbedUrl = `${mapEmbedBase}${mapQuery}${mapEmbedParams}`;
  
  // Helper to display a cleaner name in the overlay
  const getDisplayName = (query: string) => {
    return query
      .replace(/\+/g, ' ')
      .replace('Star Bazaar ', '')
      .replace('Qmart ', '')
      .replace(' Hyderabad', '');
  };

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
      
      {/* Overlay showing the currently viewed location */}
      <div className="absolute bottom-0 left-0 p-3 bg-white/80 w-full text-center text-xs text-gray-600 border-t">
        Currently Viewing: <span className="font-semibold">{getDisplayName(mapQuery)}</span>
      </div>
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
      className="py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: "linear-gradient(to right bottom, #ffefe8, #ffdbca, #ffc7ad, #ffb391, #fc9f75, #ff9c82, #ff9a90, #ff999d, #ffb2c9, #f8cee8, #f5e8fa, #ffffff)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-[#f58351] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-semibold font-headline tracking-wide" style={{ wordSpacing: "0.25em", letterSpacing: "0.05em" }}>
              We Are Available!
            </span>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
          Find Hello Eggs – India’s 1st Enriched Brown Eggs with D3 & DHA
          at your nearest store or get them delivered to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-6 sm:mb-8">
          
          {/* LEFT COLUMN: Retail and Quick Commerce Cards (Stacked) */}
          <div className="h-96 md:h-[600px]">
          {/* Retail Stores */}
          <Card className="p-6 sm:p-8 h-full flex flex-col">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2 font-headline" style={{ wordSpacing: "0.25em", letterSpacing: "0.04em" }}>
              <span>🏪</span> Retail Stores
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Now stocked at leading supermarkets across Hyderabad. </p>
              
            {/* Star Bazaar */}
            <div className="mb-4">
              <p className="text-base sm:text-lg font-semibold mb-2">Star Bazaar</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Kondapur",
                  "Gachibowli",
                  "Panjagutta",
                  "Bowenpally",
                  "Saket",
                  "Alwal",
                  "Vanasthalipuram",
                  "Kharmanghat",
                ].map((loc) => (
                  <span
                    key={`star-${loc}`}
                      onClick={() => handleLocationClick(loc, "Star Bazaar")} // Call handler
                      className="bg-[#ffefe8] text-[#f58351] px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-[#c8d5db] cursor-pointer hover:bg-[#f58351] hover:text-white transition-colors duration-200"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
              
            {/* Qmart */}
            <div>
              <p className="text-base sm:text-lg font-semibold mb-2">Qmart</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Gachibowli", "Banjara Hills"].map((loc) => (
                  <span
                    key={`qmart-${loc}`}
                      onClick={() => handleLocationClick(loc, "Qmart")} // Call handler
                      className="bg-[#ffefe8] text-[#f58351] px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-[#c8d5db] cursor-pointer hover:bg-[#f58351] hover:text-white transition-colors duration-200"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Quick Commerce */}
          {/* <Card className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2 font-headline" style={{ wordSpacing: "0.25em", letterSpacing: "0.04em" }}>
              <span>🚀</span> Quick Commerce
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {quickCommerce.map((service, index) => (
                <span
                  key={index}
                      className="bg-[#ffefe8] text-[#f58351] px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-[#c8d5db]"
                >
                  {service}
                </span>
              ))}
            </div>
          </Card> */}
        </div>

          {/* RIGHT COLUMN: Map Area */}
          <div className="hidden md:block">
            <MapPlaceholder mapQuery={currentMapQuery} />
          </div>
        </div>

        {/* Mobile Map */}
        <div className="md:hidden mb-8">
          <MapPlaceholder
            mapQuery={currentMapQuery}
            className="h-72 rounded-xl bg-white border border-gray-300 shadow-xl overflow-hidden"
          />
        </div>

        {/* Online Ordering & Social CTA */}
        <Card className="p-6 sm:p-8 max-w-5xl mx-auto mb-8 sm:mb-12 bg-white border border-[#c8d5db]">
          <div className="text-center space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-semibold font-headline" style={{ wordSpacing: "0.25em", letterSpacing: "0.04em" }}>
              Our <span className="text-gradient">Social Media</span>
            </h3>

            {/* Online Delivery Apps - MODIFIED TO USE ROUNDED LOGOS */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-muted-foreground font-logo tracking-wide" style={{ wordSpacing: "0.25em", letterSpacing: "0.04em" }}>Order Online:</h4>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                
                {/* Big Basket */}
                <a 
                  href="https://www.bigbasket.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  // Key classes: w-12 h-12, rounded-full, p-1 for slight padding
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border hover:border-[#f58351] hover:shadow-lg transition-all duration-200 group p-1"
                  aria-label="Order from Big Basket"
                >
                  <img 
                    src= "/bb.svg"
                    alt="Big Basket Logo" 
                    // ADDED rounded-full to ensure image is circular
                    className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110 rounded-full" 
                  />
                </a>
                
                <a 
                  href="https://blinkit.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  // Key classes: w-12 h-12, rounded-full, p-1 for slight padding
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border hover:border-[#f58351] hover:shadow-lg transition-all duration-200 group p-1"
                  aria-label="Order from Big Basket"
                >
                  <img 
                    src= "/blinkit."
                    alt="Big Basket Logo" 
                    // ADDED rounded-full to ensure image is circular
                    className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110 rounded-full" 
                  />
                </a>
                
                {/* Amazon Fresh */}
                <a 
                  href="https://www.amazon.in/fresh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border hover:border-[#f58351] hover:shadow-lg transition-all duration-200 group p-1"
                  aria-label="Order from Amazon Fresh"
                >
                  <img 
                    src= "/fresh.png"
                    alt="Amazon Fresh Logo" 
                    // ADDED rounded-full
                    className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110 rounded-full" 
                  />
                 </a>
                
                {/* Flipkart Grocery */}
                <a 
                  href="https://www.flipkart.com/grocery-supermart-store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border hover:border-[#f58351] hover:shadow-lg transition-all duration-200 group p-1"
                  aria-label="Order from Flipkart Grocery"
                >
                  <img 
                    src= "/flipkart.jpeg"
                    alt="Flipkart Grocery Logo" 
                    // ADDED rounded-full to ensure image is circular
                    className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110 rounded-full" 
                  />
                </a>
                
                {/* Instamart (Swiggy) */}
                <a 
                  href="https://www.swiggy.com/instamart" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border hover:border-[#f58351] hover:shadow-lg transition-all duration-200 group p-1"
                  aria-label="Order from Instamart"
                >
                  <img 
                    src= "/instamart.svg"
                    alt="Instamart Logo" 
                    // ADDED rounded-full
                    className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110 rounded-full" 
                  />
                </a>
                
                {/* Zepto */}
                <a 
                  href="https://www.zeptonow.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border hover:border-[#f58351] hover:shadow-lg transition-all duration-200 group p-1"
                  aria-label="Order from Zepto"
                >
                  <img 
                    src= "/zepto.svg"
                    alt="Zepto Logo" 
                    // ADDED rounded-full
                    className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110 rounded-full" 
                  />
                </a>

              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">Click the logo to order online.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              {/* Instagram CTA */}
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto">
                <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="text-left">
                  <p className="text-xs sm:text-sm opacity-90 font-logo tracking-wide" style={{ wordSpacing: "0.2em", letterSpacing: "0.03em" }}>Follow us for updates</p>
                  <a
                    href="https://instagram.com/helloeggs_india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-bold hover:underline font-logo tracking-wide"
                  >
                    @helloeggs_india
                  </a>
                </div>
              </div>

              {/* Bulk Order Phone */}
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="text-left">
                  <p className="text-xs sm:text-sm opacity-90 font-logo tracking-wide" style={{ wordSpacing: "0.2em", letterSpacing: "0.03em" }}>Bulk Orders</p>
                  <a
                    href="tel:+916309416417"
                    className="text-lg sm:text-xl font-bold hover:underline font-logo tracking-wide"
                  >
                    +91 6309 416 417
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Egg Bank Info */}
        <Card className="p-6 sm:p-8 max-w-3xl mx-auto bg-white border border-[#c8d5db]">
          <div className="text-center space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold font-headline" style={{ wordSpacing: "0.25em", letterSpacing: "0.04em" }}>
              Shop now @ <span className="text-gradient">Srinivasa Egg Bank</span>
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-start gap-2 text-left">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#f58351] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base font-medium">Plot No.82, Phase 2, Kavuri Hills,</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Madhapur, Hyderabad, Telangana 500081</p>
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
    </section>
  );
};

export default Availability;