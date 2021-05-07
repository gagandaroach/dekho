import { lazy } from "react";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const MiddleBlockContent = {
  "title": "Intelligent Vision Analytics",
  "text": "Automate your security system infrastructure with state of the art computer vision algorithms.",
  "button": "Get Started"
}

const IntroContent = {
  "title": "COMPANY NAME PENDING HELP",
  "text": "We aim to develop an intelligent, scalable video analytics application to autonomously monitor, track, and react to all the video data from a security camera system and support security professionals and local law enforcement. ",
  "button": "Get Started"

}

const AboutContent = {
  "title": "Light, Fast & Responsive",
  "text": "This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.",
  "section": [
    {
      "title": "Why Antd?",
      "content": "Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.",
      "icon": "notes.svg"
    },
    {
      "title": "Why styled-components?",
      "content": "Styled Components gives you total control over your components.",
      "icon": "notes.svg"
    }
  ]
}

const MissionContent = {
  "title": "Ready made sections",
  "text": "Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content."

}

const ProductContent = {
  title: "Heimdall",
  text: "An intelligent, scalable video analytics application to autonomously monitor, track, and react to all the video data from a security camera system and support security professionals and local law enforcement."
}

const ContactContent = {
  "title": "Contact Form",
  "text": "The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty."
}

const processingDaemon = {
  title: "Cloud Processing Daemon",
  text: "We analyze the data from n-point camera systems with your private on-site cloud."
}

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
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
        title={ProductContent.title}
        content={ProductContent.text}
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
