import ParticipateOverviewCard from "./ParticipateOverviewCard";

const ParticipateOverview = () => {
  const cards: {
    iconName:
      | "LuDrum"
      | "LuHandshake"
      | "FaChalkboardUser"
      | "MdOutlineVolunteerActivism"
      | "BsShopWindow"
      | "LiaUsersSolid";
    iconBgColor: string;
    cardBgColor: string;
    title: string;
    description: string;
  }[] = [
    {
      iconName: "LuDrum",
      iconBgColor: "bg-[#00913c]",
      cardBgColor: "bg-gray-200",
      title: "Performing Groups",
      description:
        "Performing at KITFest requires submission of an application. This is only possible after a call for participation has been made which marks the opening of the submission process. All theatre teams from across the world are eligible to apply. Application for #KITFest2025 is now open.",
    },
    {
      iconName: "LuHandshake",
      iconBgColor: "bg-[#ff6f00]",
      cardBgColor: "bg-gray-200",
      title: "Partnerships",
      description:
        "KITFest is a non-profit festival which relies on partnerships to enable the celebration of theatre. We aim to provide our partners with exquisite people experiences that contribute to the overall social, theatrical and artistic features of the festival.",
    },
    {
      iconName: "FaChalkboardUser",
      iconBgColor: "bg-[#7d0000]",
      cardBgColor: "bg-gray-200",
      title: "Workshops & Masterclasses",
      description:
        "Training in both artistic and business acumen has been at the core of our activities. Through cross-platform and agency collaboration, we hold workshops, masterclasses and residencies for the Kenyan artists and groups.",
    },
    {
      iconName: "MdOutlineVolunteerActivism",
      iconBgColor: "bg-[#860000]",
      cardBgColor: "bg-gray-200",
      title: "Volunteers",
      description:
        "As a non-profit festival, volunteers provide invaluable assistance. In return, we ensure holistic development with career-building workshops and exposure to global troupes.",
    },
    {
      iconName: "BsShopWindow",
      iconBgColor: "bg-[#b59371]",
      cardBgColor: "bg-gray-200",
      title: "Vendors",
      description:
        "KITFest, in collaboration with instamarket254, invites vendors across sectors to set up an on-site presence to serve theatre audiences and performers.",
    },
    {
      iconName: "LiaUsersSolid",
      iconBgColor: "bg-[#b40000]",
      cardBgColor: "bg-gray-200",
      title: "Audiences",
      description:
        "The festival attracts theatre-lovers from Kenya and abroad, with international fans traveling to Kenya in November to experience the event.",
    },
  ];

  return (
    <section className="py-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-7 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <ParticipateOverviewCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipateOverview;
