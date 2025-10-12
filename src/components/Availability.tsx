import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, Send } from "lucide-react";

const Availability = () => {
  const retailers = [
    "Big Bazaar", "Reliance Fresh", "Spencer's", "More", "V-Mart",
    "Star Bazaar", "Ratnadeep", "Metro", "D-Mart"
  ];

  const quickCommerce = [
    "Instamart", "Zepto", "Blinkit", "Dunzo"
  ];

  const cities = [
    "Bangalore", "Hyderabad", "Chennai", "Mumbai", "Pune", "Delhi",
    "Kochi", "Coimbatore", "Mysore", "Vizag", "Vijayawada", "Guntur",
    "Rajahmundry", "Kakinada", "Nellore", "Tirupati"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/40 to-orange-50/60 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-xl font-bold">
              We Are Now Available
            </span>
          </div>
          <p className="text-xl text-muted-foreground">
            Find Hello Eggs at your nearest store or order online
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {/* Retail Stores */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>🏪</span> Retail Stores
            </h3>
            <div className="flex flex-wrap gap-3">
              {retailers.map((store, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {store}
                </span>
              ))}
            </div>
          </Card>

          {/* Quick Commerce */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>🚀</span> Quick Commerce
            </h3>
            <div className="flex flex-wrap gap-3">
              {quickCommerce.map((service, index) => (
                <span
                  key={index}
                  className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* Cities Available */}
        <Card className="p-8 max-w-5xl mx-auto mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-center justify-center">
            <span>🌍</span> Available in Major Cities
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((city, index) => (
              <span
                key={index}
                className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>
        </Card>

        {/* Online Ordering & Social CTA */}
        <Card className="p-8 max-w-5xl mx-auto mb-12 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold">
              Online Ordering & <span className="text-gradient">Social Media</span>
            </h3>

            {/* Online Delivery Apps */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-muted-foreground">Order Online:</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <span className="text-sm font-semibold text-gray-700">Big Basket</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <span className="text-sm font-semibold text-gray-700">Amazon Fresh</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <span className="text-sm font-semibold text-gray-700">Flipkart Grocery</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <span className="text-sm font-semibold text-gray-700">Instamart</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <span className="text-sm font-semibold text-gray-700">Zepto</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Instagram CTA */}
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Instagram className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-sm opacity-90">Follow us for updates</p>
                  <a
                    href="https://instagram.com/helloeggs_india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold hover:underline"
                  >
                    @helloeggs_india
                  </a>
                </div>
              </div>

              {/* Bulk Order Phone */}
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Phone className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-sm opacity-90">Bulk Orders</p>
                  <a
                    href="tel:+916309416417"
                    className="text-xl font-bold hover:underline"
                  >
                    +91 6309 416 417
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Egg Bank Info */}
        <Card className="p-8 max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold">
              Shop now @ <span className="text-gradient">Srinivasa Egg Bank</span>
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-start gap-2 text-left">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Plot No.82, Phase 2, Kavuri Hills,</p>
                  <p className="text-muted-foreground">Madhapur, Hyderabad, Telangana 500081</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="tel:+916309416417">
                  <Phone className="w-4 h-4" />
                  +91 6309 416 417
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
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
