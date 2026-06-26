import StatsCard from "./StatsCard";

function StatsSection() {
  return (
    <section className="stats-section">
      <StatsCard
        number="12"
        title="Applications Sent"
      />

      <StatsCard
        number="5"
        title="Responses Received"
      />

      <StatsCard
        number="3"
        title="Interviews Scheduled"
      />
    </section>
  );
}

export default StatsSection;