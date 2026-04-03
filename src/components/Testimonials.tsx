import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "小雨",
    avatar: "XY",
    role: "上班族 · 减重12kg",
    content: "用了瘦咖三个月，从65kg减到了53kg。最喜欢拍照识卡路里的功能，太方便了！而且推荐的食谱真的很好吃，完全不像在节食。",
    rating: 5,
  },
  {
    name: "大壮",
    avatar: "DZ",
    role: "程序员 · 减重18kg",
    content: "作为一个常年久坐的程序员，瘦帮我制定了合理的运动计划。从每天10分钟开始，现在我已经能跑5公里了。数据追踪功能让我很有成就感。",
    rating: 5,
  },
  {
    name: "Lily",
    avatar: "LL",
    role: "宝妈 · 减重8kg",
    content: "产后一直想恢复身材，但时间有限。瘦咖的间歇性断食方案很适合我，不用花太多时间准备特殊的减脂餐，轻松又有效。",
    rating: 5,
  },
  {
    name: "老张",
    avatar: "LZ",
    role: "自由职业 · 减重15kg",
    content: "之前尝试过各种减肥方法都反弹了。瘦咖不一样，它教会我的是健康的生活方式，而不是短期的极端节食。已经坚持半年了。",
    rating: 5,
  },
  {
    name: "小美",
    avatar: "XM",
    role: "大学生 · 减重6kg",
    content: "宿舍党也能用的减脂App！运动视频都是居家就能做的，不需要去健身房。社区里还有很多同龄人互相鼓励，氛围超好。",
    rating: 5,
  },
  {
    name: "Mark",
    avatar: "MK",
    role: "健身教练 · 减脂5%",
    content: "作为健身教练，我对减脂App要求很高。瘦咖的数据分析很专业，热量计算也准确。我会推荐给我的学员使用。",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            用户评价
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            听听他们怎么说
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            来自真实用户的减脂故事，每一个数字背后都是一次蜕变
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                    {t.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
