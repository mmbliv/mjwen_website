import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"

const PeopleCard = ({ people }) => {
  const { description, email, name, website, photo, title, cv } = people

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mx-0  sm:pb-0 text-center">
            <GatsbyImage
              image={photo.localFile.childImageSharp.gatsbyImageData}
              alt={name}
              className="h-32 w-32 headshot sm:mr-4 "
            />
          </div>
          <div className="text-sm self-center text-center sm:text-left">
            <p className="text-lg font-semibold">{name}</p>
            {/* <p className="w-max">{title}</p> */}
            <p className="text-slate-800">{email}</p>
            <p>{website}</p>
            <p>
              <ReactMarkdown children={cv} className="markdown" />
            </p>
          </div>
        </div>
        <p className="text-sm mt-5">
          <ReactMarkdown children={description} className="markdown" />
        </p>
        {/* <p className="text-sm mt-5">{description}</p> */}
      </div>
    </>
  )
}
export default PeopleCard
