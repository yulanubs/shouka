import { Check } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "记录身体数据",
    description: "输入身高、体重、年龄等基础信息，AI全面分析你的身体状态和代谢水平。",
    icon: "📋",
  },
  {
    step: "02",
    title: "生成定制方案",
    description: "AI算法基于你的目标，智能生成饮食计划、运动方案和每日卡路里预算。",
    icon: "🤖",
  },
  {
    step: "03",
    title: "执行并追踪",
    description: "拍照记录饮食、同步运动数据，系统实时调整方案确保你始终在最佳轨道上。",
    icon: "📸",
  },
  {
    step: "04",
    title: "达成理想目标",
    description: "见证自己的蜕变，数据可视化呈现每一步进展，收获健康与自信。",
    icon: "🎯",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            工作原理
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            四步开启减脂之旅
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            简单四步，让科学减脂变得轻松高效
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="text-center">
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card rounded-2xl border border-border p-6 sm:p-8">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-foreground">
                科学减脂，数据说话
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                基于 100万+ 用户数据训练，方案有效率高达 96.8%
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Check className="w-5 h-5" />
              <span className="text-sm font-medium">免费试用7天</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
