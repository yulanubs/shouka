import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "瘦咖适合什么样的人使用？",
    answer: "瘦咖适合所有想要科学减脂的人群，无论你是减脂新手还是有经验的健身爱好者。我们的AI算法会根据你的身体状况和目标定制专属方案，从轻度减重到深度塑形都能覆盖。",
  },
  {
    question: "拍照识别卡路里的准确度如何？",
    answer: "我们的AI拍照识卡路里功能基于深度学习模型，经过数百万食物图片训练，常见食物的识别准确率超过95%。对于复杂菜品，系统会提供多种可能的选项供你选择，确保数据准确。",
  },
  {
    question: "需要配合运动才能有效果吗？",
    answer: "减脂的核心是热量缺口，饮食控制占70%的作用。即使不运动，通过合理饮食也能看到效果。但配合运动可以加速减脂、提高基础代谢、塑造更好的体型。瘦咖会根据你的情况推荐合适的运动方案。",
  },
  {
    question: "订阅后可以随时取消吗？",
    answer: "当然可以。你可以在App内随时取消订阅，取消后在当前付费周期结束前仍可继续使用付费功能。我们不会收取任何取消费用，也不会设置任何取消障碍。",
  },
  {
    question: "瘦咖的数据安全吗？",
    answer: "我们非常重视用户隐私。所有健康数据都经过加密存储，严格遵守相关数据保护法规。我们不会将你的个人数据分享给第三方，你可以随时导出或删除自己的数据。",
  },
  {
    question: "免费版和付费版的主要区别是什么？",
    answer: "免费版提供基础的卡路里追踪、饮食记录和体重管理功能，已经足够日常使用。付费版增加了AI拍照识卡路里、智能食谱、断食计划、详细数据分析等高级功能，能让减脂效率大幅提升。",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            常见问题
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            你可能想知道的
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            关于瘦咖的常见疑问，都在这里
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="text-base font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
