import Image from "next/image";
import React from "react";

const ParticipateHero = () => {
  return (
    <div>
      <div className="bg-yellow-200 ">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className=" flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h1>Get Involved with KITFest</h1>
              <p>
                Get Involved with KITFest – Are an artist, volunteer, trainee,
                vendor, partner, or audience member, there’s a place for you at
                the festival. Explore how you can participate and be part of the
                celebration of theatre and culture.
              </p>
            </div>
            <div>
              <Image
                src="/images/participate-image.png"
                alt="Participate"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipateHero;
