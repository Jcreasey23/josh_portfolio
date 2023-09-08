import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigationbar from './components/navbar'
import ProfilePic from './components/profile';
import { Document,Page} from 'react-pdf';
import pdfFile from './components/joshcreaseyresume.pdf'

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
        {/* End of first container */}
      </div>
      <div style={{ backgroundColor: 'gray', width: '100%', maxWidth: '100%' }}>
        <h1 style={{ textAlign: 'center' }}>Resume</h1>
        <div style={{ textAlign: 'center' }}>
          <Document file={pdfFile}>
            <Page pageNumber={1}/>
          </Document>
        </div>
        {/* End of second container */}
      </div>
      <div style={{ backgroundColor: 'gray', width: '100%', maxWidth: '100%' }}>
        <h1 style={{textAlign:'center'}}>Video Intro</h1>

        {/*End of Video Intro to me container  */}
      </div>
    {/* End of MAIN container */}
    </div>
  );
}

export default App;
