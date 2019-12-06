import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import CompletedTableBody from "./CompletedTableBody";

class CompletedHike extends Component {
  state = {
    completedHikes: []
  };

  componentDidMount() {
    const url = "https://hikingapi.azurewebsites.net/api/HikeItems";

    axios
      .get(url)
      .then((response) => {
          this.mapResponseData(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  mapResponseData = (response) => {
    const hikeIds = response.data;
    let idString = "";

    hikeIds.forEach(element => {
      if (element.completed === true) {
        idString += element.toDo + ",";
      }
    });
    if (idString !== "") {
      axios
        .get(
          "https://www.hikingproject.com/data/get-trails-by-id?ids=%27" +
            idString +
            "%27&key=200638014-3dd93782c23a676e212d6ae420598331"
        )
        .then(response => {
          const hikeData = response.data.trails;

          const updatedHikeData = hikeData.map(hike => {
            return {
              ...hike
            };
          });

          this.setState({ completedHikes: updatedHikeData });
        });
    }
    else{
        this.setState({completedHikes : []})
    }
  }

  render() {
    const completedHikeList = this.state.completedHikes.map(hike => {
      return (
        <CompletedTableBody
          key={hike.id}
          trailName={hike.name}
          length={hike.length}
          elevation={hike.ascent}
          location={hike.location}
          rating={hike.stars}
        />
      );
    });

    return (
      <Table className="hike-table my-3" responsive>
        <thead>
          <tr>
            <th>Trail Name</th>
            <th>Length</th>
            <th>Elevation Gain</th>
            <th>Location</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{completedHikeList}</tbody>
      </Table>
    );
  }
}

export default CompletedHike;
