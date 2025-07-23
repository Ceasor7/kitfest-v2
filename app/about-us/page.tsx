import IndexAbout from "@/components/About/IndexAbout";
import KitfestOrg from "@/components/About/KitfestOrg";
import DividerImage from "@/components/Homepage/DividerImage";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <section>
        <IndexAbout />
      </section>
      <section>
        <DividerImage src="/images/border-pattern.svg" alt="Festival scene" />
      </section>
      <section>
        <KitfestOrg />
      </section>
    </div>
  );
};

export default page;
