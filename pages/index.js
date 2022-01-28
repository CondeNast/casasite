//import { GetStaticProps } from 'next'
import Navigation from 'microsite-navigation'
import Content from 'microsite-content';
import Brands from 'microsite-brands';
import Video from 'microsite-video';
import logocss from '../styles/Home.module.css'
import '../styles/Home.module.css'
const axios = require('axios'); 


const defaultEndPoint ="http://localhost:3000/stubbedAD-100-2021.json";

/* export const getStaticProps = async (context) => {
  const res= await fetch(defaultEndPoint);
	const data = await res.json();
	
  console.log("response");
} */

/* export const getStaticProps = async (context)=>{
  const res = await axios.get('http://api.football-data.org/v1/competitions/426/leagueTable');
  console.log(res.data);
} */


    


export default function Home() {

/* axios.get(defaultEndPoint).then((response) => {
      console.log(response);
    }); */

    axios.get(defaultEndPoint).then((response) => {
      console.log(response);
    });
    

    
      // res is assigned the response once the axios
      // async get is completed
      /* const res = await axios.get('http://api.football-data.org/v1/competitions/426/leagueTable');
      // Return properties
      
      console.log(res.data); */
    
  //console.log(data);
  /* const res =async () =>{

    const result = await fetch("/stubbedAD-100-2021.json");
    const data = await result.json();
    console.log("api information");
    console.log(data);

  };
  res(); */


  

  /* if (!data) {
    return {
      notFound: true,
    }
  } */


  const contentstr = "stext about asdaksfasnf asdfakdfajs asdfjkajksdfjk asdkjfajdsf ads fjkasjkfd asjkdfjasdfj asdfjkasdfbasdbfjasdfajuwerpuk adsfasjfjaksdfnjkasnfjkas jadsjfjkasjfasjdfjasdfjasdfjasdf jdfjasjdfajsdjf asdfjajkdfjlka jkasdfjajkf asjkdfjaslf aksdfkasd"
  
  const videos = {
    "id": 3,
    "caption": "The Tastemakers",
    "src": "https://www.youtube.com/watch?v=GKIdlW0MGQA",
    "createdAt": "2021-12-10T04:16:42.667Z",
    "updatedAt": "2021-12-10T08:27:01.420Z",
    "publishedAt": "2021-12-10T08:27:01.418Z",
    "social_links": []
};


  const brands = [
    {
        id: 1,
        src:'img/The Quarry Curators of luxury marble and rare onyx PNG (3).png',
        alt:'luxiry marble and rare only'
    },
    {
      id: 2,
      src:'img/The Quarry Curators of luxury marble and rare onyx PNG (3).png',
      alt:'luxiry marble and rare only'
  },
  {
    id: 3,
    src:'img/The Quarry Curators of luxury marble and rare onyx PNG (3).png',
    alt:'luxiry marble and rare only'
},
{
  id: 4,
  src:'img/The Quarry Curators of luxury marble and rare onyx PNG (3).png',
  alt:'luxiry marble and rare only'
}
];

  const navigation = {
    "__component": "microsite.navigation",
    "id": 4,
    "nav_items": [
        {
            "id": 1,
            "title": "OURPARTNERS",
            "createdAt": "2021-12-10T04:12:11.492Z",
            "updatedAt": "2021-12-13T04:47:45.643Z",
            "publishedAt": "2021-12-10T08:26:26.141Z",
            "locale": "en",
            "navRef": "ad-100-2021-about",
            "localizations": []
        },
        {
            "id": 2,
            "title": "ABOUT CASA VOGUE",
            "createdAt": "2021-12-10T04:12:39.514Z",
            "updatedAt": "2021-12-13T04:48:04.510Z",
            "publishedAt": "2021-12-10T08:26:30.428Z",
            "locale": "en",
            "navRef": "ad-100-2021-winners",
            "localizations": []
        },
        {
            "id": 3,
            "title": "VIDEOS",
            "createdAt": "2021-12-10T04:12:59.215Z",
            "updatedAt": "2021-12-13T04:47:54.180Z",
            "publishedAt": "2021-12-10T08:26:19.579Z",
            "locale": "en",
            "navRef": "ad-100-2021-episodes",
            "localizations": []
        }
    ]
}
  return (
<>

<article className={`${logocss.containerFluid} ${logocss.logoSection}`}>
        <section>
            <img src="img/CASA Vogue Logo.png" alt="casa vogue logos" 
             weight="300px" height="200px" />
        </section>
    </article>
    <article className={logocss.containerFluid}> 
    <h2 className={logocss.title}>PARTNERS</h2>
    <section className={logocss.brandsList}>
        {/* <ul>
            <li>
                <img src="img/The Quarry Curators of luxury marble and rare onyx PNG (3).png" alt="Jaquar logo" height="100px" width="200px" />
            </li>
            <li>
                <img src="img/The Quarry Curators of luxury marble and rare onyx PNG (3).png" alt="Jaquar logo" height="100px" width="200px" />
            </li>
            <li>
                <img src="img/The Quarry Curators of luxury marble and rare onyx PNG (3).png" alt="Jaquar logo" height="100px" width="200px" />
            </li>
            <li>
                <img src="img/The Quarry Curators of luxury marble and rare onyx PNG (3).png" alt="Jaquar logo" height="100px" width="200px" />
            </li>
            <li>
                <img src="img/The Quarry Curators of luxury marble and rare onyx PNG (3).png" alt="Jaquar logo" height="100px" width="200px" />
            </li>
            <li>
                <img src="img/The Quarry Curators of luxury marble and rare onyx PNG (3).png" alt="Jaquar logo" height="100px" width="200px" />
            </li>
            
        </ul> */}
        <Brands brands={brands} />
    </section>
</article>

<article className={`${logocss.containerFluid} ${logocss.navMenu}`}>
        <nav>
            {/* <a href="#">OUR PARTNERS <span className={logocss.divider}>|</span> </a>
            <a href="#">ABOUT CASA VOGUE
            <span className={logocss.divider}>|</span> </a>
            <a href="#">VIDEOS</a> */}
           
            <Navigation navigation={navigation.nav_items} />
        </nav>
    </article>
    <article className={logocss.ourPartners} >
        <div className={logocss.banner}>
            <h1 className={`${logocss.aboutUsText} ${logocss.aboutUsTitle}`}>ABOUT</h1>
            {/* <p className={logocss.aboutUsText} >
                stext about asdaksfasnf asdfakdfajs asdfjkajksdfjk asdkjfajdsf ads fjkasjkfd asjkdfjasdfj asdfjkasdfbasdbfjasdfajuwerpuk adsfasjfjaksdfnjkasnfjkas
                jadsjfjkasjfasjdfjasdfjasdfjasdf jdfjasjdfajsdjf asdfjajkdfjlka jkasdfjajkf asjkdfjaslf aksdfkasd
            </p> */}
            <Content content={contentstr} />
        </div>
           
    </article>
    <article className={`${logocss.containerFluid} ${logocss.videosSectios}`}>
    <h1 className={logocss.videosTitle} >VIDEOS</h1>
    <section>
      <ul>
          <li>
          <Video
                    video={videos}
                />
          </li>
          <li>
            <div className= {logocss.card}>

            <div className={logocss.cardBody}>
                            <video width="320" height="240" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                              </video>
              </div>
              <div className={logocss.cardFooter}>
                            <h2>Title Here</h2>
                            <h4>Sub Head Here</h4>
              </div>

            </div>
          </li>
          <li>
            <div className= {logocss.card}>

            <div className={logocss.cardBody}>
                            <video width="320" height="240" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                              </video>
              </div>
              <div className={logocss.cardFooter}>
                            <h2>Title Here</h2>
                            <h4>Sub Head Here</h4>
              </div>

            </div>
          </li>
          <li>
            <div className= {logocss.card}>

            <div className={logocss.cardBody}>
                            <video width="320" height="240" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                              </video>
              </div>
              <div className={logocss.cardFooter}>
                            <h2>Title Here</h2>
                            <h4>Sub Head Here</h4>
              </div>

            </div>
          </li>
          
      </ul>
    </section>
    <section>
      <ul>
          <li>
            <div className= {logocss.card}>

            <div className={logocss.cardBody}>
                            <video width="320" height="240" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                              </video>
              </div>
              <div className={logocss.cardFooter}>
                            <h2>Title Here</h2>
                            <h4>Sub Head Here</h4>
              </div>

            </div>
          </li>
          <li>
            <div className= {logocss.card}>

            <div className={logocss.cardBody}>
                            <video width="320" height="240" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                              </video>
              </div>
              <div className={logocss.cardFooter}>
                            <h2>Title Here</h2>
                            <h4>Sub Head Here</h4>
              </div>

            </div>
          </li>
          <li>
            <div className= {logocss.card}>

            <div className={logocss.cardBody}>
                            <video width="320" height="240" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                              </video>
              </div>
              <div className={logocss.cardFooter}>
                            <h2>Title Here</h2>
                            <h4>Sub Head Here</h4>
              </div>

            </div>
          </li>
          <li>
            <div className= {logocss.card}>

            <div className={logocss.cardBody}>
                            <video width="320" height="240" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                              </video>
              </div>
              <div className={logocss.cardFooter}>
                            <h2>Title Here</h2>
                            <h4>Sub Head Here</h4>
              </div>

            </div>
          </li>
          
      </ul>
    </section>
    </article>

</>

   /*  <>
      <div className={styles.container}>
      <h1>Hello</h1>
      <Navigation navigation={navigation.nav_items} />
    </div>
    </> */
    
  )
}
