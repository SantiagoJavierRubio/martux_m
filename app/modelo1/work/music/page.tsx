import React from "react";
import WorkItem from "../components/WorkItem";

export default function Music() {
  return (
    <>
      <WorkItem
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
        imgUrl="/eclipse1.jpg"
        spotifyUrl="sadsdad"
        mediaLeft
      />
      <WorkItem
        title="Dolor Sit"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
        video={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Q4weuhFl870?si=3vBmCJM7QOH3jJoe&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        }
        spotifyUrl="skdasidj"
        soundCloudUrl="sjdkasjdsa"
      />
      <WorkItem
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
      dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
      sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
      ipsam officiis?"
        imgUrl="/eclipse1.jpg"
        spotifyUrl="sadsdad"
      />
      <WorkItem
        title="Dolor Sit"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
      dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
      sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
      ipsam officiis?"
        video={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Q4weuhFl870?si=3vBmCJM7QOH3jJoe&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        }
        spotifyUrl="skdasidj"
        soundCloudUrl="sjdkasjdsa"
        mediaLeft
      />
    </>
  );
}
