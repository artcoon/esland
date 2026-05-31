/*
 * Design Philosophy: Liquid Carbon & Gold
 * Page: Home Page (Main Landing)
 */

import { useState } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Trees, 
  CalendarRange, 
  Leaf, 
  ShieldAlert,
  ChevronRight,
  TrendingUp,
  FileText,
  UserCheck,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SERVICES, CASE_STUDIES, CEO_MESSAGE, COMPANY_INFO } from "../const";

export default function Home() {
  const [activeService, setActiveService] = useState<string>("slope");

  // Map icon strings to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert": return <ShieldAlert className="h-6 w-6 text-amber-400" />;
      case "Trees": return <Trees className="h-6 w-6 text-amber-400" />;
      case "CalendarRange": return <CalendarRange className="h-6 w-6 text-amber-400" />;
      case "Leaf": return <Leaf className="h-6 w-6 text-amber-400" />;
      default: return <Leaf className="h-6 w-6 text-amber-400" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-24">
        
        {/* SECTION 1: Cinematic Split Hero Section */}
        <section className="relative min-h-[90vh] flex items-center py-12">
          {/* Subtle background mesh image */}
          <div className="absolute inset-0 -z-20 opacity-30 mix-blend-color-dodge">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/hero_bg-B6FqnpDZCvDaXrLApbTrWh.webp" 
              alt="Luxury Abstract Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-transparent" />

          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-amber-400 uppercase max-w-max">
                <Sparkles className="h-4 w-4 animate-pulse text-amber-400" />
                뿌리에서 미래로 — 친환경 조경의 새로운 표준
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                자연을 복원하고,<br />
                <span className="text-gradient-gold">지속가능한 가치</span>를<br />
                설계합니다.
              </h1>
              
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                특허 출원 중인 <strong>다층복합보강구조 시스템</strong>과 친환경 바이오차 공법으로 무너진 절·급경사 사면을 살려내며, 도심 속에 탄소를 흡수하는 고품격 조경 솔루션을 제안합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/contact">
                  <Button className="btn-gold w-full sm:w-auto text-sm font-semibold h-12 px-8 cursor-pointer">
                    무료 현장 진단 및 상담 <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button className="btn-outline-gold w-full sm:w-auto text-sm font-semibold h-12 px-8 cursor-pointer">
                    사업 영역 탐색
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/20 mt-4">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold text-gradient-gold">5년+</span>
                  <span className="text-xs text-muted-foreground">시공 및 자문 연혁</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold text-gradient-gold">25건</span>
                  <span className="text-xs text-muted-foreground">누적 시공 실적</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold text-gradient-gold">3.7억</span>
                  <span className="text-xs text-muted-foreground">시공능력평가액</span>
                </div>
              </div>
            </div>

            {/* Right CEO Photo Column (Cinematic Split) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl group">
                <img 
                  src={CEO_MESSAGE.photo} 
                  alt="대표이사 박은선" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay card */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent p-6 pt-20">
                  <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Representative Director</span>
                  <h3 className="font-serif text-xl font-bold text-gradient-gold mt-1">박은선 대표이사</h3>
                  <p className="text-xs text-muted-foreground mt-2 italic leading-relaxed">
                    &ldquo;우리가 하는 일은 단순한 공사가 아닌, 무너진 생태계를 되살리는 지속가능한 복원입니다.&rdquo;
                  </p>
                </div>
              </div>
              
              {/* Decorative Floating Element */}
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/10 blur-xl -z-10" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-secondary/10 blur-2xl -z-10" />
            </div>
          </div>
        </section>

        {/* SECTION 2: Dynamic Services Breakdown with Interactive Diagrams */}
        <section className="py-24 bg-card/10 border-y border-border/20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
          
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">Our Expertise</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                체계적인 공법과 <span className="text-gradient-gold">혁신적 기술력</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                컨설팅 마인드로 무장한 (주)이에스조경은 단순한 시공을 넘어, 각 부지 환경에 맞춤화된 공학적 분석과 지속가능한 자재 설계를 통합 제공합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Side: Interactive Selector */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`flex items-start gap-4 p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                      activeService === service.id
                        ? "bg-primary/20 border-amber-500/40 shadow-lg shadow-amber-500/5 pl-7"
                        : "bg-card/40 border-border/40 hover:bg-card/80 hover:border-border"
                    }`}
                  >
                    <div className="mt-1 shrink-0">
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className={`font-semibold text-base transition-colors ${
                        activeService === service.id ? "text-amber-400" : "text-foreground"
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Side: Visual Detail & Interactive Diagram */}
              <div className="lg:col-span-8">
                {SERVICES.map((service) => {
                  if (service.id !== activeService) return null;
                  return (
                    <div 
                      key={service.id}
                      className="luxury-card min-h-[450px] flex flex-col lg:flex-row gap-8 items-center animate-in fade-in slide-in-from-right-5 duration-500"
                    >
                      {/* Service Info */}
                      <div className="flex-1 flex flex-col gap-5 text-left">
                        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                          {service.tagline}
                        </span>
                        <h3 className="font-serif text-2xl font-bold">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="h-px bg-border/40 my-1" />
                        
                        <h4 className="text-xs font-bold text-gradient-gold uppercase tracking-wider">
                          핵심 시공 프로세스 및 특장점
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 flex items-center justify-between bg-primary/10 border border-primary/20 rounded-lg p-4">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">검증된 성과 지표</span>
                            <span className="text-sm font-semibold text-foreground mt-0.5">{service.kpi.label}</span>
                          </div>
                          <span className="font-serif text-2xl font-bold text-gradient-gold">
                            {service.kpi.value}
                          </span>
                        </div>
                      </div>

                      {/* Service Image / Diagram */}
                      <div className="w-full lg:w-[320px] aspect-[4/3] rounded-lg overflow-hidden border border-border/60 shrink-0">
                        <img 
                          src={
                            service.id === "slope" 
                              ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/slope_tech-bwFWzeXngL4eCSnuUA6Pcj.webp"
                              : service.id === "landscape"
                              ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/biochar_eco-BhEvRP5pvwFck6smCyD9Ke.webp"
                              : "https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/hero_bg-B6FqnpDZCvDaXrLApbTrWh.webp"
                          } 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CEO Message & Company Overview */}
        <section className="py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column: CEO Philosophy */}
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">CEO Philosophy</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight">
                  &ldquo;흙은 거짓말을 하지 않습니다.<br />
                  <span className="text-gradient-gold">우리도 그렇습니다.</span>&rdquo;
                </h2>
                <blockquote className="border-l-2 border-amber-500/40 pl-4 py-1 italic text-muted-foreground text-sm leading-relaxed">
                  {CEO_MESSAGE.philosophy}
                </blockquote>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  (주)이에스조경은 2020년 설립 이후 정직과 성실을 핵심 가치로 삼고 무너진 사면을 안전하게 복구하며 도심 속 녹지 공간을 아름답게 가꾸어 왔습니다. 여성 CEO의 섬세한 품질 관리와 풍부한 실무 경험을 지닌 기술이사 및 시공팀이 하나 되어 하자 없는 완벽한 시공을 약속드립니다.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden border border-amber-500/20">
                    <img src={CEO_MESSAGE.photoSub} alt="박은선 대표이사 서브 사진" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-foreground">박은선</span>
                    <span className="text-xs text-muted-foreground">Representative Director, ES Landscape</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Company Quick Profile */}
              <div className="lg:col-span-7 luxury-card flex flex-col gap-6 text-left">
                <h3 className="font-serif text-xl font-bold text-gradient-gold border-b border-border/40 pb-3">
                  회사 개요 및 핵심 역량
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs text-muted-foreground">상호명</span>
                    <span className="font-medium">{COMPANY_INFO.name} ({COMPANY_INFO.engName})</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs text-muted-foreground">설립일</span>
                    <span className="font-medium">{COMPANY_INFO.founded} (업력 6년차)</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs text-muted-foreground">대표자</span>
                    <span className="font-medium">{COMPANY_INFO.ceo} (여성기업인증 법인)</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs text-muted-foreground">자본금</span>
                    <span className="font-medium">{COMPANY_INFO.capital}</span>
                  </div>
                </div>

                <div className="h-px bg-border/40 my-1" />

                <div className="flex flex-col gap-3">
                  <h4 className="text-xs font-bold text-gradient-gold uppercase tracking-wider">
                    등록 면허 및 보유 인증
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {COMPANY_INFO.certifications.map((cert, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/80 px-3 py-1 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: ESG & Carbon Neutral Commitment */}
        <section className="py-24 bg-gradient-to-b from-card/10 to-primary/5 border-t border-border/20 relative">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl">
                  <img 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663283438125/4Ty34aTXnHdjiTU7VWcZUo/biochar_eco-BhEvRP5pvwFck6smCyD9Ke.webp" 
                    alt="Eco Sustainable Landscape with Biochar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-background/95 border border-amber-500/20 rounded-xl p-5 shadow-xl max-w-xs text-left">
                  <span className="font-serif text-3xl font-bold text-gradient-gold">1 현장, 1 톤</span>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    우리가 시공하는 모든 조경 및 사면복원 현장은 평균 1톤의 CO₂를 토양 속에 격리하여 지구 온난화를 늦춥니다.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col gap-6 text-left">
                <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">ESG Management</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight">
                  지속가능한 지구를 향한<br />
                  <span className="text-gradient-gold">이에스조경의 ESG 실천</span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  단순히 예쁜 정원을 꾸미는 것을 넘어, 환경을 생각하는 소재 선택과 지역 사회 기여를 통해 환경(E), 사회(S), 지배구조(G) 전 영역에서 정직하고 투명한 기업 문화를 실천합니다.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                  <div className="border border-border/60 bg-card/30 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-serif text-lg font-bold text-gradient-gold">E (Environmental)</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      바이오차 배합 토양 개량, 코코넛·황마 기반 생분해성 식생매트 100% 사용으로 친환경 시공 실천.
                    </p>
                  </div>
                  <div className="border border-border/60 bg-card/30 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-serif text-lg font-bold text-gradient-gold">S (Social)</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      지역 인재 100% 채용 및 연 1회 이상 노인·아동 복지시설 조경 무상 원예치료 시공 기부.
                    </p>
                  </div>
                  <div className="border border-border/60 bg-card/30 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-serif text-lg font-bold text-gradient-gold">G (Governance)</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      철저한 안전보건관리계획 사전 수립 및 전 시공 과정의 디지털 투명 기록·관리.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Final CTA (Enterprise Lead Attraction) */}
        <section className="py-20 relative overflow-hidden border-t border-border/20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-secondary/5" />
          <div className="container text-center max-w-4xl mx-auto flex flex-col gap-6 items-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              사면 붕괴 위험 진단 및 <span className="text-gradient-gold">맞춤형 견적 제안</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
              광주, 하남, 성남, 이천 등 경기도 전 권역을 포함한 전국 현장에 대해 24시간 내 신속한 현장 답사와 맞춤형 친환경 설계 진단을 제공해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/contact">
                <Button className="btn-gold h-12 px-8 text-sm font-semibold cursor-pointer">
                  1:1 정밀 진단 신청하기 <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button className="btn-outline-gold h-12 px-8 text-sm font-semibold cursor-pointer">
                  전체 시공 사례 탐색
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
