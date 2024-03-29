import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Publication } from "./Publication"
import ReactMarkdown from "react-markdown"
const query = graphql`
  {
    allStrapiAbout {
      nodes {
        about
      }
    }
  }
`

export const Aboutme = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiAbout: { nodes: about },
  } = data

  return (
    <article id="about" className="sm:col-span-2 pt-16">
      {/* this is the about me div */}
      <div>
        <h2 className="text-center">ABOUT</h2>
        <div className="flex flex-row justify-center mb-10"></div>
        <p>
          <ReactMarkdown children={about[0].about} className="markdown" />
        </p>
      </div>
      {/* this is the publication div */}
      <Publication />
    </article>
  )
}
