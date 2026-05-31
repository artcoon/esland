/*
 * Design Philosophy: Liquid Carbon & Gold
 * Page: 404 Not Found (Luxury Theme)
 */

import { Link } from "wouter";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      
      <div className="text-center max-w-md flex flex-col items-center gap-6 animate-in zoom-in-95 duration-500">
        <div className="h-16 w-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
          <AlertTriangle className="h-8 w-8 text-amber-400" />
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="font-serif text-6xl font-black text-gradient-gold">404</span>
          <h1 className="font-serif text-2xl font-bold tracking-tight mt-2">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed mt-1">
            요청하신 주소가 올바르지 않거나 변경되어 찾을 수 없습니다. 
            이에스조경의 프리미엄 조경 컨설팅 메인 홈으로 돌아가 보세요.
          </p>
        </div>

        <Link href="/">
          <Button className="btn-gold px-6 py-2.5 text-xs font-semibold cursor-pointer">
            <ArrowLeft className="h-4 w-4" /> 메인 홈으로 돌아가기
          </Button>
        </Link>
      </div>
    </div>
  );
}
