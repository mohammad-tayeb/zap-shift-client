// import React from 'react'

import Banner from "../Banner/Banner"
import BecomeAMarchent from "../BecomeAMarchent/BecomeAMarchent"
import FAQ from "../FAQ/FAQ"
import HowItWorks from "../HowItWorks/HowItWorks"
import Reviews from "../Reviews/Reviews"
import Services from "../Services/Services"
import WeHelped from "../WeHelped/WeHelped"
import WhyUsSection from "../WhyUsSection/WhyUsSection"

// data loading from json
const reviewsPromise = fetch('/reviews.json').then(res => res.json());

function Home() {
  return (
    <div>
        <Banner></Banner>
        <HowItWorks></HowItWorks>
        <Services></Services>
        <WeHelped></WeHelped>
        <WhyUsSection></WhyUsSection>
        <BecomeAMarchent></BecomeAMarchent>
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
        <FAQ></FAQ>
    </div>
  )
}

export default Home