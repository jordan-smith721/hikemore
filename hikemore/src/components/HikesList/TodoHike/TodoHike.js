import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Aux from "../../../hoc/Auxillary";
import "./TodoHike.css";
import TodoTableBody from "./TodoTableBody";
import axios from "axios";
import AddModal from '../../AddHikeModal/AddHikeModal';



class TodoHike extends Component {
  state = {
    todoHikes: []
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

  deleteHikeHandler = id => {
    const url = "https://hikingapi.azurewebsites.net/api/HikeItems";

    axios
      .delete(url + "/" + id)
      .then((response) => {
          this.mapResponseData(response);
      })
      .catch(error => {
        this.setState({ todoHikes: [] });
        console.log(error);
      });
  };

  mapResponseData = (response) => {
    let hikeIds = response.data;
    let idString = "";

    hikeIds.forEach(element => {
      if (element.completed === false) {
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

          this.setState({ todoHikes: updatedHikeData });
        });
    }
    else{
        this.setState({todoHikes : []})
    }
  }

  completeHikeHandler = id => {
    const url = "https://hikingapi.azurewebsites.net/api/HikeItems";
    console.log(id);

    axios.put(url + "/" + id)
    .then((response) => {
        this.mapResponseData(response);
    })
    .catch(error => {
      console.log(error);
    });
  };

  addHikeHandler = () => {
    let hikeDropDown = document.getElementById('hikes');
    let hikeId = hikeDropDown.options[hikeDropDown.selectedIndex].value.toString();

    axios.post(
        'https://hikingapi.azurewebsites.net/api/HikeItems',
        { "toDo": hikeId, "completed": false },
        { headers: { 'Content-Type': 'application/json' } }
    )
    .then((response) => {
        axios
        .get(
            "https://www.hikingproject.com/data/get-trails-by-id?ids=%27" +
              response.data.toDo +
              "%27&key=200638014-3dd93782c23a676e212d6ae420598331"
          )
          .then(response => {
            const hikeData = response.data.trails;
  
            let updatedState = this.state.todoHikes.map(hike => {
                return {
                    ...hike
                }
            }).concat(hikeData[0]);

            this.setState({ todoHikes: updatedState});
          });

          
    });
  }

  render() {
    const toDoHikeList = this.state.todoHikes.map(hike => {
      return (
        <TodoTableBody
          key={hike.id}
          trailName={hike.name}
          length={hike.length}
          elevation={hike.ascent}
          location={hike.location}
          rating={hike.stars}
          clicked={() => this.deleteHikeHandler(hike.id)}
          completed={() => this.completeHikeHandler(hike.id)}
        />
      );
    });

    return (
      <Aux>
        <Table className="hike-table my-3" responsive>
          <thead>
            <tr>
              <th>Delete</th>
              <th>Trail Name</th>
              <th>Length</th>
              <th>Elevation Gain</th>
              <th>Location</th>
              <th>Rating</th>
              <th>Mark as Completed</th>
            </tr>
          </thead>
          <tbody>{toDoHikeList}</tbody>
        </Table>
        <AddModal clicked={() => this.addHikeHandler()} />
      </Aux>
    );
  }
}

export default TodoHike;
