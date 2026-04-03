import { Brain, Camera, LineChart, Utensils, Clock, Heart, Zap, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI智能定制",
    description: "基于你的身体数据、饮食习惯和运动能力，AI算法为你量身打造专属减脂方案。",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Camera,
    title: "拍照识卡路里",
    description: "只需拍下你的餐食，AI自动识别食物种类并精准计算卡路里和营养成分。",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  },
  {
    icon: LineChart,
    title: "数据可视化",
    description: "体重、围度、体脂率变化一目了然，多维度数据图表帮你追踪减脂进度。",
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  },
  {
    icon: Utensils,
    title: "智能食谱推荐",
    description: "每日推荐美味低卡食谱，兼顾营养均衡与口味偏好，让减脂餐不再单调。",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  },
  {
    icon: Clock,
    title: "间歇性断食",
    description: "内置多种断食方案（16:8、5:2等），智能提醒进食窗口，轻松养成健康习惯。",
    color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
  },
  {
    icon: Heart,
    title: "健康社区",
    description: "加入减脂社群，与志同道合的伙伴互相鼓励，分享经验，一起坚持到底。",
    color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  },
  {
    icon: Zap,
    title: "运动跟练",
    description: "海量居家运动视频，从HIIT到瑜伽，根据你的体能等级智能推荐训练计划。",
    color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: Target,
    title: "目标管理",
    description: "设定阶段性目标，智能拆解为每日任务，达成即有奖励，持续激励你前行。",
    color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            核心功能
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            一站式减脂解决方案
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            从饮食到运动，从数据到社区，瘦咖为你覆盖减脂的每一个环节
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
