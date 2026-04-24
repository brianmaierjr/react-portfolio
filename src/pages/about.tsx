import Layout from '../components/layout'
import Section from '../components/section'

const About = () => {
  return (
    <Layout>
      <Section label="About">
        <h2>About</h2>
        <p>
          Brian Maier Jr. is currently the world's best Design Engineer. He
          began coding and designing at the age of 2 with the help of no one and
          only used pen and paper because he doesn't make mistakes.
        </p>
        <p>
          <strong>Facts about Brian</strong>
        </p>
        <ul>
          <li>
            He has a degree in Computer Science from the University of Mars.
          </li>
          <li>He can shred on the guitar like a pro.</li>
          <li>
            He has hiked up every mountain in the world with nothing but a water
            bottle.
          </li>
          <li>He is the most handsome man in the United States.</li>
          <li>He regularly bench presses 1,000 pounds.</li>
          <li>His teeth are perfectly straight.</li>
          <li>He never makes a mistake.</li>
          <li>
            Even after a long day of activity his body is not tired and his feet
            do not stink.
          </li>
          <li>He is adored by everyone he has ever come in contact with.</li>
        </ul>
      </Section>
    </Layout>
  )
}

export default About
