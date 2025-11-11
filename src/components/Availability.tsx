import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, Send } from "lucide-react";

const Availability = () => {
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-amber-50/40 to-orange-50/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-bold">
              We Are Available!
            </span>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
          Find Hello Eggs – India’s 1st Enriched Brown Eggs with D3 & DHA
          at your nearest store or get them delivered to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-6 sm:mb-8">
          {/* Retail Stores */}
          <Card className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span>🏪</span> Retail Stores
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Now stocked at leading supermarkets across Hyderabad
            </p>
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
                    className="bg-primary/10 text-primary px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
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
                    className="bg-primary/10 text-primary px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Quick Commerce */}
          <Card className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span>🚀</span> Quick Commerce
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {quickCommerce.map((service, index) => (
                <span
                  key={index}
                  className="bg-secondary/10 text-secondary px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* Cities Available */}
        {/* <Card className="p-6 sm:p-8 max-w-5xl mx-auto mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-center justify-center">
            <span>🌍</span> Available in Major Cities
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {cities.map((city, index) => (
              <span
                key={index}
                className="bg-accent/10 text-accent px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>
        </Card> */}

        {/* Online Ordering & Social CTA */}
        <Card className="p-6 sm:p-8 max-w-5xl mx-auto mb-8 sm:mb-12 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="text-center space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Our <span className="text-gradient">Social Media</span>
            </h3>

            {/* Online Delivery Apps */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-muted-foreground">Order Online:</h4>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-sm border">
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Big Basket</span>
                </div>
                <div className="bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-sm border">
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Amazon Fresh</span>
                </div>
                <div className="bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-sm border">
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Flipkart Grocery</span>
                </div>
                <div className="bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-sm border">
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Instamart</span>
                </div>
                <div className="bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-sm border">
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Zepto</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              {/* Instagram CTA */}
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto">
                <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="text-left">
                  <p className="text-xs sm:text-sm opacity-90">Follow us for updates</p>
                  <a
                    href="https://instagram.com/helloeggs_india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-bold hover:underline"
                  >
                    @helloeggs_india
                  </a>
                </div>
              </div>

              {/* Bulk Order Phone */}
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="text-left">
                  <p className="text-xs sm:text-sm opacity-90">Bulk Orders</p>
                  <a
                    href="tel:+916309416417"
                    className="text-lg sm:text-xl font-bold hover:underline"
                  >
                    +91 6309 416 417
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Egg Bank Info */}
        <Card className="p-6 sm:p-8 max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="text-center space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Shop now @ <span className="text-gradient">Srinivasa Egg Bank</span>
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-start gap-2 text-left">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base font-medium">Plot No.82, Phase 2, Kavuri Hills,</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Madhapur, Hyderabad, Telangana 500081</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="gap-2 text-sm sm:text-base" asChild>
                <a href="tel:+916309416417">
                  <Phone className="w-4 h-4" />
                  +91 6309 416 417
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-sm sm:text-base" asChild>
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
