/*
 * Design Philosophy: Liquid Carbon & Gold
 * Component: Premium Footer
 */

import { Link } from "wouter";
import { Mail, Phone, MapPin, Printer, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "../const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-border/40 bg-card/40 py-16 backdrop-blur-md overflow-hidden">
      {/* Background Glows */}
      <div className="absolute bottom-0 left-1/4 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute top-0 right-1/4 -z-10 h-64 w-64 rounded-full bg-secondary/5 blur-[120px]" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Monogram & Message */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 bg-gradient-to-br from-primary/20 to-secondary/10">
                <span className="font-serif text-lg font-bold text-gradient-gold">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wider text-gradient-gold">
                  STRATIFY
                </span>
                <span className="text-[9px] tracking-[0.25em] text-muted-foreground font-medium uppercase">
                  Consulting & Landscape
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              산사태로 무너진 사면을 살리고, 도시의 공간에 지속가능한 푸른 숨결을 더합니다. 
              특허 출원 중인 독자적인 다층복합보강구조 공법과 ESG 탄소흡수 정원 기술로 
              다음 세대를 위한 최상의 환경을 설계합니다.
            </p>
            <div className="flex gap-4 text-xs text-amber-400 font-medium">
              <span className="flex items-center gap-1.5 border-r border-border/60 pr-4">여성기업 인증</span>
              <span className="flex items-center gap-1.5 border-r border-border/60 pr-4">특허 공법 보유</span>
              <span>ESG 친환경 경영</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-gradient-gold uppercase">
              주요 서비스
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-amber-400 flex items-center gap-1 group">
                  친환경 사면복원·녹화 <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 flex items-center gap-1 group">
                  공공·산업단지 조경공사 <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 flex items-center gap-1 group">
                  연간 조경 유지관리 계약 <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 flex items-center gap-1 group">
                  실내 플랜테리어 & 스마트 케어 <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-gradient-gold uppercase">
              고객 지원 및 문의
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <span>대표전화: {COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Printer className="h-4 w-4 text-amber-400 shrink-0" />
                <span>팩스: {COMPANY_INFO.fax}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <span>이메일: {COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-col gap-1 sm:items-start">
            <p>
              {COMPANY_INFO.name} | 대표이사 {COMPANY_INFO.ceo} | 사업자등록번호: {COMPANY_INFO.registrationNumber}
            </p>
            <p>
              조경식재공사업 면허 등록 완료 | 자본금 1억 5천만원 | {COMPANY_INFO.evaluation}
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p>© {currentYear} {COMPANY_INFO.brandName}. All rights reserved.</p>
            <p className="text-[10px] text-muted-foreground/60 mt-0.5">From the Roots to the Future.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
