export const data = [
  {
    id: crypto.randomUUID(),
    nav_name: "About Me",
    hed: "Ben Scott",
    bg: "video",
    // asset: "ast.mp4",
    textColor: "black",
  },
  {
    id: crypto.randomUUID(),
    nav_name: "Near-Earth Asteroids",
    hed: "These are the five most dangerous asteroids",
    link: "https://www.nationalgeographic.com/premium/graphics/five-asteroids-could-hit-earth",
    bg: "video",
    asset: "ast3.mp4",
    textColor: "white",
    bts: true,
    bts_content: {
      hed: "Behind the scenes of the Near-Earth Asteroids story",
      intro_vid: "/assets/bts_assets/asteroid_compressed.webm",
      text: [
        "This was my first big project at National Geographic (and first to win an award, SPD's Gold for best digital data visualization). The magazine had previously done big pieces on all the moons in the solar system, the planets, the sun—the next logical step was asteroids, in my eyes.",
        "Knowing that the story needed a salient hook, I focused on finding the most dangerous asteroids to Earth and showing their proximity to Earth at each point in their orbit. This would be the first half of the story. I then leveraged this doom-and-gloom angle to segue into the second half: a general explainer on asteroids and the various types of asteroids, from the NEOs to the Oort cloud. ",
        "I did this by combing two datasets.",
        "NASA, or rather Center for Near Earth Object Studies, publishes a live dataset that ranks the threat level of each asteroid. It contains all the juicy, the-end-is-near data points to flesh out the interactive—chance of impact, most likely date of impact, closest potential date of impact.",
        "The other dataset is NASA's Horizons database. It has the location data of all known asteroids in the solar system. I created a python script to automate queries to its API, first grabbing the simple X,Y,Z data for all known asteroids, one at a time, text file by text file. Then I grabbed the location data of one full orbital period for each of the five most dangerous asteroids.",
        "Other minor, but important data tasks: grabbing location data for the planets, cleaning and organizing asteroid data by location (asteroid belt, Kuiper belt), seperating data into CSVs for clarity and ease—I'm sure there were more that I'm forgetting.",
        "Data in-hand, I then had to visualize it in ThreeJS. I basically treated this as one big scatter plot—the sun was the origin point, my (0,0), and I plotted everything else in relation to it. Each asteroid is represented by a little, colorful dot.",
        "I used the planetary motion equation to create the orbital ellipses for each planet—many thanks to Johannes Kepler."
      ]
    },
    medals: [
      {
        "type": "gold",
        "entries": ["SPD 59 Gold: Digital Data Visualization", ]
      },
      {
        "type": "silver",
        "entries": ["SND 2024 Silver"]
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    nav_name: "Seashell Builder",
    hed: "Build your very own seashell",
    link: "https://www.nationalgeographic.com/science/graphics/design-your-own-shell",
    bg: "video",
    asset: "shells.mp4",
    textColor: "#3c6262",
    bts: true,
    embed: true,
    bts_content: {
      hed: "Behind the scenes of the Seashells story",
      intro_vid: "/assets/bts_assets/seashell_compressed.webm",
      tiktok: {
        cite: "https://www.tiktok.com/@natgeo/video/7390775066767740203",
        video_id: "7390775066767740203",
        account_href: "https://www.tiktok.com/@natgeo?refer=embed",
        account_title: "@natgeo",
        caption: "Ever wondered how shells get their shape? Using math, we can understand the hidden complexity behind some of nature's most beautiful creations and recreate them ourselves. Design your own shell at the link in our bio! Host: @halley",
        music_href: "https://www.tiktok.com/music/original-sound-7390775085994445610?refer=embed",
        music_title: "original sound - National Geographic"
      },
      text: [
        "The topic: certain physical processes influence how mollusks form their seashells.",
        "The challenge: how to make people care about that.",
        "The solution: make them build their own seashells.",
        "We knew that the scientists studying the topic used algorithms to create accurate 3D models of seashells. We figured we could take these algorithms, hook them up to sliders that control the influence of each variable (a variable being a physical process or trait), and use these sliders to show the reader how one variable impacts a shell. And with each slider, each variable, they gradually build their very own seashell. Simply put, this interactive isn't really about the seashell a reader made, but the math they learned along the way. ",
        "It's an approach that I believe epitomizes the interactive form—the interactions themselves have a purpose that cannot be replicated in any other medium.",
        "One challenge was, of course, making a fully customizable seashell builder.",
        "All seashells begin with a logarithmic spiral. Now imagine running a wedding ring through this spiral, and record the position of the ring at every spot along the spiral. That's basically how we made the 3D model.",
        "In the code, one loop drew a spiral in ThreeJS, another loop drew the circle at every given position, and then I played a complicated game of connect the dots to created the \"skin\" of the 3D mesh. And wouldn't you know, there's a seashell. ",
        "Another challenge: For the text, we couldn't get too technical nor water down the content. We had to find the right mix between making the topic approachable and staying true to the topic's wonderful complexity. I always strive for clear language, but I think this project demanded even more special attention to clarity, and I think we got there."
      ]
    },
    medals: [
      {
        "type": "bronze",
        "entries": ["SND 2025 Bronze"]
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    nav_name: "Massive Ant Mound",
    hed: "Watch this massive ant colony survive a year of challenges",
    link: "https://www.nationalgeographic.com/animals/graphics/explore-redwood-ants-colony-survival",
    bg: "video",
    asset: "ants.mp4",
    textColor: "white",
    bts: true,
    bts_content: {
      hed: "Ants in my plants",
      intro_vid: "/assets/bts_assets/ants_3_compressed.webm",
      text: [
        "The graphics and interactives team wanted to create a cinematic, 3D simulation of an ant mound weathering the seasons of a year filled with challenges.",
        "My graphics colleague Diana Marques created a physical model of an ant mound. To bring this into the digital space, we used photogrammetry to create a 3D version. She also handled the bulk of reporting, since this story also ran in the print magazine—many thanks to her.",
        "I then took the reins and build an entire 3D scene around this photogrammetry model. The project ended up being a master's program on learning all of Blender's features. I studied foundational concepts on 3D photorealism and relied on a custom scatter system inside Blender to place twigs, pine needles, moss, trees, etc. To me, the secret to photorealism in 3D, just like cooking, is building layer upon layer of detail—or flavor, to continue the cooking analogy. ",
        {
          src: "/assets/bts_assets/ants_1.png",
          caption: "This is the object view inside Blender. I learned how to use proxies (i.e. stand-ins for high-res mesh objects), to lighten the processing power on my machine when editing the scene.",
        },
        "While impressive, a static, photorealistic scene doesn't accomplish the job of simulating an ant colony by itself. I had to introduce change and seasonal transitions, which meant creating snow layers, weather effects, foliage colors, cutaways, camera transitions. The list goes on and on. I spent days perfecting how snow would fall on trees. I obsessed over finding right seed for my scatter system, which controlled the position of all my assets in the scene. The scene had to feel alive, enough to trick people into thinking it was real.",
        "I even tried my hand at creating an animating model of an ant, which I ultimately failed at doing. Look close, and whenever you see ants moving on the ant mound, their legs don't move.",
        {
          src: "/assets/bts_assets/ants_2.png",
          caption: "This is the outer layer of the scatter system I created in Blender's geometry nodes. It places all the trees, pine needles, twigs, and more using noise textures.",
        },
        "In total, I created over 3,000 frames of animations, totaling nearly 3-minutes in runtime. I spent many nights rendering frames on my laptop, only to see a visual mistake, correct it, and re-render everything again.",
        "Whenever I open the interactive, all I see are the warts—the animations I couldn't perfect, the slights-of-hand that feel too rudimentary. Still, I'm proud of how far I pushed the project, and in my opinion, it's pretty singular across the corpus of graphics journalism.",
      ]
    },
    navBg: true,
  },
  {
    id: crypto.randomUUID(),
    nav_name: "Mummy Workshop",
    hed: "Step inside this ancient mummification workshop",
    link: "https://www.nationalgeographic.com/premium/graphics/egypt-mummy-saqqara-excavation-golden-age-feature",
    bg: "image",
    asset: "mummy.png",
    textColor: "white",
    bgColor: "#8f7d60",
    bts: true,
    textShadow: true,
  },
  {
    id: crypto.randomUUID(),
    nav_name: "Camp Century",
    hed: "Explore Camp Century, a Cold War-era military base buried in the Greeland icecap",
    link: "https://www.nationalgeographic.com/history/graphics/explore-camp-century-history-impact",
    bg: "image",
    asset: "cc_2.png",
    textColor: "black",
    navBg: false,
  },
  {
    id: crypto.randomUUID(),
    nav_name: "Artemis 1",
    hed: "A visual guide of NASA's plan for returning to the moon",
    link: "https://www.nationalgeographic.com/magazine/graphics/a-visual-guide-of-nasas-plan-to-get-back-to-the-moon",
    bg: "image",
    asset: "art2.png",
    textColor: "white",
  },
  {
    id: crypto.randomUUID(),
    nav_name: "Deer Antlers",
    hed: "Why do deer shed their antlers annually?",
    link: "https://www.nationalgeographic.com/animals/graphics/deer-antlers-shed-regrow",
    bg: "image",
    asset: "antlers.gif",
    textColor: "white",
    navBg: "true",
    textShadow: true,
  },
  {
    id: crypto.randomUUID(),
    nav_name: "Fertility Rate",
    hed: "Smaller families, starting Later: the drop of fertility rates in the US",
    link: "https://www.nationalgeographic.com/premium/graphics/us-fertility-rate-older-and-lower",
    bg: "image",
    asset: "fertility.png",
    textColor: "black",
  },
];
