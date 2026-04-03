import { Smartphone, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  product: {
    title: "产品",
    links: ["功能介绍", "价格方案", "更新日志", "下载App"],
  },
  company: {
    title: "公司",
    links: ["关于我们", "加入我们", "媒体报道", "联系我们"],
  },
  support: {
    title: "支持",
    links: ["帮助中心", "用户协议", "隐私政策", "反馈建议"],
  },
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">瘦</span>
              </div>
              <span className="text-xl font-bold text-foreground">瘦咖</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-6">
              科学减脂，从瘦咖开始。AI智能定制你的专属减脂方案，让健康瘦身成为生活习惯。
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@shouka.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>400-888-9999</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>北京市海淀区中关村科技园</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 瘦咖. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-lg">📱</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-lg">💬</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
