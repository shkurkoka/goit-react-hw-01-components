import React from "react";
import './Stat.css';

const Statistics = ({stats}) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map((stat, index) => (
          <li className="stat-item" key={index}>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;