import React from "react"
import { Script } from "gatsby"

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      <Script async src="https://cdn.ampproject.org/v0.js"/>
      <Script async custom-element="amp-video"
        src="https://cdn.ampproject.org/v0/amp-video-0.1.js"/>
      <Script async custom-element="amp-story"
        src="https://cdn.ampproject.org/v0/amp-story-1.0.js"/>
    </>
  )
}