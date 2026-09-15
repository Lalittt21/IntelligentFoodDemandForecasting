import {
  LayoutDashboard,
  BrainCircuit,
  BarChart3,
  SlidersHorizontal,
  Utensils,
  Users,
  Trash2,
  TrendingUp,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "./App.css";

const demandData = [
  { day: "Mon", actual: 1080, predicted: 1100 },
  { day: "Tue", actual: 1160, predicted: 1140 },
  { day: "Wed", actual: 1210, predicted: 1190 },
  { day: "Thu", actual: 1140, predicted: 1170 },
  { day: "Fri", actual: 1030, predicted: 1060 },
  { day: "Sat", actual: 850, predicted: 870 },
  { day: "Sun", actual: 720, predicted: 750 },
];

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <Utensils size={20} />
          </div>

          <div>
            <h2>SmartCanteen</h2>
            <span>AI Management</span>
          </div>
        </div>

        <nav>
          <p className="nav-label">MAIN MENU</p>

          <a className="nav-item active">
            <LayoutDashboard size={19} />
            Dashboard
          </a>

          <a className="nav-item">
            <BrainCircuit size={19} />
            Demand Forecast
          </a>

          <a className="nav-item">
            <BarChart3 size={19} />
            Analytics
          </a>

          <a className="nav-item">
            <SlidersHorizontal size={19} />
            What-If Simulator
          </a>

          <p className="nav-label">MANAGEMENT</p>

          <a className="nav-item">
            <CalendarDays size={19} />
            Calendar
          </a>

          <a className="nav-item">
            <Users size={19} />
            Attendance
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="sdg-card">
            <div className="sdg-icon">
              <Sparkles size={18} />
            </div>

            <div>
              <strong>SDG 2</strong>
              <p>Zero Hunger</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">CANTEEN OVERVIEW</p>
            <h1>Good morning, Admin 👋</h1>
          </div>

          <div className="topbar-right">
            <div className="date">
              <CalendarDays size={17} />
              September 15, 2026
            </div>

            <div className="avatar">A</div>
          </div>
        </header>

        {/* KPI Cards */}
        <section className="stats-grid">
          <StatCard
            title="Today's Meals Served"
            value="1,248"
            change="+8.4%"
            positive
            icon={<Utensils size={20} />}
          />

          <StatCard
            title="Tomorrow's Forecast"
            value="1,310"
            change="+5.0%"
            positive
            icon={<BrainCircuit size={20} />}
            highlight
          />

          <StatCard
            title="Estimated Food Waste"
            value="62"
            suffix=" meals"
            change="-12.5%"
            positive
            icon={<Trash2 size={20} />}
          />

          <StatCard
            title="Current Attendance"
            value="1,286"
            change="+6.2%"
            positive
            icon={<Users size={20} />}
          />
        </section>

        {/* Forecast + Recommendation */}
        <section className="content-grid">
          <div className="card chart-card">
            <div className="card-header">
              <div>
                <p className="eyebrow">DEMAND ANALYSIS</p>
                <h2>Meal Demand Overview</h2>
              </div>

              <div className="legend">
                <span>
                  <i className="dot actual"></i>
                  Actual
                </span>

                <span>
                  <i className="dot predicted"></i>
                  Predicted
                </span>
              </div>
            </div>

            <div className="chart">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={demandData}>
                  <defs>
                    <linearGradient
                      id="actualGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopOpacity={0.18} />
                      <stop offset="100%" stopOpacity={0} />
                    </linearGradient>

                    <linearGradient
                      id="predictedGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopOpacity={0.12} />
                      <stop offset="100%" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="actual"
                    strokeWidth={2.5}
                    fill="url(#actualGradient)"
                  />

                  <Area
                    type="monotone"
                    dataKey="predicted"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fill="url(#predictedGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Recommendation */}
          <div className="card recommendation-card">
            <div className="ai-heading">
              <div className="ai-icon">
                <BrainCircuit size={21} />
              </div>

              <div>
                <p className="eyebrow">AI RECOMMENDATION</p>
                <h2>Tomorrow's Plan</h2>
              </div>
            </div>

            <div className="forecast-number">
              <span>Predicted demand</span>
              <strong>1,310</strong>
              <small>meals</small>
            </div>

            <div className="recommendation">
              <Sparkles size={18} />

              <p>
                Prepare approximately <strong>1,375 meals</strong> tomorrow
                using a 5% safety buffer.
              </p>
            </div>

            <div className="recommendation-stats">
              <div>
                <span>Expected consumption</span>
                <strong>1,310</strong>
              </div>

              <div>
                <span>Estimated excess</span>
                <strong>65 meals</strong>
              </div>
            </div>

            <button className="primary-button">
              View Full Forecast
              <ArrowUpRight size={17} />
            </button>
          </div>
        </section>

        {/* Bottom section */}
        <section className="bottom-grid">
          <div className="card">
            <div className="card-header">
              <div>
                <p className="eyebrow">PERFORMANCE</p>
                <h2>Waste Reduction</h2>
              </div>

              <span className="success-badge">
                <TrendingUp size={15} />
                12.5% lower
              </span>
            </div>

            <div className="impact-content">
              <div className="impact-number">
                <strong>438</strong>
                <span>meals saved this month</span>
              </div>

              <div className="progress">
                <div className="progress-bar"></div>
              </div>

              <div className="impact-footer">
                <span>Monthly waste reduction</span>
                <strong>18.6%</strong>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div>
                <p className="eyebrow">MODEL PERFORMANCE</p>
                <h2>Prediction Accuracy</h2>
              </div>

              <span className="model-status">Model Active</span>
            </div>

            <div className="accuracy">
              <strong>94.2%</strong>
              <span>Prediction accuracy</span>
            </div>

            <div className="model-metrics">
              <div>
                <span>MAE</span>
                <strong>48.3</strong>
              </div>

              <div>
                <span>RMSE</span>
                <strong>71.8</strong>
              </div>

              <div>
                <span>R²</span>
                <strong>0.94</strong>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({
  title,
  value,
  suffix,
  change,
  positive,
  icon,
  highlight,
}) {
  return (
    <div className={`stat-card ${highlight ? "highlight" : ""}`}>
      <div className="stat-top">
        <div className="stat-icon">{icon}</div>

        <span className={positive ? "positive" : "negative"}>
          {change}
        </span>
      </div>

      <p>{title}</p>

      <h2>
        {value}
        {suffix && <small>{suffix}</small>}
      </h2>
    </div>
  );
}

export default App;