import StatsCard from "./StatsCard";

function StatsSection() {
  return (
    <>
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
    </>
  );
}

export default StatsSection;