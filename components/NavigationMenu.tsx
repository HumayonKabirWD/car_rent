import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import {
  Car,
  Search,
  Calendar,
  MapPin,
  Info,
  Phone,
  Settings,
  UserCircle,
  CreditCard,
  MessageSquare,
  Shield,
  FileText,
  Home
} from "lucide-react";

const NavigationMenu = () => {
  const pathname = usePathname();
  
  const sections = [
    {
      title: "Main",
      items: [
        {
          name: "Home",
          path: "/",
          icon: Home,
          description: "Homepage with search and featured offers"
        },
        {
          name: "Vehicle Fleet",
          path: "/fleet",
          icon: Car,
          description: "Browse our complete vehicle collection"
        },
        {
          name: "Book Now",
          path: "/booking",
          icon: Calendar,
          description: "Make a reservation"
        },
        {
          name: "Locations",
          path: "/locations",
          icon: MapPin,
          description: "Our pickup and drop-off points"
        }
      ]
    },
    {
      title: "Customer Service",
      items: [
        {
          name: "Contact Us",
          path: "/contact",
          icon: Phone,
          description: "Get in touch with our team"
        },
        {
          name: "FAQ",
          path: "/faq",
          icon: MessageSquare,
          description: "Frequently asked questions"
        },
        {
          name: "Support",
          path: "/support",
          icon: Info,
          description: "Customer support and help"
        }
      ]
    },
    {
      title: "Account",
      items: [
        {
          name: "My Profile",
          path: "/profile",
          icon: UserCircle,
          description: "Manage your account"
        },
        {
          name: "My Bookings",
          path: "/bookings",
          icon: Calendar,
          description: "View and manage reservations"
        },
        {
          name: "Payment Methods",
          path: "/payments",
          icon: CreditCard,
          description: "Manage payment options"
        }
      ]
    },
    {
      title: "Information",
      items: [
        {
          name: "Terms & Conditions",
          path: "/terms",
          icon: FileText,
          description: "Rental terms and conditions"
        },
        {
          name: "Privacy Policy",
          path: "/privacy",
          icon: Shield,
          description: "Privacy and data protection"
        },
        {
          name: "Rental Policies",
          path: "/policies",
          icon: Settings,
          description: "Our rental policies and guidelines"
        }
      ]
    }
  ];

  return (
    <nav className="space-y-6">
      {sections.map((section) => (
        <div key={section.title} className="space-y-3">
          <h2 className="text-lg font-semibold px-3">{section.title}</h2>
          <div className="space-y-1">
            {section.items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === item.path ? "bg-accent" : "transparent"
                )}
              >
                <item.icon className="h-4 w-4" />
                <div className="flex flex-col">
                  <span>{item.name}</span>
                  <span className="text-xs text-muted-foreground">{item.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default NavigationMenu;