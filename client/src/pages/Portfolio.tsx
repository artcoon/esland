/*
 * Design Philosophy: Liquid Carbon & Gold
 * Page: Portfolio (Case Study Explorer & KPIs Dashboard)
 */

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CASE_STUDIES } from "../const";
import { 
  TrendingUp, 
  ArrowRight, 
  Calendar, 
  Coins, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeCaseStudy, setActiveCaseStudy] = useState<string>(CASE_STUDIES[0].id);

  const categories = [
    { id: "all", name: "전체 보기" },
    { id: "slope", name: "사면 복원 · 녹화" },
    { id: "public", name: "공공 조경 공사" },
    { id: "private", name: "민간 조경 공사" }
  ];

  const filteredStudies = selectedCategory === "all"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => study.category === selectedCategory);

  const currentStudy = CASE_STUDIES.find(study => study.id === activeCaseStudy) || CASE_STUDIES[0];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Header Section */}
        <section className="container py-12 text-center max-w-4xl mx-auto flex flex-col gap-5">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">Case Studies</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            숫자로 증명하는<br />
            <span className="text-gradient-gold">압도적인 시공 실적</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            (주)이에스조경이 완수해 낸 25건의 프로젝트는 완벽한 안전 관리와 친환경 품질 기준을 입증합니다. 
            현장의 전후(Before/After) 정량 지표와 상세 공정 하이라이트를 투명하게 공개합니다.
          </p>
        </section>

        {/* SECTION 1: Client Results Dashboard (Key Metrics) */}
        <section className="py-12 border-t border-border/20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="luxury-card flex flex-col gap-2 text-left">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">누적 시공 건수</span>
                <span className="font-serif text-4xl font-bold text-gradient-gold">25건</span>
                <p className="text-xs text-muted-foreground">지자체 공공 공원 및 민간 아파트·산단 조경 시공 완료</p>
              </div>
              <div className="luxury-card flex flex-col gap-2 text-left">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">안전 사고율</span>
                <span className="font-serif text-4xl font-bold text-gradient-gold">0%</span>
                <p className="text-xs text-muted-foreground">창립 이래 단 한 건의 안전 사고 없는 철저한 무사고 준공</p>
              </div>
              <div className="luxury-card flex flex-col gap-2 text-left">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">평균 토사 유실 차단율</span>
                <span className="font-serif text-4xl font-bold text-gradient-gold">98.5%</span>
                <p className="text-xs text-muted-foreground">다층복합보강구조 특허 공법 시공 사면 정밀 계측 결과</p>
              </div>
              <div className="luxury-card flex flex-col gap-2 text-left">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">여성기업 가점</span>
                <span className="font-serif text-4xl font-bold text-gradient-gold">최고 등급</span>
                <p className="text-xs text-muted-foreground">공공조달 적격심사 시 여성기업 우대 가점 만점 확보</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Interactive Case Study Explorer */}
        <section className="py-20 bg-card/10 border-y border-border/20 relative">
          <div className="container">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2.5 justify-center mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    // Reset active case study to the first one in the filtered list
                    const firstFiltered = cat.id === "all" 
                      ? CASE_STUDIES[0] 
                      : CASE_STUDIES.find(study => study.category === cat.id);
                    if (firstFiltered) setActiveCaseStudy(firstFiltered.id);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider border transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black border-amber-500 shadow-lg shadow-amber-500/10"
                      : "bg-card/40 border-border/40 text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Side: Case Study List */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                {filteredStudies.map((study) => (
                  <button
                    key={study.id}
                    onClick={() => setActiveCaseStudy(study.id)}
                    className={`flex flex-col gap-2 p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                      activeCaseStudy === study.id
                        ? "bg-primary/20 border-amber-500/40 shadow-lg shadow-amber-500/5 pl-7"
                        : "bg-card/40 border-border/40 hover:bg-card/80 hover:border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                        {study.client}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {study.year}년
                      </span>
                    </div>
                    <h3 className={`font-serif font-bold text-sm transition-colors line-clamp-2 ${
                      activeCaseStudy === study.id ? "text-gradient-gold" : "text-foreground"
                    }`}>
                      {study.title}
                    </h3>
                  </button>
                ))}
                {filteredStudies.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground text-sm border border-dashed border-border/60 rounded-xl">
                    해당 카테고리의 실적이 준비 중입니다.
                  </div>
                )}
              </div>

              {/* Right Side: Detailed Active Case Study */}
              <div className="lg:col-span-8">
                {filteredStudies.length > 0 && (
                  <div className="luxury-card flex flex-col gap-8 text-left animate-in fade-in slide-in-from-right-5 duration-500">
                    {/* Hero Image */}
                    <div className="w-full aspect-[21/9] rounded-lg overflow-hidden border border-border/60 relative">
                      <img 
                        src={currentStudy.image} 
                        alt={currentStudy.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs font-semibold text-amber-400 bg-background/80 border border-amber-500/20 px-3 py-1 rounded-full">
                          {currentStudy.client}
                        </span>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground bg-background/80 px-3 py-1 rounded-full">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5 text-amber-400" /> {currentStudy.year}년 준공
                          </span>
                          <span className="flex items-center gap-1">
                            <Coins className="h-3.5 w-3.5 text-amber-400" /> 공사비: {currentStudy.budget}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-serif text-2xl font-bold text-gradient-gold">
                        {currentStudy.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {currentStudy.longDescription}
                      </p>
                    </div>

                    {/* Before/After Metrics Dashboard */}
                    <div className="flex flex-col gap-3">
                      <h4 className="text-xs font-bold text-gradient-gold uppercase tracking-wider flex items-center gap-1.5">
                        <TrendingUp className="h-4 w-4" />
                        시공 전/후 핵심 성과 지표 (Before & After)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {currentStudy.kpis.map((kpi, idx) => (
                          <div key={idx} className="border border-border/60 bg-primary/5 rounded-xl p-4 flex flex-col justify-between gap-2">
                            <span className="text-xs text-muted-foreground font-medium">{kpi.label}</span>
                            {kpi.before && kpi.after ? (
                              <div className="flex items-center justify-between mt-1">
                                <div className="flex flex-col">
                                  <span className="text-[10px] text-muted-foreground uppercase">시공 전</span>
                                  <span className="text-sm line-through text-red-400/80 font-medium">{kpi.before}</span>
                                </div>
                                <ArrowRight className="h-4 w-4 text-amber-400 shrink-0 mx-1" />
                                <div className="flex flex-col text-right">
                                  <span className="text-[10px] text-amber-400 uppercase font-semibold">시공 후</span>
                                  <span className="text-lg font-bold text-green-400">{kpi.after}</span>
                                </div>
                              </div>
                            ) : (
                              <div className="text-right mt-1">
                                <span className="text-lg font-bold text-gradient-gold">{kpi.value}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-border/40" />

                    {/* Highlights */}
                    <div className="flex flex-col gap-3">
                      <h4 className="text-xs font-bold text-gradient-gold uppercase tracking-wider">
                        주요 공정 및 엔지니어링 포인트
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentStudy.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-20 relative overflow-hidden border-t border-border/20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-secondary/5" />
          <div className="container text-center max-w-4xl mx-auto flex flex-col gap-6 items-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight">
              귀사의 현장도 <span className="text-gradient-gold">성공 사례가 될 수 있습니다</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
              이에스조경의 검증된 특허 기술과 시공 노하우를 통해 산사태 우려가 높은 급경사 사면을 완벽히 해결하고 친환경 가치를 극대화하십시오.
            </p>
            <Link href="/contact">
              <Button className="btn-gold h-12 px-8 text-sm font-semibold cursor-pointer">
                무료 기술 문의 및 상담 신청 <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
