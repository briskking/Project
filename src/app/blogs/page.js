import React from "react";
import BlogBox from "../../components/blogComp/blogBox.js/";

export function Blog() {
  return (
    <div className="flex flex-col items-center justify-center py-35 mx-auto h-full bg-[#1f0a24] w-full">

      <div className="flex gap-7">
        
        <BlogBox
          img="/gridimages/51.jpg"
          caption="Welcome to BallAZZ Events Spot: Where Every Moment Turns Legendary"
          text="March 2025"
        />

        <BlogBox
          img="/gridimages/51.jpg"
          caption="🌟 5 Reasons BallAZZ Events Spot is Lagos' Newest Hotspot"
          text="Mid March 2025"
        />
      </div>

      <div className="flex gap-7 pt-12">
      <BlogBox
        img="/gridimages/51.jpg"
        caption="🥂 From Day to Night: How BallAZZ Events Spot Transforms for Any Vibe"
        text="Late March 2025"
      />
      <BlogBox
        img="/gridimages/51.jpg"
        caption="📸 Inside BallAZZ: A Sneak Peek at Our Stunning Event Spaces"
        text="April 2025"
      />
      </div>

      <div className="flex gap-7 pt-12 pb-14">
      <BlogBox
        img="/gridimages/51.jpg"
        caption="🎶 Sound. Lights. Action: How BallAZZ Sets the Stage for Epic Events"
        text="Mid April 2025"
      />
      <BlogBox
        img="/gridimages/51.jpg"
        caption="Your Event, Our Priority: The BallAZZ Promise of Excellence"
        text="May 2025"
      />
      </div>


      
    </div>
  );
}

export default Blog;
