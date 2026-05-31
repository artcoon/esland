import { Link } from "wouter";
import { COMPANY_INFO } from "@/const";
import { Trees, Mail, Phone, MapPin, Printer, ArrowUpRight, ShieldCheck, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#F5F6F0] border-t border-border/80 text-foreground pt-16 pb-8 transition-colors duration-300">
      <div className="container">
        {/* Brand Badges and Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pb-10 border-b border-border/60">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur border border-border/40">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h5 className="font-serif text-sm font-bold text-foreground">여성기업 인증 기업</h5>
              <p className="text-xs text-muted-foreground font-medium">나라장터 수의계약 한도 5천만원 확대 적용</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur border border-border/40">
            <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h5 className="font-serif text-sm font-bold text-foreground">조경식재·시설물공사업 면허</h5>
              <p className="text-xs text-muted-foreground font-medium">제 2020-16-05호 정식 등록 법인</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur border border-border/40">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h5 className="font-serif text-sm font-bold text-foreground">신용등급 EW등급</h5>
              <p className="text-xs text-muted-foreground font-medium">CREVIEW 2026 평가 기준 입찰 보증 완비</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Company Brand Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
                <Trees className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-black tracking-tight text-foreground leading-none">
                  (주)이에스조경
                </span>
                <span className="text-[10px] font-bold text-primary tracking-wider uppercase mt-0.5 leading-none">
                  ES LANDSCAPE
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
              건설업 조경식재공사업 면허 보유 전문기업으로서, 다층복합보강구조 특허 시스템과 바이오차 토양 공법을 융합한 차세대 친환경 ESG 조경을 선도합니다.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 flex flex-col gap-4 md:pl-10">
            <h4 className="font-serif text-sm font-bold tracking-wider text-foreground uppercase">
              주요 서비스
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground font-medium">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  친환경 사면복원 · 녹화 <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  공공 · 산업단지 조경 시공 <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  연간 유지관리 정기계약 <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  실내 플랜테리어 & 스마트 케어 <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-serif text-sm font-bold tracking-wider text-foreground uppercase">
              고객 지원 및 문의
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>대표전화: {COMPANY_INFO.tel}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Printer className="h-4 w-4 text-primary shrink-0" />
                <span>팩스: {COMPANY_INFO.fax}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>이메일: {COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-col gap-1 sm:items-start">
            <p className="font-medium text-center sm:text-left">
              {COMPANY_INFO.name} | 대표이사 {COMPANY_INFO.ceo} | 사업자등록번호: {COMPANY_INFO.businessNo} | 법인등록번호: {COMPANY_INFO.corpNo}
            </p>
            <p className="text-center sm:text-left">
              본사: {COMPANY_INFO.address} | {COMPANY_INFO.licenseNo} | {COMPANY_INFO.capacity}
            </p>
          </div>
          <div className="text-center sm:text-right font-medium">
            <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
            <p className="text-[10px] text-primary/80 mt-0.5 font-bold">From the Roots to the Future.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
