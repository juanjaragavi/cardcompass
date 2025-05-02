"use client";
import { config } from "@/config";
import { Rss } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// Footer navigation links
const footerNavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

export const Footer: FunctionComponent = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="mt-8 md:mt-16 mb-6 border-t border-cardcompass-lightGray pt-8">
      {/* Top Section with Logo, Copyright and Actions */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          {mounted ? (
            <Image
              src={
                resolvedTheme === "dark"
                  ? "/images/cardcompass-logo-footer-dark.webp"
                  : "/images/cardcompass-logo-footer-light.webp"
              }
              alt="CardCompass Logo"
              width={160}
              height={160}
              className="mr-2"
            />
          ) : (
            <div className="h-[160px] w-[160px] mr-2 bg-transparent" />
          )}
        </div>
        <div>
          <Link href="/rss">
            <Button
              variant="ghost"
              className="p-2 text-themeText-primary hover:text-themeText-accent"
            >
              <Rss className="w-4 h-4" />
            </Button>
          </Link>
          <DarkModeToggle />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
        {footerNavLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-themeText-secondary hover:text-themeText-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

       {/* Tagline */}
       <div className="text-md text-themeText-secondary text-center mb-4">
        <span className="block font-semibold">
          CardCompass - Navigate Your Perfect Card
        </span>
      </div>

      {/* Copyright Notice */}
      <div className="text-sm text-themeText-secondary text-center mb-4">
        <span className="block">
          © {new Date().getFullYear()} CardCompass. All rights reserved.
        </span>
      </div>

      {/* Legal Disclaimer */}
      <div className="text-xs leading-relaxed text-themeText-secondary bg-cardcompass-lightGray dark:bg-opacity-10 p-4 rounded-lg">
        <h3 className="font-semibold mb-2 text-themeText-primary">
          Legal Disclaimer
        </h3>
        <p>
          CardCompass places a paramount emphasis on the caliber of information
          it disseminates, unequivocally affirming the meticulous vetting
          undertaken by its dedicated team. Nonetheless, it is imperative to
          underscore that CardCompass refrains from extending any investment
          recommendations and explicitly disclaims any liability pertaining to
          potential losses, damages (whether direct, consequential, or
          incidental), associated costs, or foregone profits. CardCompass is an
          editorial and informational website committed to providing valuable
          insights and assistance to its users. CardCompass categorically does
          not, under any circumstance, request monetary contributions in
          exchange for the release of financial products, be it credit cards,
          financing options, or loans.
        </p>
      </div>
    </footer>
  );
};
