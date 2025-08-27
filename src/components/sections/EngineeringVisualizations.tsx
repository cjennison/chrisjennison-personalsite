import {
  IconBrain,
  IconCalendar,
  IconChartBar,
  IconDeviceMobile,
  IconMessages,
  IconPhone,
  IconShield,
  IconUsers,
} from "@tabler/icons-react";

export function CRMVisualization() {
  return (
    <div className="relative p-8">
      <div
        className="relative w-80 h-64 rounded-xl shadow-lg overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--mantine-color-blue-1) 0%, var(--mantine-color-blue-3) 100%)",
        }}
      >
        {/* Mock CRM Interface */}
        <div className="p-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <IconUsers
                size={16}
                style={{ color: "var(--mantine-color-blue-7)" }}
              />
              <div
                className="text-xs font-semibold"
                style={{ color: "var(--mantine-color-blue-8)" }}
              >
                Customer Dashboard
              </div>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-red-400" />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Chart Widget */}
            <div
              className="p-3 rounded-lg"
              style={{ backgroundColor: "var(--mantine-color-blue-0)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <IconChartBar
                  size={12}
                  style={{ color: "var(--mantine-color-blue-6)" }}
                />
                <div
                  className="text-xs"
                  style={{ color: "var(--mantine-color-blue-8)" }}
                >
                  Sales
                </div>
              </div>
              <div className="flex items-end gap-1 h-8">
                {[60, 80, 45, 90, 70].map((height) => (
                  <div
                    key={`chart-bar-${height}`}
                    className="w-2 rounded-sm"
                    style={{
                      height: `${height}%`,
                      backgroundColor: "var(--mantine-color-blue-5)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Calendar Widget */}
            <div
              className="p-3 rounded-lg"
              style={{ backgroundColor: "var(--mantine-color-blue-0)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <IconCalendar
                  size={12}
                  style={{ color: "var(--mantine-color-blue-6)" }}
                />
                <div
                  className="text-xs"
                  style={{ color: "var(--mantine-color-blue-8)" }}
                >
                  Schedule
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }, (_, index) => index).map(
                  (dayIndex) => (
                    <div
                      key={`calendar-day-${dayIndex}`}
                      className="w-3 h-2 rounded-sm"
                      style={{
                        backgroundColor:
                          dayIndex === 4
                            ? "var(--mantine-color-blue-5)"
                            : "var(--mantine-color-gray-2)",
                      }}
                    />
                  ),
                )}
              </div>
            </div>

            {/* Messages Widget */}
            <div
              className="p-3 rounded-lg col-span-2"
              style={{ backgroundColor: "var(--mantine-color-blue-0)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <IconMessages
                  size={12}
                  style={{ color: "var(--mantine-color-blue-6)" }}
                />
                <div
                  className="text-xs"
                  style={{ color: "var(--mantine-color-blue-8)" }}
                >
                  Recent Activity
                </div>
              </div>
              <div className="space-y-1">
                {[70, 80, 90].map((width) => (
                  <div
                    key={`activity-bar-${width}`}
                    className="h-2 rounded-sm"
                    style={{
                      backgroundColor: "var(--mantine-color-gray-2)",
                      width: `${width}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PWA Badge */}
        <div className="absolute bottom-2 right-2">
          <div
            className="px-2 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1"
            style={{ backgroundColor: "var(--mantine-color-blue-6)" }}
          >
            <IconDeviceMobile size={10} />
            Install App
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileTherapistVisualization() {
  return (
    <div className="relative p-8">
      <div className="relative">
        {/* Phone Frame */}
        <div
          className="w-48 h-80 rounded-3xl shadow-xl overflow-hidden border-4"
          style={{
            borderColor: "var(--mantine-color-violet-4)",
            background:
              "linear-gradient(135deg, var(--mantine-color-violet-1) 0%, var(--mantine-color-violet-2) 100%)",
          }}
        >
          {/* Status Bar */}
          <div
            className="h-6 flex items-center justify-between px-4 text-xs"
            style={{ color: "var(--mantine-color-violet-8)" }}
          >
            <span>9:41</span>
            <div className="flex gap-1">
              <div
                className="w-4 h-2 border rounded-sm"
                style={{ borderColor: "var(--mantine-color-violet-6)" }}
              >
                <div className="w-3 h-1 bg-green-500 rounded-sm m-0.5" />
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="p-4 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--mantine-color-violet-3)" }}
              >
                <IconBrain
                  size={20}
                  style={{ color: "var(--mantine-color-violet-7)" }}
                />
              </div>
              <div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: "var(--mantine-color-violet-8)" }}
                >
                  AI Therapist
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--mantine-color-violet-6)" }}
                >
                  Always here to listen
                </div>
              </div>
            </div>

            {/* Chat Bubbles */}
            <div className="flex-1 space-y-3">
              {/* AI Message */}
              <div className="flex">
                <div
                  className="max-w-xs p-3 rounded-xl text-xs"
                  style={{
                    backgroundColor: "var(--mantine-color-violet-3)",
                    color: "var(--mantine-color-violet-8)",
                  }}
                >
                  How are you feeling today? I'm here to help you work through
                  any challenges.
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div
                  className="max-w-xs p-3 rounded-xl text-xs text-white"
                  style={{ backgroundColor: "var(--mantine-color-violet-6)" }}
                >
                  I've been feeling anxious about work lately
                </div>
              </div>

              {/* AI Response */}
              <div className="flex">
                <div
                  className="max-w-xs p-3 rounded-xl text-xs"
                  style={{
                    backgroundColor: "var(--mantine-color-violet-3)",
                    color: "var(--mantine-color-violet-8)",
                  }}
                >
                  That sounds challenging. Let's explore what specific aspects
                  of work are causing this anxiety...
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="mt-4">
              <div
                className="w-full h-8 rounded-full flex items-center px-3 text-xs"
                style={{
                  backgroundColor: "var(--mantine-color-violet-0)",
                  color: "var(--mantine-color-violet-6)",
                }}
              >
                Type your thoughts...
              </div>
            </div>
          </div>
        </div>

        {/* AI Badge */}
        <div className="absolute -top-2 -right-2">
          <div
            className="px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: "var(--mantine-color-violet-6)" }}
          >
            AI Powered
          </div>
        </div>
      </div>
    </div>
  );
}

export function SalesAgentVisualization() {
  return (
    <div className="relative p-8">
      <div
        className="relative w-80 h-64 rounded-xl shadow-lg overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--mantine-color-green-1) 0%, var(--mantine-color-green-3) 100%)",
        }}
      >
        {/* Agent Interface */}
        <div className="p-4 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--mantine-color-green-5)" }}
              >
                <IconBrain size={16} className="text-white" />
              </div>
              <div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: "var(--mantine-color-green-8)" }}
                >
                  Sales Agent AI
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div
                    className="text-xs"
                    style={{ color: "var(--mantine-color-green-6)" }}
                  >
                    Active
                  </div>
                </div>
              </div>
            </div>
            <IconPhone
              size={16}
              style={{ color: "var(--mantine-color-green-6)" }}
            />
          </div>

          {/* Conversation Flow */}
          <div className="flex-1 space-y-3">
            {/* Customer Intent */}
            <div
              className="p-3 rounded-lg border-l-4"
              style={{
                backgroundColor: "var(--mantine-color-green-0)",
                borderLeftColor: "var(--mantine-color-green-5)",
              }}
            >
              <div
                className="text-xs font-semibold mb-1"
                style={{ color: "var(--mantine-color-green-7)" }}
              >
                Customer Intent Detected:
              </div>
              <div
                className="text-xs"
                style={{ color: "var(--mantine-color-green-8)" }}
              >
                "I'm interested in your premium package"
              </div>
            </div>

            {/* AI Response */}
            <div
              className="p-3 rounded-lg"
              style={{ backgroundColor: "var(--mantine-color-green-2)" }}
            >
              <div
                className="text-xs font-semibold mb-1"
                style={{ color: "var(--mantine-color-green-8)" }}
              >
                AI Response:
              </div>
              <div
                className="text-xs"
                style={{ color: "var(--mantine-color-green-8)" }}
              >
                "Great! I'd love to tell you about our premium features. Based
                on your business type, I think you'd benefit most from..."
              </div>
            </div>

            {/* Action Items */}
            <div className="grid grid-cols-2 gap-2">
              <div
                className="p-2 rounded text-center text-xs"
                style={{
                  backgroundColor: "var(--mantine-color-green-1)",
                  color: "var(--mantine-color-green-7)",
                }}
              >
                Schedule Demo
              </div>
              <div
                className="p-2 rounded text-center text-xs"
                style={{
                  backgroundColor: "var(--mantine-color-green-1)",
                  color: "var(--mantine-color-green-7)",
                }}
              >
                Send Quote
              </div>
            </div>
          </div>
        </div>

        {/* Twilio Badge */}
        <div className="absolute bottom-2 right-2">
          <div
            className="px-2 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1"
            style={{ backgroundColor: "var(--mantine-color-green-6)" }}
          >
            <IconShield size={10} />
            Twilio
          </div>
        </div>
      </div>
    </div>
  );
}

export function HealthcareScaleVisualization() {
  return (
    <div className="relative p-8">
      <div
        className="relative w-80 h-64 rounded-xl shadow-lg overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--mantine-color-orange-1) 0%, var(--mantine-color-orange-3) 100%)",
        }}
      >
        {/* Scale Metrics Dashboard */}
        <div className="p-4 h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div
              className="text-sm font-semibold"
              style={{ color: "var(--mantine-color-orange-8)" }}
            >
              Healthcare Platform Scale
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div
                className="text-xs"
                style={{ color: "var(--mantine-color-orange-6)" }}
              >
                Multi-Region
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Users Metric */}
            <div
              className="p-3 rounded-lg text-center"
              style={{ backgroundColor: "var(--mantine-color-orange-0)" }}
            >
              <div
                className="text-lg font-bold"
                style={{ color: "var(--mantine-color-orange-7)" }}
              >
                10x
              </div>
              <div
                className="text-xs"
                style={{ color: "var(--mantine-color-orange-6)" }}
              >
                More Users
              </div>
            </div>

            {/* Performance Metric */}
            <div
              className="p-3 rounded-lg text-center"
              style={{ backgroundColor: "var(--mantine-color-orange-0)" }}
            >
              <div
                className="text-lg font-bold"
                style={{ color: "var(--mantine-color-orange-7)" }}
              >
                99.9%
              </div>
              <div
                className="text-xs"
                style={{ color: "var(--mantine-color-orange-6)" }}
              >
                Uptime
              </div>
            </div>
          </div>

          {/* Architecture Visualization */}
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: "var(--mantine-color-orange-0)" }}
          >
            <div
              className="text-xs font-semibold mb-2"
              style={{ color: "var(--mantine-color-orange-7)" }}
            >
              Architecture:
            </div>
            <div className="grid grid-cols-3 gap-2">
              {/* Regions */}
              {["US-East", "EU-West", "Asia-Pac"].map((region) => (
                <div
                  key={region}
                  className="text-center p-2 rounded"
                  style={{
                    backgroundColor: "var(--mantine-color-orange-2)",
                    color: "var(--mantine-color-orange-8)",
                  }}
                >
                  <div className="text-xs font-semibold">{region}</div>
                  <div className="flex justify-center mt-1">
                    <div
                      className="w-3 h-3 rounded"
                      style={{
                        backgroundColor: "var(--mantine-color-orange-5)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Azure + K8s Badge */}
        <div className="absolute bottom-2 right-2">
          <div
            className="px-2 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: "var(--mantine-color-orange-6)" }}
          >
            Azure + K8s
          </div>
        </div>
      </div>
    </div>
  );
}
