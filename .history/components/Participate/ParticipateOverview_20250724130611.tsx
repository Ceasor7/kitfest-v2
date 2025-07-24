import ParticipateOverviewCard from "./ParticipateOverviewCard";

const ParticipateOverview = () => {
  const cards: {
    iconName:
      | "UserCheck"
      | "SnowFlake"
      | "History"
      | "UsersRound"
      | "Handshake"
      | "Component";
    iconBgColor: string;
    cardBgColor: string;
    title: string;
    description: string;
  }[] = [
    {
      iconName: "UserCheck",
      iconBgColor: "bg-[#00913c]",
      cardBgColor: "bg-gray-200",
      title: "Partiticipation",
      description:
        "You can participate in KITFest through the following ways: trainees, volunteers, audiences, vendors and partners.",
    },
    {
      iconName: "Component",
      iconBgColor: "bg-[#ff6f00]",
      cardBgColor: "bg-gray-200",
      title: "Programs and Features",
      description:
        "The focus of our programs is on the development of Kenyan theatre. Through international performances and training and workshops, we strive to enhance theatre through new ideas and progressive steps.",
    },
    {
      iconName: "SnowFlake",
      iconBgColor: "bg-[#7d0000]",
      cardBgColor: "bg-gray-200",
      title: "Experiences",
      description:
        "Apart from theatrical performances, the festival provides attendees with a variety of different experiences. Most activities at KITFest are curated to promote fun, knowledge sharing, collaboration, and cultural exchange.",
    },
    {
      iconName: "Handshake",
      iconBgColor: "bg-[#860000]",
      cardBgColor: "bg-gray-200",
      title: "Partnerships",
      description:
        "With our partners, we have the resources necessary to stage a festival of the highest quality and deliver the incredible experiences we always strive to provide. You can be part of the amazing organizations that have supported KITFest over the years.",
    },
    {
      iconName: "History",
      iconBgColor: "bg-[#b59371]",
      cardBgColor: "bg-gray-200",
      title: "History",
      description:
        "From humble beginnings to global reach, the story of KITFest dates back to the year 2013, when the festival was just an idea on our founder's mind. Explore the progress KITFest has made and the promise of a powerful future by going on a journey through time. Coming soon.",
    },
    {
      iconName: "UsersRound",
      iconBgColor: "bg-[#b40000]",
      cardBgColor: "bg-gray-200",
      title: "The Team",
      description:
        "It is the efforts of many individuals and organizations that make this festival possible each year. KITFest's success depends, however, heavily on the main management team that provides vision and leadership. The teams' profiles coming up soon.",
    },
  ];

  return (
    <section className=" py-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <ParticipateOverviewCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipateOverview;
