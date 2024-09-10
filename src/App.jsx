import Navbar from "./Component/Navbar"
import Hero from "./Section/Hero"
import SkillsPage from "./Section/SkillsPage"
import Projects from "./Section/Projects"
import Banner from "./Section/Banner"
import Footer from "./Section/Footer"


export default function App() {
  return (
    <div className="bg-black">
      <Navbar/>
      <section>
        <Hero></Hero>
      </section>

      <section>
        <SkillsPage></SkillsPage>
      </section>
      <section>
        <Projects></Projects>
      </section>

      <section>
        <Banner></Banner>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  )
}