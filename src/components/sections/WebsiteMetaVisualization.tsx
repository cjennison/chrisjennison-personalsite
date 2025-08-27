"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

export function WebsiteMetaVisualization() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate when element is centered in viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      // Start scrolling when element center reaches viewport center
      // Progress from 0 to 1 as element moves from center to top of screen
      let progress = 0;

      if (elementCenter <= viewportCenter) {
        // Element center is at or above viewport center
        const distanceFromCenter = viewportCenter - elementCenter;
        const maxDistance = viewportCenter + rect.height / 2; // Distance to scroll fully
        progress = Math.max(0, Math.min(1, distanceFromCenter / maxDistance));
      }

      // Convert to scroll position (0 to 300px)
      setScrollProgress(progress * 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = isDarkMode
    ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
    : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)";

  const textColor = isDarkMode ? "#ffffff" : "#1a1a1a";
  const mutedColor = isDarkMode ? "#a1a1aa" : "#64748b";
  const cardBg = isDarkMode ? "#2d2d2d" : "#ffffff";
  const navBg = isDarkMode
    ? "rgba(26, 26, 26, 0.9)"
    : "rgba(255, 255, 255, 0.9)";

  return (
    <div className="relative p-8" ref={containerRef}>
      <div
        className="relative w-96 h-80 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
        style={{
          background: bgColor,
          animation: "float 8s ease-in-out infinite",
          border: `2px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
        }}
        role="presentation"
      >
        {/* Mock Navigation */}
        <div
          className="h-12 flex items-center justify-between px-4 backdrop-blur-sm border-b relative z-10"
          style={{
            backgroundColor: navBg,
            borderBottomColor: isDarkMode ? "#374151" : "#e5e7eb",
          }}
        >
          <div className="flex items-center gap-4">
            <div className="font-bold text-sm" style={{ color: textColor }}>
              Christopher Jennison
            </div>
            <div className="hidden sm:flex gap-3">
              {["Home", "Services", "Case Studies"].map((item) => (
                <div
                  key={item}
                  className="text-xs px-2 py-1 rounded hover:scale-105 transition-transform duration-200"
                  style={{
                    backgroundColor:
                      item === "Services"
                        ? isDarkMode
                          ? "#3b82f6"
                          : "#3b82f6"
                        : "transparent",
                    color: item === "Services" ? "#ffffff" : mutedColor,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1 rounded-full hover:scale-110 transition-all duration-200"
            style={{ backgroundColor: isDarkMode ? "#374151" : "#f3f4f6" }}
          >
            {isDarkMode ? (
              <IconSun size={12} style={{ color: "#fbbf24" }} />
            ) : (
              <IconMoon size={12} style={{ color: "#6b7280" }} />
            )}
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          className="overflow-hidden h-full transition-transform duration-75 ease-out relative z-0"
          style={{
            transform: `translateY(-${scrollProgress}px)`,
            marginTop: "-48px", // Negative margin to overlap with header
            paddingTop: "48px", // Padding to account for header height
          }}
        >
          {/* Hero Section */}
          <div className="p-4 text-center" style={{ height: "120px" }}>
            <div
              className="text-lg font-bold mb-2"
              style={{ color: textColor }}
            >
              Professional Portfolio
            </div>
            <div className="text-xs mb-3" style={{ color: mutedColor }}>
              Modern web development with cutting-edge technology
            </div>
            <div
              className="px-3 py-1 rounded-full text-xs font-semibold text-white inline-block"
              style={{ backgroundColor: "#3b82f6" }}
            >
              Get Started
            </div>
          </div>

          {/* Services Preview */}
          <div className="px-4 pb-4">
            <div
              className="text-sm font-semibold mb-3"
              style={{ color: textColor }}
            >
              Services
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["Engineering", "AI Coding", "Consulting", "Development"].map(
                (service, index) => (
                  <div
                    key={service}
                    className="p-2 rounded-lg text-center hover:scale-105 transition-all duration-200"
                    style={{
                      backgroundColor: cardBg,
                      boxShadow: isDarkMode
                        ? "0 1px 3px rgba(0, 0, 0, 0.3)"
                        : "0 1px 3px rgba(0, 0, 0, 0.1)",
                      animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div
                      className="text-xs font-medium"
                      style={{ color: textColor }}
                    >
                      {service}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Case Studies Preview */}
          <div className="px-4 pb-4">
            <div
              className="text-sm font-semibold mb-3"
              style={{ color: textColor }}
            >
              Case Studies
            </div>
            <div
              className="p-3 rounded-lg"
              style={{
                backgroundColor: cardBg,
                boxShadow: isDarkMode
                  ? "0 1px 3px rgba(0, 0, 0, 0.3)"
                  : "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className="text-xs font-medium mb-1"
                style={{ color: textColor }}
              >
                AI-Powered Portfolio Development
              </div>
              <div className="text-xs" style={{ color: mutedColor }}>
                Live case study of this website's development...
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="px-4 pb-8">
            <div
              className="text-sm font-semibold mb-3"
              style={{ color: textColor }}
            >
              Get In Touch
            </div>
            <div
              className="p-3 rounded-lg border"
              style={{
                backgroundColor: cardBg,
                borderColor: isDarkMode ? "#374151" : "#e5e7eb",
              }}
            >
              <div className="text-xs mb-2" style={{ color: mutedColor }}>
                Ready to build something amazing?
              </div>
              <div
                className="px-2 py-1 rounded text-xs text-center font-medium text-white"
                style={{ backgroundColor: "#10b981" }}
              >
                Schedule Consultation
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack Indicator */}
        <div className="absolute bottom-2 left-2">
          <div className="flex gap-1">
            {["Next.js", "Mantine", "TS"].map((tech, index) => (
              <div
                key={tech}
                className="px-1 py-0.5 rounded text-xs font-medium"
                style={{
                  backgroundColor: "#3b82f6",
                  color: "#ffffff",
                  fontSize: "0.6rem",
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
