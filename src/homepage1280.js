
import React from "react";
import PropTypes from "prop-types";
  import { Link } from 'react-router-dom'
import "./homepage1280.css";

class Homepage1280 extends React.Component {

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
          <div data-layer="7de2be87-467c-4a64-94ac-1b2a9020c968" className="homepage1280">        <div data-layer="02537886-ed86-42d3-8636-2eb14be0f1d6" className="hiThereImEthanaspiringDeveloperAndStudentInSherwoodOregonFluentInC"><span className="hiThereImEthanaspiringDeveloperAndStudentInSherwoodOregonFluentInC-0">Hi there, I'm Ethan.<br /></span><span className="hiThereImEthanaspiringDeveloperAndStudentInSherwoodOregonFluentInC-21">Aspiring developer and student in Sherwood, Oregon. Fluent in C# and C++. Check out my latest classwork and projects.</span></div>
        <Link data-layer="ca90dc23-3cf4-433d-ac1b-b10447b611c8" className="classworkbtn" to='/Classwork'>            <div data-layer="2c26bbc1-072e-4513-ac2d-39954bec0ab1" className="rectangle6"></div>
            <div data-layer="cebb3e9d-d4ce-4c6b-9ac8-261209f58079" className="classwork733ea559">Classwork</div>
</Link>
        <div data-layer="5736cded-a118-4306-a834-a563539f459d" className="rectangle7"></div>
        <div data-layer="0efe2fba-0d59-4add-a00c-9eb6c4c108cc" className="introBlurb">            <div data-layer="eda95548-72b6-452a-bab6-4210dbb48dff" className="maskGroup2"></div>
            <div data-layer="fae6c583-764d-4b0a-9dc4-44aaa104e206" className="niceToSeeYou">Nice to See You!</div>
            <div data-layer="5d9da031-7afa-4f9c-bb57-417779e62dc3" className="iBetYouWantToKnowAboutMeCauseYourOnMySite">I bet you want to know about me (cause your on my site)</div>
            <div data-layer="c0176883-978a-4c92-88b6-fd5b81a785a3" className="iLiveInSherwoodOregonInTheUnitedStatesAndILoveAllThingsTechAndProgrammingIveWorkedOnAllSortsOfHobbyProjectsIncludingMicroelectronicsGameDesignFullStackDevelopmentAndSomeOtherThingsTooMyDreamJobWouldBeASoftwa">I live in Sherwood, Oregon in the United States and I love all things tech and programming, I've worked on all sorts of hobby projects including microelectronics, game design, full stack development and some other things too. My dream job would be a software engineer, and I am going to get there!</div>
            <div data-layer="e3f905a2-02b3-43c3-9942-1cc4592ba09c" className="okSoHeresABlurb">Ok so here's a blurb:</div>
</div>
        <div data-layer="102bd851-1e67-490b-aec5-ef28efa2392e" className="footerd37c8c66">            <div data-layer="26ea4d46-af3a-4e92-9eed-8ba1be902ec0" className="footer"></div>
            <Link data-layer="6f01032b-3495-406a-b5ae-0961bed273e3" className="classworkc5c92dd5" to='/Classwork'>                <div data-layer="10b99cf1-9134-4b81-abff-6941ebc1e6f3" className="classworka3853fc6">Classwork</div>
</Link>
            <Link data-layer="8232a3b4-7093-4e5e-9bb6-e4642847816a" className="classwork89de9357" to='/Classwork'>                <div data-layer="3407fab4-b565-482a-99b3-d172370bbde1" className="classwork342f3c2b">Contact</div>
</Link>
            <Link data-layer="537171ea-d859-461b-a220-ad8383ad58e0" className="projects" to='/Projects'>                <div data-layer="1f7df754-fc15-4348-897f-01f2bd3f402e" className="classwork9afab30d">Projects</div>
</Link>
            <div data-layer="0f2c2afd-9dd3-43e3-b261-450ebdc71480" className="ethanDouglass5602e57e">©Ethan Douglass</div>
            <div data-layer="7aa8089c-ce5a-4210-958f-156ca68aac6b" className="psstGoDoSomeExploring">Psst! Go do some exploring!</div>
</div>
        <div data-layer="7ada00ae-6dad-4f77-ade5-bf2f75c0d775" className="navbar">            <div data-layer="59cc0bc3-2bf9-4f79-be78-a1ca20e7795e" className="rectangle2"></div>
            <div data-layer="09a61ec3-8712-441c-904c-fc3bbb3b6909" className="component34">                <div data-layer="4318e043-754b-448e-b68b-4ab40f134b0f" className="contact">Contact</div>
</div>
            <Link data-layer="3deeca70-3656-43d9-be1d-40e60e8c9302" className="classwork3bfce124" to='/Classwork'>                <div data-layer="4eddfb21-ca6f-44bd-9651-ca6034965f18" className="classwork">Classwork</div>
</Link>
            <Link data-layer="a905b090-38a3-40ae-9b94-39cabb23994b" className="homeLink" to='/'>                <div data-layer="3959a03d-437c-4201-b91d-ca43e4d547b5" className="home">Home</div>
</Link>
            <div data-layer="af1398e4-3df8-4849-86f5-e52069cf834b" className="ethanDouglass">Ethan Douglass</div>
</div>
</div>

    );
  }
}

Homepage1280.propTypes = {

}

Homepage1280.defaultProps = {

}


export default Homepage1280;
          