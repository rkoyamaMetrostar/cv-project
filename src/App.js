import React, {Component} from "react";
import Resume from "./components/Resume";
import Blank from "./components/Blank";
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      user: {
        name: '',
        email: '',
        phone: ''
      },
      school: {
        name: '',
        degree: '',
        startDate: '',
        endDate: ''
      },
      job: {
        company: '',
        title: '',
        description: '',
        startDate: '',
        endDate: ''
      },
      jobs: [],
      resume: []
    }

  };

  onSubmitUser = (e) => {

  }

  onChange = (e) => {
    
  }

  onSubmitResume = (e) => {
    // compile all components into resume
  }

  render() {
    const { user, school, job, jobs, resume } = this.state;

    return (
        <div className="App">
          {resume.length
              ? <Resume resume="resume"/>
              : <Blank />
          }
          <div className="user-input">
            <h2>General Information</h2>
            <form onSubmit={this.onSubmitUser}>
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={this.handleChange}
              />
              <input
                id="email"
                type="text"
                placeholder="Email"
                value={user.email}
                onChange={this.handleChange}
              />
              <input
                id="phone"
                type="text"
                placeholder="Phone Number"
                value={user.phone}
                onChange={this.handleChange}
              />
              <button type="submit">{resume.user ? "Save Changes" : "Submit"}</button>
            </form>
          </div>

        </div>
    );
  }
}

export default App;
