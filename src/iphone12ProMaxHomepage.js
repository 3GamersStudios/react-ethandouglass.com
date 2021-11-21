
import React from "react";
import PropTypes from "prop-types";
  import { Link } from 'react-router-dom'
import "./iphone12ProMaxHomepage.css";

class Iphone12promaxhomepage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  handleClick(target) {
    if (this.props.onClick) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onClick({ type: 'button', name: name, index: index, id: id });
    }
  }
    
  render() {
    
    return (
          <div data-layer="458f2a44-3a64-4094-bf77-0da43a1937f8" className="iphone12ProMaxHomepage">        <div data-layer="f89fd872-08b5-4314-8927-9dfcc8085480" className="navbar">            <div data-layer="1dcc7804-6054-4dfc-a283-991e6f6cfd7f" className="rectangle2"></div>
            <div data-layer="84d3b7a7-5bf3-46e1-8233-597129921ef6" className="ethanDouglass6ee79e67">Ethan Douglass</div>
            <div data-layer="75f52f00-a822-468d-9e90-12c2e55b2824" className="hamburgerIcon">                <div data-layer="b457f77f-4bd3-47a2-8d58-e189e65f7e5d" className="rectangle9"></div>
                <div data-layer="5f050a02-4140-42f6-a677-c80a8a9d7fe8" className="rectangle10"></div>
                <div data-layer="d4062588-0a46-4e37-b35b-8784c7a46a2d" className="rectangle11"></div>
</div>
            <div data-layer="f5c1c285-9e3b-4ebb-a44f-2171cc8e0fa3" className="links">                <div data-layer="d7c73366-daf2-4120-b034-8230dbb523c3" className="rectangle12"></div>
                <div data-layer="ba51e9de-d147-4d67-87ff-ad7090207efc" className="component33">                    <div data-layer="780ed609-ae1b-44dc-abd0-a16d55971827" className="contact">Contact</div>
</div>
                <Link data-layer="633c1cff-33c6-4911-87ec-8ee1b15285ba" className="classwork8cbb49ce" to='/Classwork'>                    <div data-layer="b5716c85-89f8-4591-8dc6-5917e9c2481d" className="classwork061998fa">Classwork</div>
</Link>
                <Link data-layer="ce28c74b-9103-476b-b38a-5be68d1e4d36" className="homeLink" to='/'>                    <div data-layer="2046a9bc-84c9-4ede-a6a6-6a5d2f3a4218" className="home">Home</div>
</Link>
</div>
</div>
        <div data-layer="85017866-01bf-415d-879e-0eeb7fbdec27" className="hiThereImEthanaspiringDeveloperAndStudentInSherwoodOregonFluentInC"><span className="hiThereImEthanaspiringDeveloperAndStudentInSherwoodOregonFluentInC-0">Hi there, I'm Ethan.<br /></span><span className="hiThereImEthanaspiringDeveloperAndStudentInSherwoodOregonFluentInC-21">Aspiring developer and student in Sherwood, Oregon. Fluent in C# and C++. Check out my latest classwork and projects.</span></div>
        <div data-layer="27620e7f-5df9-4a50-9af5-b68e5644f313" className="rectangle13"></div>
        <div data-layer="f62db4b0-1b0c-41d0-9f20-c4409cb4b263" className="introBlurb">            <div data-layer="95a069e6-90fa-46d4-945a-eebd0e6c2353" className="maskGroup2"></div>
            <div data-layer="ee2baacd-b379-4691-8f8b-177f6a3f5252" className="niceToSeeYou">Nice to See You!</div>
            <div data-layer="674bb848-40d8-4c1a-a7f1-634db103933b" className="iBetYouWantToKnowAboutMeCauseYourOnMySite">I bet you want to know about me (cause your on my site)</div>
            <div data-layer="f416a747-62b6-4711-977c-c5afce8df231" className="iLiveInSherwoodOregonInTheUnitedStatesAndILoveAllThingsTechAndProgrammingIveWorkedOnAllSortsOfHobbyProjectsIncludingMicroelectronicsGameDesignFullStackDevelopmentAndSomeOtherThingsTooMyDreamJobWouldBeASoftwa">I live in Sherwood, Oregon in the United States and I love all things tech and programming, I've worked on all sorts of hobby projects including microelectronics, game design, full stack development and some other things too. My dream job would be a software engineer, and I am going to get there!</div>
            <div data-layer="8dc456b6-4214-44ba-9559-ecb3b1afd8ef" className="okSoHeresABlurb">Ok so here's a blurb:</div>
</div>
        <div data-layer="4765269a-d85d-4619-8671-1d4d855bb954" className="footer7dbd6d18">            <div data-layer="3bc9b7b1-7a94-485a-83a1-626f85f8660a" className="footer"></div>
            <Link data-layer="3f79c413-0469-4ab9-b36d-d78026d870d8" className="classworka39cbfba" to='/Classwork'>                <div data-layer="dc478e51-eb35-4caa-8893-dd253364831b" className="classwork5ded3970">Classwork</div>
</Link>
            <Link data-layer="2e71dcbb-6a4b-41c8-99f1-7d50f07435b7" className="classworkf962f8b9" to='/Classwork'>                <div data-layer="8c2f70df-3f31-43fe-b51c-33d816312538" className="classworkd3ba3790">Contact</div>
</Link>
            <Link data-layer="227e0b28-68fd-486d-907b-ef23c87560dc" className="projects" to='/Projects'>                <div data-layer="590cd67c-4153-463b-a109-381f24cfc247" className="classwork">Projects</div>
</Link>
            <div data-layer="27955ecf-5d43-4a57-bd42-61e3a712ec55" className="ethanDouglass">©Ethan Douglass</div>
            <div data-layer="31c765ca-b9b3-4ff7-aeef-dd3f2c32c2dd" className="psstGoDoSomeExploring">Psst! Go do some exploring!</div>
</div>
</div>

    );
  }
}



export default Iphone12promaxhomepage;
          