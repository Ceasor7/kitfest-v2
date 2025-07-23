import FestivalOverviewCard from "./FestivalOverviewCard";

const FestivalOverview = () => {
  const cards: {
    iconName: "music" | "star" | "calendar-heart";
    iconBgColor: string;
    cardBgColor: string;
    title: string;
    description: string;
  }[] = [
    {
      iconName: "music",
      iconBgColor: "bg-pink-500",
      cardBgColor: "bg-white",
      title: "Live Music",
      description: "Enjoy world-class performances across multiple stages.",
    },
    {
      iconName: "star",
      iconBgColor: "bg-yellow-500",
      cardBgColor: "bg-white",
      title: "Headliners",
      description: "See your favorite artists up close and personal.",
    },
    {
      iconName: "calendar-heart",
      iconBgColor: "bg-blue-500",
      cardBgColor: "bg-white",
      title: "Full Schedule",
      description: "Plan your experience with our interactive event calendar.",
    },
    {
      iconName: "music",
      iconBgColor: "bg-pink-500",
      cardBgColor: "bg-white",
      title: "Live Music",
      description: "Enjoy world-class performances across multiple stages.",
    },
    {
      iconName: "star",
      iconBgColor: "bg-yellow-500",
      cardBgColor: "bg-white",
      title: "Headliners",
      description: "See your favorite artists up close and personal.",
    },
    {
      iconName: "calendar-heart",
      iconBgColor: "bg-blue-500",
      cardBgColor: "bg-white",
      title: "Full Schedule",
      description: "Plan your experience with our interactive event calendar.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Festival Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <FestivalOverviewCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalOverview;
