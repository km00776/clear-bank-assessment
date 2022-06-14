import React from "react";
import { getCats } from "./api";
import Card from "./components/Card/CardComponent";
import NavBar from "./components/NavBar/NavBar";
import { CAT_URI } from "./constants";
import styles from "./Home.module.css";
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    };
  }

  async componentDidMount() {
    getCats(CAT_URI).then((data) => {
      this.setState({ cats: data }, () => {
        getCats(CAT_URI);
      });
    });
  }

  render() {
    return (
      <>
        <NavBar />
        <div className={styles.cardList}>
          {this.state.cats.map((data) => (
            <Card data={data} />
          ))}
        </div>
      </>
    );
  }
}
