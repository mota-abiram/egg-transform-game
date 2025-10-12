import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone, Mail } from "lucide-react";

const FAQs = () => {
    const faqs = [
        {
            question: "What makes Hello Eggs different from regular eggs?",
            answer: "Hello Eggs are nutritionally enhanced with Vitamin A, Vitamin D3, DHA, Selenium, and Omega 3. These essential nutrients are naturally incorporated into the egg through our special feed formulation, making each egg a powerhouse of nutrition."
        },
        {
            question: "How are Hello Eggs nutritionally enhanced?",
            answer: "Our hens are fed a specially formulated diet that includes natural sources of Vitamin A, D3, DHA, Selenium, and Omega 3. This process ensures that these nutrients are naturally incorporated into the egg yolk and white, making them more nutritious than regular eggs."
        },
        {
            question: "Are Hello Eggs safe for children?",
            answer: "Yes! Hello Eggs are completely safe for children and are actually beneficial for their growth and development. The DHA content supports brain development, while Vitamin D3 helps with bone health and immune system support."
        },
        {
            question: "How long do Hello Eggs stay fresh?",
            answer: "Hello Eggs maintain their freshness for up to 30 days when stored properly in the refrigerator. We ensure farm-to-table delivery within 24 hours to guarantee maximum freshness."
        },
        {
            question: "Where can I buy Hello Eggs?",
            answer: "Hello Eggs are available at major retail stores like Big Bazaar, Reliance Fresh, Spencer's, More, V-Mart, Star Bazaar, Ratnadeep, Metro, and D-Mart. You can also order online through Instamart, Zepto, Blinkit, and Dunzo."
        },
        {
            question: "What is the nutritional value of Hello Eggs?",
            answer: "Each Hello Egg contains approximately 6g of protein, 5g of healthy fats, and is enriched with 25% more Vitamin A, 25% more Vitamin D3, 200mg of DHA, 15mcg of Selenium, and 100mg of Omega 3 compared to regular eggs."
        },
        {
            question: "Are Hello Eggs suitable for vegetarians?",
            answer: "Hello Eggs are suitable for ovo-vegetarians (vegetarians who consume eggs). Our hens are fed only vegetarian feed, and no animal products are used in our production process."
        },
        {
            question: "How do I store Hello Eggs properly?",
            answer: "Store Hello Eggs in the refrigerator at 4°C or below. Keep them in their original carton to prevent absorption of odors and maintain freshness. Avoid storing them in the refrigerator door as temperature fluctuations can affect quality."
        },
        {
            question: "Can Hello Eggs help with specific health conditions?",
            answer: "Hello Eggs can support various health aspects: DHA for brain and eye health, Vitamin D3 for bone strength and immune function, Selenium for antioxidant protection, and Omega 3 for heart health. However, always consult your healthcare provider for specific health concerns."
        },
        {
            question: "What is Srinivasa Farms' quality assurance process?",
            answer: "We follow strict quality control measures including regular health checks for our hens, clean and hygienic farm conditions, proper feed quality monitoring, and rigorous testing of our eggs for safety and nutritional content before packaging."
        }
    ];

    const contactMethods = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            description: "Speak directly with our customer service team",
            action: "Call +91 6309 416 417",
            href: "tel:+916309416417"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            description: "Send us your questions via email",
            action: "Send Email",
            href: "mailto:info@srinivasafarms.com"
        },
        {
            icon: <HelpCircle className="w-6 h-6" />,
            title: "Visit Our Farm",
            description: "Schedule a visit to see our operations",
            action: "Book a Visit",
            href: "tel:+916309416417"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-50/60 via-orange-50/40 to-amber-50/60">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50/80 via-yellow-50/60 to-amber-50/80">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Find answers to common questions about Hello Eggs, our nutrition enhancement process,
                        and how to get the most out of your eggs.
                    </p>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border border-orange-200 rounded-lg px-6">
                                    <AccordionTrigger className="text-left hover:no-underline py-6">
                                        <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-6">
                                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-20 bg-white/60 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
                        <p className="text-xl text-muted-foreground">
                            Our team is here to help you with any questions about Hello Eggs
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {contactMethods.map((method, index) => (
                            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white">
                                        {method.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                                <p className="text-muted-foreground mb-4">{method.description}</p>
                                <Button asChild className="w-full">
                                    <a href={method.href}>{method.action}</a>
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Facts */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Quick Facts About Hello Eggs</h2>
                        <p className="text-xl text-muted-foreground">
                            Everything you need to know at a glance
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <Card className="p-6 text-center">
                            <div className="text-3xl mb-3">🥚</div>
                            <h3 className="text-lg font-bold mb-2">100% Natural</h3>
                            <p className="text-sm text-muted-foreground">No artificial additives or preservatives</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="text-3xl mb-3">🌿</div>
                            <h3 className="text-lg font-bold mb-2">Vegetarian Feed</h3>
                            <p className="text-sm text-muted-foreground">Hens fed only vegetarian diet</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="text-3xl mb-3">⚡</div>
                            <h3 className="text-lg font-bold mb-2">24hr Delivery</h3>
                            <p className="text-sm text-muted-foreground">Farm to table in 24 hours</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="text-3xl mb-3">🏆</div>
                            <h3 className="text-lg font-bold mb-2">Quality Assured</h3>
                            <p className="text-sm text-muted-foreground">Cleaned, graded, and stamped</p>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQs;
