/**
 * The function `About` in this JavaScript React component displays information about the Indian
 * cricketer Virat Kohli.
 * @returns The `About` component is being returned, which contains JSX elements describing information
 * about the Indian cricketer Virat Kohli.
 */
import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://i.pinimg.com/originals/79/df/f8/79dff80803eb9d00af40c53dcb5b0e78.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          About VIRAT
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Virat Kohli is an Indian cricketer, widely regarded as one of the greatest batsmen of all time. Born on November 5, 1988, in Delhi, he showed a passion for cricket from a young age and quickly rose through the ranks. Kohli has captained the Indian cricket team in all three formats—Test, ODI, and T20—leading them to several historic victories. Known for his aggressive and consistent batting style, he holds multiple records, including being the fastest to score 8,000, 9,000, 10,000, and 11,000 runs in One Day Internationals (ODIs).
                      </p>
                      <p className="mt-4 text-gray-600">
                      His leadership played a crucial role in making India the No. 1 Test team, with notable overseas wins. Kohli also represents Royal Challengers Bangalore (RCB) in the Indian Premier League (IPL) and has been a key player for the franchise. Apart from cricket, he is a fitness enthusiast and actively promotes a healthy lifestyle. His contributions extend beyond the field, as he is involved in various charitable activities. Kohli is married to Bollywood actress Anushka Sharma, and the couple has a daughter named Vamika. His dedication, passion, and unmatched skill continue to inspire millions of cricket fans worldwide.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}