import { graphql } from 'gatsby';
import React from 'react'
import {
  AmpStory,
  AmpStoryPage,
  AmpStoryGridLayer,
  AmpImg,
  AmpHeader,
  AmpParagraph,
  AmpQuote,
  AmpStoryBookend,
  AmpVideo,
  AmpSource,
} from 'react-google-stories'
import './story.css'

function StoryScreen({data}) {
  const { storyCover, storytitle, storyPages, description } = data.sanityWebStory
  return (
    /* Cover page */
    <AmpStory
      title={storytitle}
      publisher="react-google-stories tutorial"
      publisher-logo-src="/AMP-Brand-White-Icon.svg"
      poster-portrait-src={storyCover.asset.publicUrl}
    >
      <AmpStoryPage id="cover">
        <AmpStoryGridLayer template="fill">
          <AmpImg src={storyCover.asset.publicUrl}
              width="720" height="1280"
              layout="responsive">
          </AmpImg>
        </AmpStoryGridLayer>
        <AmpStoryGridLayer template="vertical">
          <AmpHeader title={storytitle} level={1} />
          <AmpParagraph text={description??'Story Description'}/>
        </AmpStoryGridLayer>
      </AmpStoryPage>

      {
        storyPages.map((story, index) => <AmpStoryPage 
          id={`page-${index}`}>
            <AmpStoryGridLayer 
              template="vertical" //vertical/ fill
              class="noedge"
              >
              <AmpHeader title={story.storyHeader}/>
              {/* <AmpParagraph grid-area="lower-third" text="Dogs were probably the first tame animals. They have accompanied humans for some 10,000 years. Some scientists assert that all dogs, domestic and wild, share a common ancestor in the small South Asian wolf." /> */}
              {
                story.mediaType == 'image' ? 
            <AmpImg src={story.mediaSource.asset.url}
                width="720" height="1280"
                layout="responsive" 
                animate-in="fade-in"
                animate-in-delay="0.4s">
            </AmpImg>
            :
            <AmpVideo
                autoplay
                loop
                width="720" height="1280"
                poster="/rabbit.jpg"
                layout="responsive"
              >
                <AmpSource src={story.mediaSource.asset.url} type="video/mp4" />
              </AmpVideo>
              }
              {/* <AmpQuote className="lower-third" text="Dogs come when they're called. Cats take a message and get back to you. --Mary Bly" /> */}
              <AmpParagraph text={story.paragraph??''} />
            </AmpStoryGridLayer>
          </AmpStoryPage>)
      }
      {/* Bookend */}
      <AmpStoryBookend src="bookend.json" />

      </AmpStory>
  );
}
export const Head = () => {
  return(
  <>
  <title>Dev Mohib</title>
  <meta title="Dev Mohib" content="Dev Mohib, Portfolio, Programming, Coding, Developer, Full stack Developer" />
  </>)
  }
  
export const query = graphql`
query WebStoryBySlug ($slug: String){
  sanityWebStory(slug: {current: {eq: $slug}}) {
    storyCover {
      asset {
        publicUrl
      }
    }
    storyTitle
    storyPages {
      paragraph
      mediaType
      storyHeader
      mediaSource {
        asset {
          url
        }
      }
    }
    description
  }
}

`
export default StoryScreen;