import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigationbar from './components/navbar'
import ProfilePic from './components/profile';
import Placeholder from 'react-bootstrap/Placeholder';


function App() {
  return (
    <div className="App">
      {/* Nav Bar with items that include Resume, project experience, and about me */}
      <Navigationbar></Navigationbar>
      <div className="container" style={{ backgroundColor: 'gray', width: '100%', maxWidth: '100%' }}>
        <div className="image">
          <ProfilePic></ProfilePic>
        </div>
        <div className="text">
          <h1 style={{ textAlign: 'left' }}>Josh Creasey</h1>
          <h3 style={{ textAlign: 'left' }}>Hello and welcome to my portfolio page!</h3>
          <h3>
            My name is Josh Creasey and I am a recent graduate of Whitworth University in Spokane, WA. I majored in
            computer science and minored in mathematics. My strengths include my ability to learn quickly, my interpersonal
            skills, and being able to manage many tasks at any point in time. I am actively seeking employment opportunities
            in the Spokane-Coeur d'Alene area as well as remote positions in the United States. Most of my programming
            experience is in C++, but I have also dabbled in both Java and Python programming languages and have begun to
            dip my toe into C# and React. I am particularly interested in the software consulting field as this would allow
            me to broaden my knowledge across many different industries and fields. On this site, you will find this home
            page, my resume and experience, my past projects, and a page with a little bit more information about who I am
            and what I value.
          </h3>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: 'gray', width: '100%', maxWidth: '100%' }}>
        <h1>Resume
          <h2>Education<h3>Bachelor's blah blah</h3>
          </h2>
          <h2>Experience
            <h3>Item 1 experience</h3>
            <h3>Item 2 experience</h3>
            <h3>Item 3 experience</h3>
            <h3>Item 4 experience</h3>
          </h2>
          <h2>Skills
            <h3>Here are skills</h3>
          </h2>
          <h2>Here is volunteer experience</h2>
          
        
        </h1>

      </div>


    </div>
  );
}

export default App;
