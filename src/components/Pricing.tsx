import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "免费版",
    price: "¥0",
    period: "永久免费",
    description: "基础功能，轻松入门",
    features: [
      "每日卡路里追踪",
      "基础饮食记录",
      "体重记录",
      "社区浏览",
      "基础运动视频",
    ],
    cta: "免费下载",
    popular: false,
  },
  {
    name: "专业版",
    price: "¥28",
    period: "/月",
    description: "AI加持，高效减脂",
    features: [
      "免费版全部功能",
      "AI拍照识卡路里",
      "智能食谱推荐",
      "间歇性断食计划",
      "详细数据分析",
      "专属运动计划",
      "优先客服支持",
    ],
    cta: "立即订阅",
    popular: true,
  },
  {
    name: "年度版",
    price: "¥168",
    period: "/年",
    description: "相当于每月仅¥14",
    features: [
      "专业版全部功能",
      "1对1营养师咨询",
      "高级数据报告",
      "专属减脂社群",
      "离线模式",
      "家庭共享（最多5人）",
      "优先新功能体验",
    ],
    cta: "年付订阅",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            价格方案
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            选择适合你的方案
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            免费版即可开始，随时升级解锁更多功能
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl border p-8 ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/10 scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  最受欢迎
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            💡 所有付费方案均提供 <span className="text-foreground font-medium">7天免费试用</span>，不满意随时取消，无需理由
          </p>
        </div>
      </div>
    </section>
  );
}
