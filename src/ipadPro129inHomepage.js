
import React from "react";
import PropTypes from "prop-types";
  import { Link } from 'react-router-dom'
import "./ipadPro129inHomepage.css";

class Ipadpro129inhomepage extends React.Component {

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
          <div data-layer="beaa4547-720e-447f-9b34-60494e49f8d5" className="ipadPro129inHomepage">        <div data-layer="492959fc-6999-4a87-b3fa-ad2aa8fe89cc" className="navbar">            <div data-layer="c708161e-cf21-4b9b-b92d-17cbbea78952" className="rectangle2"></div>
            <div data-layer="867393fc-82da-4555-bafc-df3456b169fb" className="component32">                <div data-layer="7ce0749b-a152-4987-b5ef-c6b6c4873c59" className="contact">Contact</div>
</div>
            <Link data-layer="d2ed74d3-c0da-4743-929e-777f5f1c52e7" className="classwork040bb5cf" to='/Classwork'>                <div data-layer="4c0dbf69-cdfa-4d1d-84b2-c4ec25179d16" className="classwork8d485583">Classwork</div>
</Link>
            <Link data-layer="2da416d2-f606-4a6e-8581-4ff75fe02c49" className="homeLink" to='/'>                <div data-layer="319ba45f-ca1c-40de-8137-b639f1d90e33" className="home">Home</div>
</Link>
            <div data-layer="31f87995-02fe-45b7-b797-9bb4394a55b3" className="ethanDouglass27c0ca80">Ethan Douglass</div>
</div>
        <div data-layer="5f2d5c8b-3fca-4088-804a-1a4c373296ba" className="introBlurb">            <div data-layer="6d61b0b2-24c8-4ed0-9b61-bbdebfe11cd6" className="maskGroup2"></div>
            <div data-layer="121835dc-9258-4e0d-b7e5-8b007bfee62f" className="niceToSeeYou">Nice to See You!</div>
            <div data-layer="abf845ef-daa1-4476-9a5a-3b970289be98" className="iBetYouWantToKnowAboutMeCauseYourOnMySite">I bet you want to know about me (cause your on my site)</div>
            <div data-layer="d8e68628-aa7b-4544-a7d2-f663f0eae5c4" className="iLiveInSherwoodOregonInTheUnitedStatesAndILoveAllThingsTechAndProgrammingIveWorkedOnAllSortsOfHobbyProjectsIncludingMicroelectronicsGameDesignFullStackDevelopmentAndSomeOtherThingsTooMyDreamJobWouldBeASoftwa">I live in Sherwood, Oregon in the United States and I love all things tech and programming, I've worked on all sorts of hobby projects including microelectronics, game design, full stack development and some other things too. My dream job would be a software engineer, and I am going to get there!</div>
            <div data-layer="b084cd3b-f335-43ed-b8b8-a8222c728de5" className="okSoHeresABlurb">Ok so here's a blurb:</div>
</div>
        <div data-layer="17e89fa0-9a65-46db-96b3-0c15f400d215" className="hiThereImEthanaspiringDeveloperAndStudentInSherwoodOregonFluentInC"><span className="hiThereImEthanaspiringDeveloperAndStudentInSherwoodOregonFluentInC-0">Hi there, I'm Ethan.<br /></span><span className="hiThereImEthanaspiringDeveloperAndStudentInSherwoodOregonFluentInC-21">Aspiring developer and student in Sherwood, Oregon. Fluent in C# and C++. Check out my latest classwork and projects.</span></div>
        <Link data-layer="8c60e73e-2eb5-44e0-b19e-39413c3ef9d6" className="classworkbtn" to='/Classwork'>            <div data-layer="8db6d39e-04ca-463d-ae07-cceacafdc43d" className="rectangle6"></div>
            <div data-layer="db068ca5-418a-43a5-a35a-f065a6d145c4" className="classwork93460421">Classwork</div>
</Link>
        <div data-layer="5736cded-a118-4306-a834-a563539f459d" className="rectangle7"></div>
        <div data-layer="102bd851-1e67-490b-aec5-ef28efa2392e" className="footer7a2949b0">            <div data-layer="26ea4d46-af3a-4e92-9eed-8ba1be902ec0" className="footer"></div>
            <Link data-layer="6f01032b-3495-406a-b5ae-0961bed273e3" className="classworkc42cafb6" to='/Classwork'>                <div data-layer="10b99cf1-9134-4b81-abff-6941ebc1e6f3" className="classwork6f859471">Classwork</div>
</Link>
            <Link data-layer="8232a3b4-7093-4e5e-9bb6-e4642847816a" className="classwork353cc0ad" to='/Classwork'>                <div data-layer="3407fab4-b565-482a-99b3-d172370bbde1" className="classworkda9e6e7b">Contact</div>
</Link>
            <Link data-layer="537171ea-d859-461b-a220-ad8383ad58e0" className="projects" to='/Projects'>                <div data-layer="1f7df754-fc15-4348-897f-01f2bd3f402e" className="classwork">Projects</div>
</Link>
            <div data-layer="0f2c2afd-9dd3-43e3-b261-450ebdc71480" className="ethanDouglass">©Ethan Douglass</div>
            <div data-layer="7aa8089c-ce5a-4210-958f-156ca68aac6b" className="psstGoDoSomeExploring">Psst! Go do some exploring!</div>
</div>
</div>

    );
  }
}



export default Ipadpro129inhomepage;
          