"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Blog", href: "/" },
  { name: "About", href: "/about" },
];

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="hidden md:flex items-center">
        {menuItems.map((item) => (
          <div key={item.href} className="ml-4 md:ml-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "text-themeText-primary hover:text-themeText-accent transition-colors duration-200",
                pathname === item.href && "font-semibold"
              )}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" className="text-themeText-primary" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2 text-themeText-primary hover:text-themeText-accent transition-colors duration-200",
                      pathname === item.href && "font-semibold"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="flex items-center justify-between mt-8 md:mt-16 mb-12">
      <Link href="/" className="flex items-center">
        {mounted ? (
          <Image
            src={
              resolvedTheme === "dark"
                ? "/images/cardcompass-logo-dark.webp"
                : "/images/cardcompass-logo-light.webp"
            }
            alt="CardCompass Logo"
            width={80}
            height={80}
            className="mr-2"
          />
        ) : (
          <div className="h-8 w-8 mr-2 bg-transparent" /> /* Placeholder while loading */
        )}
        <h1 className="text-xl md:text-3xl font-bold tracking-tighter leading-tight text-themeText-primary">
          {config.blog.name}
        </h1>
      </Link>
      <Navigation />
    </section>
  );
};
