import "./styles.css";
import IntroVideo from "./components/INtroVideo";
import Section from "./components/Section";
import data from "./data/data.json";
import mbaichaiwala1 from "./assets/mbachaiwala1.png";
import mbachaiwala2 from "./assets/mbachaiwala2.gif";
import tedtalkchaiwala from "./assets/tedtalkchaiwala.gif";
import mbachaiwala3 from "./assets/mbachaiwala4.png";
import mbachaiwala4 from "./assets/mbaichaiwala4.png";
import storychaiwala from "./assets/storychaiwala.png";
import locationImg from "./assets/locationchaiwala.png";
import Footer from "./components/Footer";
export default function App() {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    barat,
    album,
    chaiwala,
  } = data;
  const yellow = "#fff100",
    pink = "#ed1e79",
    white = "#fff",
    brown = "#6d3d0f";
  return (
    <div className="App">
      <IntroVideo />
      <Section
        heading={freshTopic.heading}
        text={freshTopic.text}
        btnText={freshTopic.btn}
        imgSrc={mbaichaiwala1}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      <Section
        heading={freshTopic2.heading}
        text={freshTopic2.text}
        btnText={freshTopic2.btn}
        imgSrc={mbachaiwala2}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      <Section
        heading={tedTalks.heading}
        text={tedTalks.text}
        btnText={tedTalks.btn}
        imgSrc={tedtalkchaiwala}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      <Section
        heading={franchise.heading}
        text={franchise.text}
        btnText={franchise.btn}
        imgSrc={mbachaiwala3}
        imgSize="40%"
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      <Section
        heading={map.heading}
        text={map.text}
        btnText={map.btn}
        imgSrc={locationImg}
        backgroundColor={pink}
        headingColor={yellow}
        hasBtn={false}
        textColor={yellow}
        btnBgColor={brown}
        btnColor={yellow}
      />
      <Section
        heading={album.heading}
        text={album.text}
        btnTxt={album.btn}
        imgSrc={mbachaiwala4}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
        hasBtn={false}
      />{" "}
      <Section
        heading={chaiwala.heading}
        text={chaiwala.text}
        btnText={chaiwala.btn}
        imgSrc={storychaiwala}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      <Footer />
    </div>
  );
}
