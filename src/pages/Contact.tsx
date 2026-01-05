import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        toast.success("Message sent successfully!", {
            description: "We'll get back to you within 24 hours."
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Our Farm",
            details: [
                "Plot No.82, Phase 2, Kavuri Hills",
                "Madhapur, Hyderabad, Telangana 500081"
            ],
            action: "Get Directions",
            href: "https://maps.google.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            details: [
                "+91 6309 416 417",
                "Mon - Sat: 9:00 AM - 6:00 PM"
            ],
            action: "Call Now",
            href: "tel:+916309416417"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            details: [
                "info@srinivasafarms.com",
                "support@srinivasafarms.com"
            ],
            action: "Send Email",
            href: "mailto:info@srinivasafarms.com"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Business Hours",
            details: [
                "Monday - Friday: 9:00 AM - 6:00 PM",
                "Saturday: 9:00 AM - 4:00 PM",
                "Sunday: Closed"
            ],
            action: "Schedule Visit",
            href: "tel:+916309416417"
        }
    ];

    const quickLinks = [
        { title: "Product Information", href: "/faqs", isInternal: true },
        { title: "Order Hello Eggs", href: "/", isInternal: true },
        { title: "Farm Visit", href: "tel:+916309416417", isInternal: false },
        { title: "Bulk Orders", href: "tel:+916309416417", isInternal: false },
        { title: "Retailer Partnership", href: "mailto:partnerships@srinivasafarms.com", isInternal: false },
        { title: "Media Inquiries", href: "mailto:media@srinivasafarms.com", isInternal: false }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-50/60 via-orange-50/40 to-amber-50/60">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50/80 via-yellow-50/60 to-amber-50/80">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Contact <span className="text-gradient">Us</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We'd love to hear from you! Get in touch with our team for any questions,
                        feedback, or to learn more about Hello Eggs.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <MessageSquare className="w-6 h-6 text-orange-500" />
                                <h2 className="text-3xl font-bold">Send us a Message</h2>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name">Full Name *</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email Address *</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="subject">Subject *</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="mt-1"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>
                                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <Card key={index} className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                                            <div className="space-y-1 mb-4">
                                                {info.details.map((detail, idx) => (
                                                    <p key={idx} className="text-muted-foreground">{detail}</p>
                                                ))}
                                            </div>
                                            <Button asChild variant="outline" size="sm">
                                                <a href={info.href}>{info.action}</a>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-20 bg-white/60 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Quick Links</h2>
                        <p className="text-xl text-muted-foreground">
                            Find what you're looking for quickly
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {quickLinks.map((link, index) => (
                            <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300">
                                <Button asChild variant="ghost" className="w-full justify-start h-auto p-0">
                                    {link.isInternal ? (
                                        <Link to={link.href} className="w-full p-2 text-left">
                                            <span className="text-foreground hover:text-orange-600">{link.title}</span>
                                        </Link>
                                    ) : (
                                        <a href={link.href} className="w-full p-2 text-left">
                                            <span className="text-foreground hover:text-orange-600">{link.title}</span>
                                        </a>
                                    )}
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Find Us</h2>
                        <p className="text-xl text-muted-foreground">
                            Visit our farm in Hyderabad
                        </p>
                    </div>
                    <Card className="p-8">
                        <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg h-96 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Srinivasa Farms</h3>
                                <p className="text-muted-foreground mb-4">
                                    Plot No.82, Phase 2, Kavuri Hills<br />
                                    Madhapur, Hyderabad, Telangana 500081
                                </p>
                                <Button asChild>
                                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                                        Open in Google Maps
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default Contact;
