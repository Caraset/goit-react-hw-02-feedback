import React, { Component } from "react";
import s from "./Statistics.module.css";

class Statistic extends Component {
  updateStats() {
    let stats = this.props.options;
    const elements = [];

    for (let stat in stats) {
      elements.push(
        <li key={stat} className={s.stat__item}>
          {stat}: {stats[stat]}
        </li>
      );
    }

    return elements;
  }
  render() {
    return (
      <div className={s.stat}>
        <h2 className={s.stat__title}>Statistics:</h2>
        <ul className={s.stat__list}>{this.updateStats()}</ul>
      </div>
    );
  }
}

export default Statistic;
