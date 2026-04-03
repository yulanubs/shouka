import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Apple, Dumbbell, TrendingDown, Users, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "500万+", label: "注册用户" },
  { icon: TrendingDown, value: "8.6kg", label: "平均减重" },
  { icon: Star, value: "4.9", label: "App评分" },
  { icon: Smartphone, value: "99.2%", label: "好评率" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Apple className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">2024年度最佳健康App</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              科学减脂
              <br />
              <span className="text-primary">从瘦咖开始</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              AI智能定制你的专属减脂方案，精准追踪每一餐、每一步。不节食、不反弹，让健康瘦身成为生活习惯。
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base px-8 h-12">
                立即免费下载
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12">
                <Dumbbell className="mr-2 w-5 h-5" />
                了解更多
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-1">
                    <stat.icon className="w-4 h-4 text-primary" />
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[280px] sm:w-[300px] bg-card rounded-[3rem] border-8 border-border shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-b from-primary/10 to-primary/5 p-6 pt-10">
                  {/* Status bar */}
                  <div className="flex items-center justify-between mb-6 text-xs text-muted-foreground">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-current rounded-sm">
                        <div className="w-2.5 h-full bg-primary rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* App content mockup */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">今日目标</p>
                      <p className="text-3xl font-bold text-foreground mt-1">1,420</p>
                      <p className="text-xs text-muted-foreground">千卡剩余</p>
                    </div>

                    {/* Progress ring mockup */}
                    <div className="flex justify-center">
                      <div className="relative w-32 h-32">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" className="text-secondary" />
                          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" className="text-primary" strokeDasharray="264" strokeDashoffset="79" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-lg font-bold text-foreground">70%</p>
                            <p className="text-[10px] text-muted-foreground">已完成</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Meal cards */}
                    <div className="space-y-2">
                      {["早餐", "午餐", "晚餐"].map((meal, i) => (
                        <div key={meal} className="flex items-center justify-between bg-card rounded-xl px-3 py-2.5 border border-border">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-[10px]">
                                {["🌅", "☀️", "🌙"][i]}
                              </span>
                            </div>
                            <span className="text-xs font-medium text-foreground">{meal}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {[380, 520, 420][i]} kcal
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-1/4 bg-card rounded-2xl border border-border shadow-lg p-3 animate-float hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <TrendingDown className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">-2.3kg</p>
                    <p className="text-[10px] text-muted-foreground">本周减重</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/3 bg-card rounded-2xl border border-border shadow-lg p-3 animate-float-delayed hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <span className="text-sm">🔥</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">486 kcal</p>
                    <p className="text-[10px] text-muted-foreground">今日消耗</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs">向下滚动</span>
        <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
