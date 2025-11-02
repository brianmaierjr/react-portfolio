import Layout from '../components/layout'
import Project from '../components/projects/project'
import ProjectContainer from '../components/projects/projectContainer'
import Section from '../components/section'
import { ArrowUpRight } from 'react-feather'

const Home = () => {
  return (
    <Layout>
      <Section label="Work">
        <h2>Work</h2>
        <p>
          I currently work for{' '}
          <a
            className="externalLink"
            href="https://cloverlearning.com"
            target="_blank"
          >
            Clover Learning
            <ArrowUpRight />,
          </a>{' '}
          a learning platform for healthcare students &amp; professionals, as a
          Design Engineer. I work daily with multiple front-end and back-end
          technologies to create components and a design system that allows our
          engineers to easily build apps, and marketing websites.
        </p>
      </Section>
      <Section label="Now">
        <h2>Now</h2>
        <ul className="list">
          <li>
            New side project to calculate curren draw on guitar pedal power
            supplies ⚡️
          </li>
          <li>Building out the Clover Learning Design System 🦴</li>
          <li>
            Getting up to date with{' '}
            <a href="https://nerdy.dev/cascading-secret-sauce" target="_blank">
              all the css things
            </a>{' '}
            🎨
          </li>
          <li>Accessibility Remediation for Tacoria 🛠️</li>
          <li>Playing pickleball 3-5 days a week 🥒</li>
        </ul>
      </Section>
      <Section label="Projects">
        <ProjectContainer>
          <h2>Personal Projects</h2>
          <Project
            name="147 Colors"
            description="Astro site created to showcase all of the CSS color names that are available."
            href="https://147colors.com"
          />
          <Project
            name="Arbitrary Awards"
            description="One page website that pokes fun at the atrocity that are award websites."
            href="https://arbitraryawards.com"
          />
          <Project
            name="Long Haul Theme"
            description="Minimal, type-focused, blogging theme built for Jekyll. Astro version coming soon."
            href="https://brianmaierjr.com/long-haul"
          />
        </ProjectContainer>
      </Section>
    </Layout>
  )
}

export default Home
