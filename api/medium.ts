import type { MediumItem } from "@types";

const MEDIUM_URL = "https://medium.com/feed/@alekangelov";

const items: MediumItem[] = [
  {
    title: "Architecting and Making a Modal with React",

    link: "https://javascript.plainenglish.io/architecting-and-making-a-modal-with-react-75bf652ccc70?source=rss-c8c8e62a638------2",
    guid: "https://medium.com/p/75bf652ccc70",
    categories: [
      "programming",

      "javascript",

      "react",

      "react-spring",

      "web-development",
    ],
    author: "Alek Angelov",

    pubDate: "Sun, 11 Oct 2020 20:28:35 GMT",
    description: "",
    content: "",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:3840/format:webp/1*K0-AwdyefU826j3dQCgUUw.jpeg",
  },
  {
    title: "React Functions, GSAP Timelines and hooks. Oh my!",

    description:
      '<div class="medium-feed-item"><p class="medium-feed-image"><a href="https://javascript.plainenglish.io/react-functions-gsap-timelines-and-hooks-oh-my-ec7620b6bdc6?source=rss-c8c8e62a638------2"><img src="https://cdn-images-1.medium.com/max/1400/1*Nub4ZaHSwvkKc0cTnU8k4A.jpeg" width="1400"></a></p><p class="medium-feed-snippet">A classic retelling of an old story.</p><p class="medium-feed-link"><a href="https://javascript.plainenglish.io/react-functions-gsap-timelines-and-hooks-oh-my-ec7620b6bdc6?source=rss-c8c8e62a638------2">Continue reading on JavaScript in Plain English »</a></p></div>',

    link: "https://javascript.plainenglish.io/react-functions-gsap-timelines-and-hooks-oh-my-ec7620b6bdc6?source=rss-c8c8e62a638------2",
    guid: "https://medium.com/p/ec7620b6bdc6",
    categories: ["gsap", "web-development", "hooks", "react", "javascript"],
    author: "Alek Angelov",

    pubDate: "Wed, 20 May 2020 19:36:32 GMT",
    content: "",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*Nub4ZaHSwvkKc0cTnU8k4A.jpeg",
  },
  {
    title: "Creating a drag and drop uploader with previews using React",

    description:
      '<div class="medium-feed-item"><p class="medium-feed-image"><a href="https://javascript.plainenglish.io/creating-a-drag-and-drop-uploader-with-previews-using-react-aa794972c43e?source=rss-c8c8e62a638------2"><img src="https://cdn-images-1.medium.com/max/2110/1*tGfhB8ZybTjSLH9t139OIA.jpeg" width="2110"></a></p><p class="medium-feed-snippet">And writing your first custom hook in the process</p><p class="medium-feed-link"><a href="https://javascript.plainenglish.io/creating-a-drag-and-drop-uploader-with-previews-using-react-aa794972c43e?source=rss-c8c8e62a638------2">Continue reading on JavaScript in Plain English »</a></p></div>',

    link: "https://javascript.plainenglish.io/creating-a-drag-and-drop-uploader-with-previews-using-react-aa794972c43e?source=rss-c8c8e62a638------2",
    guid: "https://medium.com/p/aa794972c43e",
    categories: [
      "javascript",

      "web-development",

      "programming",

      "coding",

      "react",
    ],
    author: "Alek Angelov",

    pubDate: "Thu, 07 Nov 2019 13:04:10 GMT",
    content: "",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:4220/format:webp/1*tGfhB8ZybTjSLH9t139OIA.jpeg",
  },
  {
    title: "Smooth Scrolling with React and the Greensock Animation Platform",

    description:
      '<div class="medium-feed-item"><p class="medium-feed-image"><a href="https://javascript.plainenglish.io/smooth-scrolling-with-react-and-the-greensock-animation-platform-883c7e10f9b3?source=rss-c8c8e62a638------2"><img src="https://cdn-images-1.medium.com/max/1080/1*bVIlIHkzszlSo3Jv247YGw.jpeg" width="1080"></a></p><p class="medium-feed-snippet">Without being 2000 and late</p><p class="medium-feed-link"><a href="https://javascript.plainenglish.io/smooth-scrolling-with-react-and-the-greensock-animation-platform-883c7e10f9b3?source=rss-c8c8e62a638------2">Continue reading on JavaScript in Plain English »</a></p></div>',

    link: "https://javascript.plainenglish.io/smooth-scrolling-with-react-and-the-greensock-animation-platform-883c7e10f9b3?source=rss-c8c8e62a638------2",
    guid: "https://medium.com/p/883c7e10f9b3",
    categories: [
      "react",
      "smooth-scrolling",
      "javascript",
      "gsap",
      "greensock",
    ],
    author: "Alek Angelov",

    pubDate: "Sat, 08 Jun 2019 12:32:26 GMT",
    content: "",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bVIlIHkzszlSo3Jv247YGw.jpeg",
  },
  {
    title: "Setting limitations and getting uncomfortable",
    link: "https://medium.com/@alekangelov/setting-limitations-and-getting-uncomfortable-b520e841c68?source=rss-c8c8e62a638------2",
    guid: "https://medium.com/p/b520e841c68",
    categories: [
      "php",
      "development",
      "web-development",
      "software",
      "javascript",
    ],
    author: "Alek Angelov",
    pubDate: "Sat, 13 Oct 2018 11:50:31 GMT",
    description: "",
    content: "",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*51iFaRKFdPvnEnD9xhHNjw.png",
  },
];

export const getMediumPosts = () => {
  return items;
};
