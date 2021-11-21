
import React from "react";
 import { Link } from 'react-router-dom'
import "./homepage1920.css";

class Homepage1920 extends React.Component {

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
            <div className='content'>
                <p id='intro' className='intro'>HI THERE!</p>
         <div data-layer="965dc616-6c3e-437c-ab96-50ce8ea5ade2" className="homepage1920">        <div data-layer="693c7a96-489d-47e9-a7b1-2877d9c696a1" className="hiThereImEthanaspiringDeveloperAndStudentInSherwoodOregonFluentInC"><span className="hiThereImEthanaspiringDeveloperAndStudentInSherwoodOregonFluentInC-0">Hi there, I'm Ethan.<br /></span><span className="hiThereImEthanaspiringDeveloperAndStudentInSherwoodOregonFluentInC-21">Aspiring developer and student in Sherwood, Oregon. Fluent in C# and C++. Check out my latest classwork and projects.</span></div>
        <div data-layer="5736cded-a118-4306-a834-a563539f459d" className="rectangle7"></div>
        <div data-layer="e864b650-bbc4-418f-8c28-158e16593e67" className="introBlurb">            <div data-layer="898f905c-476a-426a-851e-ffddd4b46677" className="maskGroup2"></div>
            <div data-layer="5d4b362c-fe84-4414-bd17-4d4701cc6712" className="niceToSeeYou">Nice to See You!</div>
            <div data-layer="72149b91-41f8-4ea8-89ab-61a229f037bc" className="iBetYouWantToKnowAboutMeCauseYourOnMySite">I bet you want to know about me (cause your on my site)</div>
            <div data-layer="51224b77-5763-4187-80d4-c9dc8d2f618c" className="iLiveInSherwoodOregonInTheUnitedStatesAndILoveAllThingsTechAndProgrammingIveWorkedOnAllSortsOfHobbyProjectsIncludingMicroelectronicsGameDesignFullStackDevelopmentAndSomeOtherThingsTooMyDreamJobWouldBeASoftwa">I live in Sherwood, Oregon in the United States and I love all things tech and programming, I've worked on all sorts of hobby projects including microelectronics, game design, full stack development and some other things too. My dream job would be a software engineer, and I am going to get there!</div>
            <div data-layer="3e107311-ff7b-4306-b51f-7dd8e6799f9d" className="okSoHeresABlurb">Ok so here's a blurb:</div>
</div>
        <div data-layer="5cdc638c-a7b7-4b51-9704-e5abbf6e8a43" className="footer">            <div data-layer="a25c06e5-b1fb-4b97-a64f-02491371b9a7" className="footerd25136d8"></div>
            <Link data-layer="c51daea4-c8ff-4436-b8e4-a7b31497b863" className="classwork" to='/Classwork'>                <div data-layer="eb43c7a5-b2a0-4617-aa27-2d9fded766dd" className="classwork9a3acfe9">Classwork</div>
</Link>
            <Link data-layer="6968d1b0-8629-4bea-890b-f3558e73b820" className="classworkbb7fdb56" to='/Classwork'>                <div data-layer="628e111e-4904-45c3-a691-fb4570fc4fe3" className="classworke6b1aa5d">Contact</div>
</Link>
            <Link data-layer="d8281bce-ae1f-441b-88a4-70615bffca00" className="projects" to='/Projects'>                <div data-layer="63bdec64-ee81-4d3b-99e3-b201f0ef7399" className="classwork6863b33f">Projects</div>
</Link>
            <div data-layer="56bcdc30-c31c-4fe8-a590-ec08cbe652ca" className="ethanDouglass7de839e6">©Ethan Douglass</div>
            <div data-layer="25c4a7b9-c410-4f1d-8e18-02665bef6513" className="psstGoDoSomeExploring">Psst! Go do some exploring!</div>
</div>
        <div data-layer="94e06afa-11dc-4a16-aec7-0b4b8bca87fd" className="footer2832c6cf">            <div data-layer="f8e404be-a58d-4222-865b-83b0d5bf393e" className="footer56b5d2e0"></div>
            <Link data-layer="2f3bdd92-0feb-45fc-a689-bb18f65b8aa2" className="classworkc4b6a477" to='/Classwork'>                <div data-layer="6c2563dd-03db-4fc3-b410-f72edd7a41cb" className="classwork4983e34c">Classwork</div>
</Link>
            <Link data-layer="1435c4f3-c040-4f71-99c7-f3a1c6dee8b2" className="classworkdf930fc9" to='/Classwork'>                <div data-layer="704d3849-42db-4ea7-9d86-f9f975f97607" className="classwork5d1f1c48">Contact</div>
</Link>
            <Link data-layer="0ba12f69-8dc7-427a-9ae4-b50e838bbd10" className="projects4d8ebe11" to='/Projects'>                <div data-layer="7cc80445-3eaf-43a9-8d76-12df7df94551" className="classworka2c56dde">Projects</div>
</Link>
            <div data-layer="5e70ccac-a0e6-4b69-906f-c107afc09376" className="ethanDouglass6b836eac">©Ethan Douglass</div>
            <div data-layer="4d08e761-8470-498c-b31a-70630c5a5d93" className="psstGoDoSomeExploring2d5ea9d2">Psst! Go do some exploring!</div>
</div>
        <div data-layer="f4c5c437-c789-4691-b825-a4a0d2ad6f32" className="navbar">            <div data-layer="264ec2ed-aa4a-427e-806a-b2689a26d417" className="rectangle2"></div>
            <div data-layer="e2f3a268-afc9-4f80-8f62-a846dfa0f49c" className="component31">                <div data-layer="cc6879f0-de47-478c-8559-1c0c372eb55c" className="contact">Contact</div>
</div>
            <div data-layer="d553abaf-3510-4e60-97ab-b639db581944" className="signIn">Sign In</div>
            <Link data-layer="022d83bf-82a4-4d4e-a4be-b8bb9a02a01b" className="classwork091b3641" to='/Classwork'>                <div data-layer="1b4d225c-a0b9-49c0-b2e0-15dcb2d5a30d" className="classwork878269c2">Classwork</div>
</Link>
            <Link data-layer="616525d0-4205-4a59-a01e-16ef52e227a7" className="homeLink" to='/'>                <div data-layer="fc9bb56c-ab4c-40fe-b2a7-600df75d0af3" className="home">Home</div>
</Link>
            <div data-layer="924fee1f-32e8-4398-8ad0-40ddec39d3a9" className="ethanDouglass">Ethan Douglass</div>
</div>
        <Link data-layer="c7042d2d-47e4-455a-99ff-2ee8ec06a912" className="classworkbtn" to='/Classwork'>            <div data-layer="0fe1cb5a-3696-42df-879b-5bf310be5ca2" className="rectangle6"></div>
            <div data-layer="29c7dcdd-d840-46b5-9359-7a7d8475c99a" className="classwork3ca7b2f5">Classwork</div>
</Link>
              </div>
              </div>
    );
  }
}

Homepage1920.propTypes = {

}

Homepage1920.defaultProps = {

}


export default Homepage1920;
          