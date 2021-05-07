import { lazy } from "react";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const IntroBlock = lazy(() => import("../../components/IntroBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const IntroContent = {
  "title": "Modern Vision Solutions",
  "text": "We develop intelligent, scalable video analytics solutions that autonomously monitor, track, and react to video and sensor data in real time to assist security professionals and local law enforcement.",
  "button": "Learn More"
}

const PrivacyContent = {
  "title": "Data Privacy",
  "text": "Respect people's privacy with on site processing engines and local data storage.",
  "button": "Get Started"
}

const MissionContent = {
  "title": "Our Mission",
  "text": "In a world of evolving technologies, we aim to understand and openly share approaches to large scale intelligent video analytics systems.",
}

const RealtimeContent = {
  "title": "Realtime  Processing",
  "text": "Analyze people and vehicles accross all the cameras in your network simulatneously.",
  "section": [
    {
      "title": "Deep Learning Algorithms",
      "content": "This new style of programming enables powerful vision algorithms that  annotates and analyzes video data.",
      "icon": "notes.svg"
    },
    {
      "title": "Meta Data Aggegration",
      "content": ".",
      "icon": "notes.svg"
    }
  ]
}

const AutomationContent = {
  "title": "Automate Data Reporting",
  "text": "View real time charts of building and parking lot usage. Query the anonymized meta data to Generate dynamic usage reports."
}

const ApplicationsContent = {
  "title": "Customer Engagements",
  "text": "",
  "section": [
    {
      "title": "Universities",
      "content": "Work with campus public safety departments to protect student privacy.",
      "icon": "notes.svg"
    },
    {
      "title": "Commerical Buildings",
      "content": "Styled Components gives you total control over your components.",
      "icon": "notes.svg"
    }
  ]
}

const HeimDallContent = {
  "title": "Heimdall",
  "text": "Automate your security system infrastructure with state of the art computer vision algorithms.",
  "section": [
    {
      "title": "People",
      "content": "Observe people and bags.",
      "icon": "notes.svg"
    },
    {
      "title": "Vehicles",
      "content": "Camera make, model, and type.",
      "icon": "notes.svg"
    },
    {
      "title": "Surveilance",
      "content": "Create full screen grid views of cameras with objects.",
      "icon": "notes.svg"
    },
    {
      "title": "Reporting",
      "content": "Generate usage and traffic reports.",
      "icon": "notes.svg"
    }
  ]
}

const ContactContent = {
  "title": "Contact Form",
  "text": "Interested in bringing this technology to your organization or group? Contact us and leave a message, we are happy to answer any questions."
}

const Home = () => {
  return (
    <Container>
      {/* <ScrollToTop /> */}
      <IntroBlock
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        id="intro"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={RealtimeContent.title}
        content={RealtimeContent.text}
        section={RealtimeContent.section}
        icon="sdp-tracking-camera.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={PrivacyContent.title}
        content={PrivacyContent.text}
        icon="developer.svg"
      />
      <ContentBlock
        type="left"
        title={AutomationContent.title}
        content={AutomationContent.text}
        icon="graphs.svg"
      />
      <ContentBlock
        type="left"
        title={ApplicationsContent.title}
        content={ApplicationsContent.text}
        section={ApplicationsContent.section}
        icon="waving.svg"
      />
      <h1>Our Products</h1>
      <ContentBlock
        type="left"
        title={HeimDallContent.title}
        content={HeimDallContent.text}
        section={HeimDallContent.section}
        icon="waving.svg"
        id="product"
      />
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
