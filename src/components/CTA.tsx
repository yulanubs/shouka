import { Button } from "@/components/ui/button";
import { Smartphone, Apple, QrCode } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-3xl overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight">
                今天就开始你的
                <br />
                减脂之旅
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto">
                下载瘦咖App，免费体验7天专业版功能。无需信用卡，随时取消。
              </p>

              {/* Download Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8 h-12">
                  <Apple className="mr-2 w-5 h-5" />
                  App Store 下载
                </Button>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8 h-12">
                  <Smartphone className="mr-2 w-5 h-5" />
                  Android 下载
                </Button>
              </div>

              {/* QR Code hint */}
              <div className="mt-10 flex items-center justify-center gap-3 text-primary-foreground/60">
                <QrCode className="w-5 h-5" />
                <span className="text-sm">或扫描二维码直接下载</span>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/60">
                <span>🔒 隐私保护</span>
                <span>⭐ 4.9分好评</span>
                <span>👥 500万+用户</span>
                <span>💯 7天免费试用</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
