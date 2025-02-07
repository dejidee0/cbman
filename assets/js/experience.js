AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "WEB3 PRODUCT MANAGEMENT TUTOR",
    cardImage: "assets/images/experience-page/enovolab.jpg",
    place: "ENOVERLAB ",
    time: "(JAN, 2025 - present)",
    desp: "<ol> <li>Develop and deliver curriculum for aspiring product managers on the fundamentals of Web3 product management, covering topics such as blockchain technology, decentralized applications, tokenomics, and Web3 user experience.</li> <li>Mentor and guide students through practical exercises, case studies, and projects, helping them develop essential skills in user research, product strategy, and agile development within the Web3 context.</li> <li>Share industry best practices and insights on navigating the evolving landscape of Web3 product development, drawing on expertise in DeFi, NFTs, and DAOs.</li> <li>Contribute to the growth and development of Enoverlab’s Web3 product management program, the largest PM school in Africa.</li> </ol>",
},

{
  title: "HEAD OF PRODUCT",
  cardImage: "assets/images/subscribo.jpg",
  place: "SUBSCRIBO",
  time: "(Jan 2024 - Sept 2024)",
  desp: "<ol> <li>Led product strategy and development for a one-stop-shop subscription bill payment platform utilizing Web3 payment methods.</li> <li>Oversaw the product lifecycle from ideation to launch, gaining valuable experience in navigating the challenges of a startup environment.</li> <li>Defined the product vision, strategy, and roadmap, aligning the product with the emerging Web3 payment landscape.</li> <li>Authored comprehensive Product Requirements Documents (PRDs), translating business objectives into clear technical specifications.</li> <li>Monitored key performance indicators (KPIs) to assess product performance and identify areas for improvement.</li> <li>Gained critical insights into product-market fit challenges, specifically regarding product frequency and intensity in the subscription payment space.</li> <li>Contributed to the strategic decision to sunset the product, demonstrating adaptability and a focus on responsible resource allocation.</li> </ol>",
},

{
  title: "OUTREACH MANAGER - AFRICA",
  cardImage: "assets/images/experience-page/ledger.jpg",
  place: "Ledger.com",
  time: "(Aug 2023 - Present)",
  desp: "<ol> <li>Led market analysis and user research to identify key opportunities for product adoption and growth in the African market, resulting in a 35% increase in user acquisition.</li> <li>Gathered and analyzed user feedback and market data to inform product development and localization strategies for the African market.</li> <li>Engaged and recruited ambassadors from identified crypto communities.</li> <li>Assisted with retailers, influencers, affiliates, NFT, crypto, and non-crypto partners.</li> <li>Provided insights to the International Development team and fostered internal comprehension of the African market.</li> <li>Collaborated with Ledger’s divisions, local digital marketing, and communication teams.</li> <li>Sourced engaging consumer and market stories to fuel Ledger’s local PR and communication efforts.</li> <li>Engaged with centrally led programs to deliver last-mile market relevance.</li> </ol>",
},
{
  title: "AFRICA BUSINESS DEVELOPMENT MANAGER P2P - OTC",
  cardImage: "assets/images/experience-page/bitget.jpg",
  place: "Bitget Exchange",
  time: "(Nov 2022 - July 2023)",
  desp: "<ol> <li>Identified and launched P2P markets in Ghana, Uganda, Kenya, South Africa, and Liberia, resulting in a 25% increase in the P2P user base within the first three months.</li> <li>Conceptualized and executed community-building initiatives, including offline events, increasing active users by 3000 in one month.</li> <li>Expanded Bitget P2P’s reach by opening six new markets.</li> <li>Increased Bitget’s P2P daily volume by an average of 100,000 USDT through strategic market penetration and user engagement efforts.</li> <li>Sourced and onboarded P2P and OTC merchants across the African market.</li> <li>Maintained competitive pricing and liquidity in all African markets.</li> <li>Developed channels and promotional strategies to attract new users.</li> </ol>",
},

