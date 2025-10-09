import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const Availability = () => {
  const retailers = [
    "Big Bazaar", "Reliance Fresh", "Spencer's", "More", "V-Mart",
    "Star Bazaar", "Ratnadeep", "Metro", "D-Mart"
  ];

  const quickCommerce = [
    "Instamart", "Zepto", "Blinkit", "Dunzo"
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
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
