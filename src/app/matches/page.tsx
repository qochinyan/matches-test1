"use client";

import { useEffect, useState } from "react";
import "./matches.scss";
import logo from "@app/assets/MatchTracker.png";
import warnIcon from "@app/assets/warn.png";
import teamIcon from "@app/assets/teamIcon.png";
import Image from "next/image";
import UpdateButton from "@app/components/UpdateButton/UpdateButton";
import { Match, statusButtonEnum } from "@app/scripts/types";
import StatusButton from "@app/components/StatusButton/StatusButton";
import Loader from "@app/components/Loader/Loader";

const Dashboard = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const handleUpdateClick = () => {
    setAnimate(true);

    setTimeout(() => setAnimate(false), 2000);
  };
  const fetchMatches = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://app.ftoyd.com/fronttemp-service/frontteamp"
      );
      if (!res.ok) {
        throw new Error("Ошибка: не удалось загрузить информацию");
      }
      const data = await res.json();
      setError(null);

      setMatches(data.data.matches);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Ошибка: возникла другая ошибка"
      );
      setMatches([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="matches-container">
      {loading && <Loader />}
      <div className="header-container">
        <Image src={logo} alt="Match Tracker" className="logo" />
        <div className="statuses">
          {" "}
          {error && (
            <div className="error-button">
              <Image src={warnIcon} alt="Warn" />
              <p className="error-description">{error}</p>
            </div>
          )}
          <div
            onClick={() => {
              fetchMatches();
              handleUpdateClick();
            }}
          >
            <UpdateButton
              disabled={false}
              _class={animate || loading ? "anim" : ""}
            />
          </div>
        </div>
      </div>
      <div className="matches-array-container">
        {" "}
        {!loading &&
          matches.map((match, i) => {
            return (
              <div key={i} className="match-box">
                <div className="home-team">
                  <Image src={teamIcon} alt="logo" className="team-logo" />
                  <p className="team-name">{match.homeTeam.name}</p>
                </div>
                <div className="status-scores">
                  {match.status != statusButtonEnum.Scheduled && (
                    <p className="score">
                      {match.homeScore} : {match.awayScore}
                    </p>
                  )}
                  <StatusButton status={match.status} />
                </div>
                <div className="away-team">
                  <Image src={teamIcon} alt="logo" className="team-logo" />
                  <p className="team-name">{match.awayTeam.name}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
