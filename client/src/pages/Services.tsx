/*
 * Design Philosophy: Liquid Carbon & Gold
 * Page: Detailed Services and Slope Diagram
 */

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SERVICES } from "../const";
import { CheckCircle2, ChevronRight, ShieldCheck, HelpCircle, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const slopeLayers = [
    {
      id: 1,
      name: "1층: 생태 식생 표면층",
      material: "친환경 식생 매트 + 종자",
      desc: "강우 시 표면 토사의 초기 유실을 완벽하게 방지하고, 초기 생육 단계에서 종자가 유실되지 않도록 견고히 보호합니다. 생분해성 천연 섬유(코코넛, 황마)를 100% 사용하여 환경 호르몬 및 토양 오염이 전혀 없습니다.",
      color: "border-green-500/40 bg-green-500/5 text-green-300"
    },
    {
      id: 2,
      name: "2층: 탄소 저장형 식생기반재층",
      material: "바이오차(Biochar) + 제올라이트 혼합 토양",
      desc: "50-100mm 두께로 포설되며, 수목 및 초화류의 영구 활착을 위한 영양분과 수분을 공급합니다. 특히 탄소를 반영구적으로 격리하는 바이오차와 다공성 제올라이트를 배합하여, 가뭄과 폭우 속에서도 토양 미생물이 살아 숨 쉬는 건강한 기반을 제공합니다.",
      color: "border-amber-500/40 bg-amber-500/5 text-amber-300"
    },
    {
      id: 3,
      name: "3층: 고인장 인프라 보강층",
      material: "HDPE 지오그리드 (Geogrid)",
      desc: "20kN/m 이상의 높은 인장 강도를 지닌 고밀도 폴리에틸렌(HDPE) 격자망을 설치하여, 급경사 사면의 내부 전단 파괴와 붕괴를 영구적으로 방지합니다. 토양과 단단히 맞물려 사면 자체의 전단 응력을 극대화합니다.",
      color: "border-purple-500/40 bg-purple-500/5 text-purple-300"
    },
    {
      id: 4,
      name: "4층: 이중 안착 고정층",
      material: "이중 와셔 & L형 앵커핀 (Anchor Pin)",
      desc: "500-800mm 깊이로 사면 내부 암반 및 견고한 토층에 앵커핀을 조밀하게 박아 보강재를 이중 와셔로 압착 고정합니다. 우기 시 사면의 간극수압 상승으로 인한 전단 붕괴나 밀림 현상을 원천 차단합니다.",
      color: "border-blue-500/40 bg-blue-500/5 text-blue-300"
    },
    {
      id: 5,
      name: "5층: 간극수압 배수 및 기초층",
      material: "배수용 유공관 + 필터 자갈층",
      desc: "사면 하부 및 내부에 흐르는 지하수와 우수가 정체되지 않고 신속히 배출되도록 유공 배수관과 자갈 필터를 설계합니다. 토양 내부의 물 압력(간극수압)을 상시 낮추어 지반의 본질적인 구조적 안정을 확보합니다.",
      color: "border-gray-500/40 bg-gray-500/5 text-gray-300"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Page Title */}
        <section className="container py-12 text-center max-w-4xl mx-auto flex flex-col gap-5">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">Our Services</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            혁신적인 특허 공법과<br />
            <span className="text-gradient-gold">정교한 맞춤형 시공</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            (주)이에스조경은 단순한 식재를 넘어 공학적 신뢰성과 생태 복원 철학을 융합합니다. 
            사면 보강부터 도시 경관, 연간 관리까지 조경 건설의 전 영역에서 최고 수준의 품질을 제공합니다.
          </p>
        </section>

        {/* Slope Technology Interactive Diagram Section */}
        <section className="py-24 bg-card/10 border-y border-border/20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />
          
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">Core Patent Technology</span>
              <h2 className="font-serif text-3xl font-bold tracking-tight">
                다층복합보강구조 <span className="text-gradient-gold">5-Layer 사면복원 공법</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                집중호우와 지구온난화로 인한 급경사 사면 붕괴 위험을 근본적으로 해결하기 위해 개발된, (주)이에스조경의 차세대 사면 보강·녹화 특허 공법입니다. 아래 레이어를 클릭하여 상세 구조를 확인해 보세요.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: 5-Layer Stack Visualization */}
              <div className="lg:col-span-6 flex flex-col gap-3 relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-amber-500 to-gray-500 rounded-full opacity-50" />
                
                {slopeLayers.map((layer, idx) => (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(idx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      activeLayer === idx
                        ? `${layer.color} shadow-lg scale-[1.02] translate-x-2 border-solid`
                        : "border-border/30 bg-card/10 text-muted-foreground hover:border-border hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm font-bold tracking-wider">{layer.name}</span>
                      <Layers className="h-4 w-4 opacity-75" />
                    </div>
                    <div className="text-xs font-semibold mt-1 opacity-90">{layer.material}</div>
                  </button>
                ))}
              </div>

              {/* Right Side: Detailed Layer Description */}
              <div className="lg:col-span-6">
                <div className="luxury-card min-h-[350px] flex flex-col gap-6 text-left animate-in fade-in slide-in-from-right-5 duration-500">
                  <div className="flex items-center gap-2.5 text-amber-400 font-semibold text-sm uppercase tracking-wider">
                    <ShieldCheck className="h-5 w-5" />
                    다층복합보강구조 특허 공법 상세 분석
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-gradient-gold">
                    {slopeLayers[activeLayer].name}
                  </h3>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">적용 주요 자재</span>
                    <span className="font-medium text-sm text-foreground">{slopeLayers[activeLayer].material}</span>
                  </div>

                  <div className="h-px bg-border/40" />

                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">공학적 원리 및 역할</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {slopeLayers[activeLayer].desc}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 flex items-center gap-3 text-xs text-amber-400 font-medium bg-amber-500/5 border border-amber-500/10 rounded-lg p-3">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    본 공법은 사면의 유실 방지와 전단 강도 보강을 동시에 달성하는 검증된 친환경 신기술입니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service List Section */}
        <section className="py-24">
          <div className="container flex flex-col gap-16">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={service.id}
                  id={`service-${service.id}`}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-border/20 pb-16 last:border-0 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Service Image */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/10 shadow-2xl">
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

                  {/* Service Details */}
                  <div className={`lg:col-span-7 text-left flex flex-col gap-5 ${isEven ? "" : "lg:order-1"}`}>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      {service.tagline}
                    </span>
                    <h2 className="font-serif text-3xl font-bold">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="h-px bg-border/40 my-1" />

                    <h4 className="text-xs font-bold text-gradient-gold uppercase tracking-wider">
                      주요 솔루션 구성 항목
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center justify-between bg-card/40 border border-border/40 rounded-xl p-4 mt-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">실제 현장 검증 수치</span>
                        <span className="font-medium text-sm mt-0.5">{service.kpi.label}</span>
                      </div>
                      <span className="font-serif text-2xl font-bold text-gradient-gold">
                        {service.kpi.value}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-20 relative overflow-hidden border-t border-border/20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-secondary/5" />
          <div className="container text-center max-w-4xl mx-auto flex flex-col gap-6 items-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight">
              전문 기술팀의 <span className="text-gradient-gold">무상 현장 진단 서비스</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
              사면의 경사도, 토질 상태, 산사태 우려도 및 조경 부지 여건을 면밀히 분석하여 최적의 친환경 공법과 맞춤형 견적을 제안해 드립니다. 지금 바로 신청하세요.
            </p>
            <Link href="/contact">
              <Button className="btn-gold h-12 px-8 text-sm font-semibold cursor-pointer">
                1:1 정밀 진단 신청하기 <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