{
  title: "AFRICAN MANAGER (BUSINESS DEVELOPMENT)",
  cardImage: "assets/images/experience-page/newscrypto.jpg",
  place: "NewsCrypto.io (NWC)",
  time: "(Feb 2021 - Sept 2022)",
  desp: "<ol> <li>Managed and grew the online community, fostering engagement and gathering user feedback to inform product development and marketing strategies.</li> <li>Researched emerging trends and recommended new company offerings to satisfy customers’ needs.</li> <li>Analyzed user needs and market trends to identify opportunities for product improvement and expansion, leading to increased users.</li> <li>Organized physical and virtual meetups across Africa.</li> <li>Ideated and executed various community campaigns.</li> <li>Identified and engaged with influencers and ambassadors.</li> <li>Organized and managed a 30-day reality TV show.</li> </ol>",
},
{
  title: "AFRICAN REP",
  cardImage: "assets/images/experience-page/nmkr.jpg",
  place: "NMKR.IO",
  time: "(June 2022 - Adhoc)",
  desp: "<ol> <li>Developed business strategies for the African market.</li> <li>Served as the face and brand owner of NMKR in Africa.</li> <li>Delivered a keynote speech at the Africa Football Business Summit in Nairobi, focusing on Blockchain solutions for players, clubs, and leagues using NMKR tools.</li> </ol>",
},

{
  title: "COMMUNITY MANAGER / BUSINESS DEVELOPMENT",
  cardImage: "assets/images/experience-page/dxsale.jpg",
  place: "DxSale.Network ($SALE)",
  time: "(Oct 2021 - June 2022)",
  desp: "<ol> <li>Managed Telegram community chat and responded to comments and developers' questions.</li> <li>Assisted new token launches with challenges before and during the process.</li> <li>Conducted AMAs with new project founders before launching.</li> <li>Involved in new listings and activities related to $SALE Token.</li> <li>Drove business development and brand awareness initiatives.</li> </ol>",
},
{
  title: "HEAD OF BUSINESS DEVELOPMENT - AFRICA",
  cardImage: "assets/images/experience-page/tuktuk.jpg",
  place: "TUkTUk",
  time: "(Nov 2022 - July 2023)",
  desp: "<ol> <li>Drove product research initiatives to understand future impacts on product offerings and production.</li> <li>Endorsed demand creation strategies and new product service offerings to improve revenue streams and meet market demands.</li> <li>Established business development strategies to ensure alignment with overall organizational strategy.</li> <li>Formalized new business agreements with identified partners, suppliers, and vendors.</li> <li>Formulated targets and KPIs aligned with business development strategies.</li> <li>Conducted research reports on potential revenue streams and business threats.</li> <li>Led collaboration with internal stakeholders to identify opportunities for portfolio enhancement.</li> </ol>",
},
{
  title: "AFRICAN MANAGER - HEAD OF MARKETING",
  cardImage: "assets/images/experience-page/paratica.jpg",
  place: "Paratica",
  time: "(Feb 2019 - Oct 2020)",
  desp: "<ol> <li>Analyzed consumer behavior and determined customer personas.</li> <li>Identified opportunities to reach new market segments and expand market share.</li> <li>Developed strategies for Digital, Advertising, Communications, and Creative marketing teams.</li> <li>Prepared and managed monthly, quarterly, and annual marketing budgets.</li> <li>Set, monitored, and reported on team goals.</li> <li>Designed branding, positioning, and pricing strategies.</li> <li>Ensured a strong and consistent brand message across all marketing channels and efforts, including events, email campaigns, web pages, and promotional materials.</li> </ol>",
},


];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
    href: "https://uniglobe-hacks.devpost.com/",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
    href: "https://atlashacks2.devpost.com/",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
    href: "https://neohacks.org/",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
    href: "https://www.missioninspired.org/hackathon",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
    href: "https://hack3.co/",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
    href: "https://jithack.netlify.app/",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
    href: "https://recesshacks.com/",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
    href: "https://citro.tech/",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
