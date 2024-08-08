import React, { useEffect, useState } from "react";
import "./Stats.css";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const { ref: statRef, inView: Statview } = useInView();
  const [SuccessRate, setSuccessRate] = useState(0);

  useEffect(() => {
    if (Statview) {
      if (SuccessRate < 88) {
        setTimeout(() => {
          setSuccessRate(SuccessRate + 1);
        }, 10);
      }
    }
  }, [SuccessRate, Statview]);

  return (
    <div className="stats">
      <h2 className="stats_head">Why Nest Fertility & IVF?</h2>
      <div className="youtubeEmbedDiv">
        <iframe
          className="youtubeEmbed"
          
          src="https://www.youtube-nocookie.com/embed/sm3txNWurus?si=MaQojNNDs-pV1pHd?&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="statLists">
        <div className="statList">
          <div title="Best Success Rate in IVF" className="stat">
            <p className="statHead">{SuccessRate}%</p>
            <p className="statUnder">Success Rate</p>
          </div>
          <div title="Experienced IVF Specialists" className="stat">
            <p className="statHead" ref={statRef}>
              {Math.floor(SuccessRate / 7)}+ Yrs
            </p>
            <p className="statUnder">Experience</p>
          </div>
          <div title="Experienced IVF Specialists" className="stat statDesktop">
            <img className="statIcon" src="/doc.png" alt="Fertility Doctor" />
            <p className="statUnder">Top IVF Experts</p>
          </div>
          <div title="Affordable Cost" className="stat statDesktop">
            <img className="statIcon" src="/pig.png" alt="Fertility Doctor at cost-effective prices" />
            <p className="statUnder">Affordable</p>
          </div>
        </div>
        <div title="Experienced IVF Specialists" className="statList statListMob">
          <div className="stat">
            <img className="statIcon" src="/doc.png" alt="Fertility Doctor" />
            <p className="statUnder">Top IVF Experts</p>
          </div>
          <div title="Affordable Cost" className="stat">
            <img className="statIcon" src="/pig.png" alt="Fertility Doctor at cost-effective prices" />
            <p className="statUnder">Affordable</p>
          </div>
        </div>
      </div>
    </div>
  );
}
