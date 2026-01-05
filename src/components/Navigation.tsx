import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Home, HelpCircle, Info, Phone } from "lucide-react";
import eggImage from "/egg.png";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
        { path: "/about", label: "About", icon: <Info className="w-4 h-4" /> },
        { path: "/faqs", label: "FAQs", icon: <HelpCircle className="w-4 h-4" /> },
        { path: "/contact", label: "Contact", icon: <Phone className="w-4 h-4" /> }
    ];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#c8d5db]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-8 h-10 flex-shrink-0">
                            <img
                                src={eggImage}
                                alt="Hello Eggs Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-primary font-logo">Hello</span>
                            <span className="text-sm font-semibold text-muted-foreground -mt-1 font-logo tracking-[0.2em]">EGGS</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Button
                                key={item.path}
                                asChild
                                variant={isActive(item.path) ? "default" : "ghost"}
                                className={`${isActive(item.path)
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-primary/10 hover:text-primary"} font-logo tracking-wide`}
                            >
                                <Link to={item.path} className="flex items-center gap-2">
                                    {item.icon}
                                    {item.label}
                                </Link>
                            </Button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="sm" className="md:hidden">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80">
                            <div className="flex flex-col h-full">
                                {/* Mobile Logo */}
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-8 h-10 flex-shrink-0">
                                        <img
                                            src={eggImage}
                                            alt="Hello Eggs Logo"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xl font-bold text-orange-600">Hello</span>
                                        <span className="text-sm font-semibold text-muted-foreground -mt-1">EGGS</span>
                                    </div>
                                </div>

                                {/* Mobile Navigation */}
                                <div className="flex flex-col gap-2">
                                    {navItems.map((item) => (
                                        <Button
                                            key={item.path}
                                            asChild
                                            variant={isActive(item.path) ? "default" : "ghost"}
                                            className={isActive(item.path)
                                                ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white justify-start"
                                                : "justify-start hover:bg-orange-50 hover:text-orange-600"
                                            }
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <Link to={item.path} className="flex items-center gap-3">
                                                {item.icon}
                                                {item.label}
                                            </Link>
                                        </Button>
                                    ))}
                                </div>

                                {/* Mobile Contact Info */}
                                <div className="mt-auto pt-8 border-t">
                                    <div className="space-y-3">
                                        <p className="text-sm font-semibold text-muted-foreground font-logo tracking-wide">Quick Contact</p>
                                        <div className="space-y-2">
                                            <a
                                                href="tel:+916309416417"
                                                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-logo tracking-wide"
                                            >
                                                <Phone className="w-4 h-4" />
                                                +91 6309 416 417
                                            </a>
                                            <a
                                                href="mailto:info@srinivasafarms.com"
                                                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-logo tracking-wide"
                                            >
                                                <Info className="w-4 h-4" />
                                                info@srinivasafarms.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
