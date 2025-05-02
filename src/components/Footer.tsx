"use client";
import { config } from "@/config";
import { Rss, Compass } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 mb-12 border-t border-cardcompass-lightGray pt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Compass
            className="h-4 w-4 mr-2 text-themeText-accent"
            strokeWidth={2}
          />
          <div className="text-sm text-themeText-primary">
            © {config.blog.copyright} {new Date().getFullYear()}
          </div>
        </div>
        <div className="text-xs text-themeText-secondary hidden lg:block">
          <Link
            href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
            className="hover:text-themeText-accent transition-colors"
          >
            Blog powered by wisp
          </Link>
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
      <div className="text-xs text-themeText-secondary lg:hidden mt-4">
        <Link
          href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
          className="hover:text-themeText-accent transition-colors"
        >
          Blog powered by wisp
        </Link>
      </div>
      <div className="mt-4 text-xs text-themeText-secondary text-center">
        <span className="block">
          &quote;CardCompass - Navigate Your Perfect Card&quote;
        </span>
      </div>
    </section>
  );
};
