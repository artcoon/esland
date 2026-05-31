/*
 * Design Philosophy: Liquid Carbon & Gold
 * Page: Insights Hub (Analyst Reports & Technical Whitepapers)
 */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { INSIGHTS } from "../const";
import { BookOpen, User, Calendar, Clock, ChevronRight, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function Insights() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = (id: string, title: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      toast.success(`'${title}' 보고서가 다운로드되었습니다.`, {
        description: "PDF 포맷의 기술 백서 다운로드가 완료되었습니다."
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Header Section */}
        <section className="container py-12 text-center max-w-4xl mx-auto flex flex-col gap-5">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">Insights Hub</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            조경 건설의 혁신을 이끄는<br />
            <span className="text-gradient-gold">기술 및 ESG 연구소</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            (주)이에스조경의 기술진과 박은선 대표이사가 현장에서 검증하고 연구한 사면 복원 특허 공법, 
            탄소 저감 수목 생장, 그리고 공공조달 성공을 위한 입찰 분석 보고서를 투명하게 공유합니다.
          </p>
        </section>

        {/* Featured Reports Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {INSIGHTS.map((report) => (
                <div key={report.id} className="luxury-card flex flex-col gap-5 text-left h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-400 bg-amber-500/5 border border-amber-500/20 px-3 py-1 rounded-full">
                      {report.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {report.readTime}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-serif text-lg font-bold text-gradient-gold line-clamp-2">
                      {report.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                      {report.summary}
                    </p>
                  </div>

                  <div className="mt-auto pt-5 border-t border-border/20 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 border border-amber-500/10 flex items-center justify-center">
                        <User className="h-4 w-4 text-amber-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-foreground">{report.author}</span>
                        <span className="text-[10px] text-muted-foreground">{report.date}</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleDownload(report.id, report.title)}
                      disabled={downloadingId === report.id}
                      size="sm"
                      className="btn-gold h-8 text-xs px-3 cursor-pointer"
                    >
                      {downloadingId === report.id ? (
                        "다운로드 중..."
                      ) : (
                        <>
                          <Download className="h-3.5 w-3.5" /> PDF
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Document Request */}
        <section className="py-24 bg-card/10 border-y border-border/20 relative mt-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 text-left flex flex-col gap-5">
                <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">Technical Archive</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight">
                  특허 공법 시방서 및<br />
                  <span className="text-gradient-gold">설계 도면 패키지 요청</span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  다층복합보강구조 사면 복원 공법의 표준 도면, 친환경 조경 시방서, 여성기업 수의계약 한도 및 조달 가이드라인이 포함된 종합 기술 아카이브 패키지를 무료로 받아보실 수 있습니다.
                </p>
              </div>

              <div className="lg:col-span-7 luxury-card flex flex-col gap-6 text-left">
                <h3 className="font-serif text-lg font-bold text-gradient-gold border-b border-border/40 pb-3">
                  기술 패키지 무료 신청
                </h3>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    toast.success("기술 패키지 신청이 접수되었습니다.", {
                      description: "입력하신 이메일로 5분 이내에 다운로드 링크가 전송됩니다."
                    });
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
                >
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-muted-foreground">회사명 / 기관명</label>
                    <input 
                      required
                      type="text" 
                      placeholder="예: OO건설 / OO시청" 
                      className="bg-background/60 border border-border/60 rounded-lg p-3 text-foreground focus:outline-none focus:border-amber-500/60"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-muted-foreground">담당자 성함</label>
                    <input 
                      required
                      type="text" 
                      placeholder="예: 홍길동" 
                      className="bg-background/60 border border-border/60 rounded-lg p-3 text-foreground focus:outline-none focus:border-amber-500/60"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-xs text-muted-foreground">이메일 주소</label>
                    <input 
                      required
                      type="email" 
                      placeholder="example@company.com" 
                      className="bg-background/60 border border-border/60 rounded-lg p-3 text-foreground focus:outline-none focus:border-amber-500/60"
                    />
                  </div>
                  <Button type="submit" className="btn-gold sm:col-span-2 h-12 mt-2">
                    도면 및 시방서 패키지 이메일 수령 <ChevronRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
