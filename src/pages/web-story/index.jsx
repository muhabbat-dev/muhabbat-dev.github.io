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


function StoryScreen({setStoryData, story}) {
  return (
    /* Cover page */
    <AmpStory
      title="Joy of Pets"
      publisher="react-google-stories tutorial"
      publisher-logo-src="/AMP-Brand-White-Icon.svg"
      poster-portrait-src="/cover.jpg"
    >
      <AmpStoryPage id="cover">
        <AmpStoryGridLayer template="fill">
          <AmpImg src="/cover.jpg"
              width="720" height="1280"
              layout="responsive">
          </AmpImg>
        </AmpStoryGridLayer>
        <AmpStoryGridLayer template="vertical">
          <AmpHeader title="The Joy of Pets" level={1} />
          <AmpParagraph text="By react-google-stories tutorials" />
        </AmpStoryGridLayer>
      </AmpStoryPage>


      {/* Page 1 (Cat): 1 layer (vertical) */}
      <AmpStoryPage id="page1">
        <AmpStoryGridLayer template="vertical">
          <AmpHeader title="Cats" />
          <AmpImg src="/cat.jpg"
              width="720" height="1280"
              layout="responsive">
          </AmpImg>
          <AmpQuote text="Dogs come when they're called. Cats take a message and get back to you. --Mary Bly" />
        </AmpStoryGridLayer>
      </AmpStoryPage>


      {/* Page 2 (Dog): 2 layers (fill + thirds) */}
      <AmpStoryPage id="page2">
        <AmpStoryGridLayer template="fill">
          <AmpImg src="/dog.jpg" 
              width="720" height="1280"
              layout="responsive">
          </AmpImg>
        </AmpStoryGridLayer>
          <AmpStoryGridLayer template="thirds">
            <AmpHeader grid-area="upper-third" title="Dogs" level={1} />
            <AmpParagraph grid-area="lower-third" text="Dogs were probably the first tame animals. They have accompanied humans for some 10,000 years. Some scientists assert that all dogs, domestic and wild, share a common ancestor in the small South Asian wolf." />
        </AmpStoryGridLayer>
      </AmpStoryPage>

      {/* Page 3 (Bird): 3 layers (fill + vertical + vertical) + Audio */}
      <AmpStoryPage id="page3" background-audio="/bird-singing.mp3">
        <AmpStoryGridLayer template="fill">
          <AmpImg src="/bird.jpg"
              width="720" height="1280"
              layout="responsive">
          </AmpImg>
        </AmpStoryGridLayer>
        <AmpStoryGridLayer template="vertical">
        <AmpHeader title="Birds" level={1} />
        </AmpStoryGridLayer>
        <AmpStoryGridLayer template="vertical" class="bottom">
        <AmpQuote className="bottom" text="Dogs come when they're called. Cats take a message and get back to you. --Mary Bly" />
        </AmpStoryGridLayer>
      </AmpStoryPage>

      {/* Page 4 (Rabbit): 3 layers (fill (video) + vertical + vertical) */}
      <AmpStoryPage id="page4">
        <AmpStoryGridLayer template="fill">
          <AmpVideo
            autoplay
            loop
            width="720" height="1280"
            poster="/rabbit.jpg"
            layout="responsive"
          >
            <AmpSource src="/rabbit.mp4" type="video/mp4" />
          </AmpVideo>
        </AmpStoryGridLayer>
        <AmpStoryGridLayer template="vertical">
          <AmpHeader title="Rabbits" level={1} />
        </AmpStoryGridLayer>
        <AmpStoryGridLayer template="vertical" class="bottom">
          <AmpParagraph text="Rabbits can learn to follow simple voice commands and come when called by name, and are curious and playful." />
        </AmpStoryGridLayer>
      </AmpStoryPage>

      {/* Page 5 (Collage): 2 layers + animations */}
      <AmpStoryPage id="page5">
        <AmpStoryGridLayer template="vertical" class="noedge">
          <div className="wrapper">
            <AmpImg src="/cat.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="0.4s">
            </AmpImg>
            <AmpImg src="/dog.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="0.6s">
            </AmpImg>
            <AmpImg src="/bird.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay=".8s">
            </AmpImg>
            <AmpImg src="/rabbit.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="1s">
            </AmpImg>
          </div>
        </AmpStoryGridLayer>
        <AmpStoryGridLayer template="vertical" class="center-text">
          <AmpParagraph className="banner-text" animate-in="whoosh-in-right" text="Pets can lower your stress levels!" />
        </AmpStoryGridLayer>
      </AmpStoryPage>

      {/* Bookend */}
      <AmpStoryBookend src="bookend.json" />

      </AmpStory>
  );
}

export default StoryScreen;