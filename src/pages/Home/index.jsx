//@ts-check

import Features from '../../components/Features'
import Hero from '../../components/Hero'

/**
 * It render a homepage with two components
 * @returns {React.ReactElement}
 */
function HomePage() {
  return (
    <main className="main">
      <Hero />
      <Features />
    </main>
  )
}

export default HomePage
