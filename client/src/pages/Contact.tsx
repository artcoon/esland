/*
 * Design Philosophy: Liquid Carbon & Gold
 * Page: Contact (Multi-step Lead Qualification Form)
 */

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2, ChevronRight, ChevronLeft, Send, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Contact() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    projectType: "slope", // slope, landscape, maintenance, other
    budgetRange: "10m_50m", // under_10m, 10m_50m, 50m_100m, over_100m
    region: "gyeonggi", // gyeonggi, seoul, incheon, other
    slopeAngle: "no_slope", // no_slope, under_30, 30_60, over_60
    description: ""
  });

  const projectTypes = [
    { id: "slope", label: "친환경 사면 복원 · 녹화 (특허 공법)" },
    { id: "landscape", label: "공공 · 산업단지 조경 시공" },
    { id: "maintenance", label: "연간 조경 유지관리 정기 계약" },
    { id: "planterior", label: "실내 플랜테리어 & 스마트 케어" }
  ];

  const budgetRanges = [
    { id: "under_10m", label: "1,000만원 미만" },
    { id: "10m_50m", label: "1,000만원 ~ 5,000만원" },
    { id: "50m_100m", label: "5,000만원 ~ 1억원" },
    { id: "over_100m", label: "1억원 이상 (대형 엔터프라이즈)" }
  ];

  const regions = [
    { id: "gyeonggi", label: "경기도 (광주, 하남, 성남, 이천 등)" },
    { id: "seoul", label: "서울특별시" },
    { id: "incheon", label: "인천광역시" },
    { id: "other", label: "기타 타 지역" }
  ];

  const slopeAngles = [
    { id: "no_slope", label: "경사 없음 (평지 조경 부지)" },
    { id: "under_30", label: "완경사 (30도 미만)" },
    { id: "30_60", label: "급경사 (30도 ~ 60도)" },
    { id: "over_60", label: "절토 비탈면 (60도 이상, 집중 보강 필요)" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Basic validation
    if (step === 1) {
      if (!formData.companyName || !formData.contactName || !formData.phone || !formData.email) {
        toast.error("기본 담당자 정보를 모두 입력해 주세요.");
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("1:1 정밀 현장진단 및 견적 신청이 완료되었습니다.", {
      description: "담당 기술이사가 24시간 이내에 기재해 주신 연락처로 연락을 드립니다."
    });
    // Reset step & form
    setStep(4);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Header Section */}
        <section className="container py-12 text-center max-w-4xl mx-auto flex flex-col gap-5">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">Contact Us</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            1:1 맞춤형 <span className="text-gradient-gold">무상 현장 정밀 진단</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            경기도 전역 및 전국 현장에 대해 이에스조경의 전문 시공 기술진이 직접 방문하여 사면의 안전성을 분석하고, 
            가장 합리적인 공법과 최적의 견적을 산출해 드립니다.
          </p>
        </section>

        {/* Multi-step Form Section */}
        <section className="py-12">
          <div className="container max-w-2xl mx-auto">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-10 px-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center gap-2">
                  <div className={`h-8 w-8 rounded-full border flex items-center justify-center font-serif text-sm font-bold transition-all duration-300 ${
                    step === num
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black border-amber-500 scale-110 shadow-lg shadow-amber-500/10"
                      : step > num
                      ? "bg-primary/30 border-primary text-amber-400"
                      : "border-border/60 text-muted-foreground"
                  }`}>
                    {num}
                  </div>
                  <span className={`text-xs font-semibold hidden sm:inline ${
                    step === num ? "text-amber-400" : "text-muted-foreground"
                  }`}>
                    {num === 1 ? "기본 정보" : num === 2 ? "현장 및 예산" : "자가 진단"}
                  </span>
                  {num < 3 && <div className="h-px w-8 sm:w-16 bg-border/60 mx-2" />}
                </div>
              ))}
            </div>

            {/* Form Box */}
            <div className="luxury-card min-h-[400px] flex flex-col justify-between">
              {step === 1 && (
                <div className="flex flex-col gap-6 text-left animate-in fade-in duration-300">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gradient-gold">담당자 기본 정보 입력</h3>
                    <p className="text-xs text-muted-foreground mt-1">답사 및 상담 조율을 위한 정확한 기본 정보를 입력해 주세요.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-muted-foreground">회사명 / 기관명</label>
                      <input 
                        required
                        type="text" 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="예: OO시청 / OO건설" 
                        className="bg-background/60 border border-border/60 rounded-lg p-3 text-foreground focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-muted-foreground">담당자 성함</label>
                      <input 
                        required
                        type="text" 
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        placeholder="예: 홍길동 과장" 
                        className="bg-background/60 border border-border/60 rounded-lg p-3 text-foreground focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-muted-foreground">연락처 (휴대폰)</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="예: 010-1234-5678" 
                        className="bg-background/60 border border-border/60 rounded-lg p-3 text-foreground focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-muted-foreground">이메일 주소</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@company.com" 
                        className="bg-background/60 border border-border/60 rounded-lg p-3 text-foreground focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-6">
                    <Button onClick={handleNext} className="btn-gold px-6 py-2.5 text-xs font-semibold">
                      다음 단계 <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-6 text-left animate-in fade-in duration-300">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gradient-gold">사업 분야 및 예산 설정</h3>
                    <p className="text-xs text-muted-foreground mt-1">필요하신 서비스 카테고리와 가용 예산 범위를 설정해 주세요.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-muted-foreground">사업 분야</label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="bg-background/60 border border-border/60 rounded-lg p-3 text-foreground focus:outline-none focus:border-amber-500/60"
                      >
                        {projectTypes.map(type => (
                          <option key={type.id} value={type.id}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-muted-foreground">가용 예산 범위</label>
                      <select 
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                        className="bg-background/60 border border-border/60 rounded-lg p-3 text-foreground focus:outline-none focus:border-amber-500/60"
                      >
                        {budgetRanges.map(range => (
                          <option key={range.id} value={range.id}>{range.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-xs text-muted-foreground">현장 소재지</label>
                      <select 
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        className="bg-background/60 border border-border/60 rounded-lg p-3 text-foreground focus:outline-none focus:border-amber-500/60"
                      >
                        {regions.map(reg => (
                          <option key={reg.id} value={reg.id}>{reg.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between mt-6">
                    <Button onClick={handlePrev} className="btn-outline-gold px-5 py-2.5 text-xs font-semibold">
                      <ChevronLeft className="h-4 w-4" /> 이전 단계
                    </Button>
                    <Button onClick={handleNext} className="btn-gold px-6 py-2.5 text-xs font-semibold">
                      다음 단계 <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left animate-in fade-in duration-300">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gradient-gold">사면 안전 자가진단 및 요구사항</h3>
                    <p className="text-xs text-muted-foreground mt-1">현장 상황을 자가 진단하고, 구체적인 요구사항을 기재해 주세요.</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 text-sm">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-muted-foreground">사면 경사도 (사면 복원 신청 시 필수)</label>
                      <select 
                        name="slopeAngle"
                        value={formData.slopeAngle}
                        onChange={handleInputChange}
                        className="bg-background/60 border border-border/60 rounded-lg p-3 text-foreground focus:outline-none focus:border-amber-500/60"
                      >
                        {slopeAngles.map(angle => (
                          <option key={angle.id} value={angle.id}>{angle.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-muted-foreground">상세 현장 상황 및 요청사항</label>
                      <textarea 
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="예: 도로 개설 후 절토 사면에서 비가 올 때마다 토사가 유실됩니다. 특허 공법 설계 적용을 원합니다." 
                        className="bg-background/60 border border-border/60 rounded-lg p-3 text-foreground focus:outline-none focus:border-amber-500/60 resize-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-6">
                    <Button type="button" onClick={handlePrev} className="btn-outline-gold px-5 py-2.5 text-xs font-semibold">
                      <ChevronLeft className="h-4 w-4" /> 이전 단계
                    </Button>
                    <Button type="submit" className="btn-gold px-6 py-2.5 text-xs font-semibold">
                      무상 진단 신청서 제출 <Send className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </form>
              )}

              {step === 4 && (
                <div className="flex flex-col gap-6 text-center py-8 items-center justify-center animate-in zoom-in-95 duration-500">
                  <div className="h-16 w-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-2">
                    <CheckCircle2 className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gradient-gold">
                    진단 신청서 접수 완료
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                    성공적으로 신청서가 접수되었습니다. (주)이에스조경의 담당 기술이사가 <strong>24시간 이내</strong>에 유선으로 연락을 드려, 상세한 현장 분석 및 답사 일정을 조율하겠습니다.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-amber-400 bg-amber-500/5 border border-amber-500/15 rounded-lg p-3 max-w-sm text-left">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>긴급한 현장 붕괴 위험 조치가 필요한 경우, 대표전화(031-762-3450)로 즉시 연락해 주시기 바랍니다.</span>
                  </div>
                  <Button 
                    onClick={() => {
                      setStep(1);
                      setFormData({
                        companyName: "",
                        contactName: "",
                        phone: "",
                        email: "",
                        projectType: "slope",
                        budgetRange: "10m_50m",
                        region: "gyeonggi",
                        slopeAngle: "no_slope",
                        description: ""
                      });
                    }}
                    className="btn-outline-gold mt-6 px-6 py-2.5 text-xs"
                  >
                    추가 신청하기
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
