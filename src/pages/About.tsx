import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Users, Award, Heart } from "lucide-react";

const About = () => {
    const values = [
        {
            icon: <Heart className="w-8 h-8 text-red-500" />,
            title: "Quality First",
            description: "We prioritize the highest quality standards in every step of our egg production process."
        },
        {
            icon: <Users className="w-8 h-8 text-blue-500" />,
            title: "Family Heritage",
            description: "A family-owned business with decades of experience in poultry farming and nutrition."
        },
        {
            icon: <Award className="w-8 h-8 text-yellow-500" />,
            title: "Innovation",
            description: "Leading the industry with innovative nutrition enhancement techniques for healthier eggs."
        }
    ];

    const timeline = [
        {
            year: "1985",
            title: "Farm Established",
            description: "Srinivasa Farms was founded with a vision to provide quality poultry products."
        },
        {
            year: "2010",
            title: "Nutrition Research",
            description: "Started research on nutritionally enhanced eggs for better health benefits."
        },
        {
            year: "2020",
            title: "Hello Eggs Launch",
            description: "Launched Hello Eggs with D3, DHA, Selenium, and Omega 3 enrichment."
        },
        {
            year: "2025",
            title: "Market Expansion",
            description: "Expanded to major retail chains and quick commerce platforms across India."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-50/60 via-orange-50/40 to-amber-50/60">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50/80 via-yellow-50/60 to-amber-50/80">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        About <span className="text-gradient">Srinivasa Farms</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        For over three decades, we've been committed to providing the highest quality,
                        nutritionally enhanced eggs that support your health at every stage of life.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Founded in 1985, Srinivasa Farms began as a small family poultry operation with a simple mission:
                                to provide fresh, quality eggs to our local community. Over the years, we've grown into a trusted
                                name in the industry, but our core values remain unchanged.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6">
                                Our breakthrough came when we developed Hello Eggs - the first nutritionally enhanced eggs in India
                                that provide essential nutrients like Vitamin D3, DHA, Selenium, and Omega 3. Today, we're proud
                                to serve families across the country with eggs that truly make a difference in their health.
                            </p>
                            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                                Learn More About Our Process
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                                <div className="text-8xl">🏡</div>
                            </div>
                            <div className="absolute -top-4 -right-4 bg-white shadow-lg px-4 py-2 rounded-full text-sm font-semibold text-orange-600">
                                Family Owned Since 1985
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-white/60 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Our Values</h2>
                        <p className="text-xl text-muted-foreground">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
                        <p className="text-xl text-muted-foreground">
                            Four decades of growth and innovation
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex items-center mb-8">
                                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {item.year}
                                </div>
                                <div className="ml-8 flex-1">
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-20 bg-gradient-to-b from-amber-50/40 to-orange-50/60">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-xl text-muted-foreground">
                            We'd love to hear from you
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <Card className="p-6 text-center">
                            <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                            <p className="text-muted-foreground">
                                Plot No.82, Phase 2, Kavuri Hills,<br />
                                Madhapur, Hyderabad, Telangana 500081
                            </p>
                        </Card>
                        <Card className="p-6 text-center">
                            <Phone className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Call Us</h3>
                            <p className="text-muted-foreground">
                                <a href="tel:+916309416417" className="hover:text-orange-600">+91 6309 416 417</a>
                            </p>
                        </Card>
                        <Card className="p-6 text-center">
                            <Mail className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Email Us</h3>
                            <p className="text-muted-foreground">
                                <a href="mailto:info@srinivasafarms.com" className="hover:text-orange-600">info@srinivasafarms.com</a>
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
