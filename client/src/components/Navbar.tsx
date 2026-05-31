/*
 * Design Philosophy: Liquid Carbon & Gold
 * Component: Premium Navigation Header
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, ShieldCheck, Award, FlameKindling } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "홈", path: "/" },
    { name: "회사 소개", path: "/about" },
    { name: "사업 영역", path: "/services" },
    { name: "시공 실적", path: "/portfolio" },
    { name: "인사이트 랩", path: "/insights" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 border-b border-border/40 backdrop-blur-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 bg-gradient-to-br from-primary/20 to-secondary/10 transition-transform duration-500 group-hover:rotate-12">
            <span className="font-serif text-lg font-bold text-gradient-gold">S</span>
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-amber-500 to-purple-600 opacity-0 blur transition-opacity duration-500 group-hover:opacity-30" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-wider text-gradient-gold group-hover:opacity-80 transition-opacity">
              STRATIFY
            </span>
            <span className="text-[9px] tracking-[0.25em] text-muted-foreground font-medium uppercase">
              Consulting & Landscape
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <span
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer py-1 ${
                    isActive
                      ? "text-amber-400"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
                  )}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Certifications & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-1 text-xs text-purple-300 font-medium">
            <Award className="h-3.5 w-3.5 text-amber-400" />
            여성기업인증
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-xs text-amber-400 font-medium">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
            특허 공법 보유
          </div>
          <Link href="/contact">
            <Button className="btn-gold h-9 text-xs px-4 cursor-pointer">
              무료 진단 및 문의 <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 border-b border-border/50 backdrop-blur-xl animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                  <span
                    className={`block text-base font-medium py-2 transition-colors cursor-pointer ${
                      isActive ? "text-amber-400 pl-2 border-l-2 border-amber-400" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
            <div className="h-px bg-border/50 my-2" />
            <div className="flex flex-wrap gap-2.5">
              <div className="flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-1 text-xs text-purple-300">
                <Award className="h-3 w-3 text-amber-400" />
                여성기업인증
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-xs text-amber-400">
                <ShieldCheck className="h-3 w-3 text-amber-400" />
                특허 공법 보유
              </div>
            </div>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="btn-gold w-full py-2.5 text-sm">
                무료 진단 및 문의 <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
