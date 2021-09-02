import React , {useEffect, useState} from 'react';
// import 'react-gallery-carousel/dist/index.css';
// import { useStyles } from '@material-ui/core/styles';
import Card from '../Card/Card';
import ControlledCarousel from '../Carousel/Carousel';
import Caroufredsel_wrapper from '../Carousel/Caroufredsel_wrapper';
import axios from "axios"
import Header from '../header/Header';
import "./Main_page.css"
import image1 from '../../assets/example1.jpg'
import image2 from '../../assets/example3.jpg'
import Current_Score from '../Card/Current_Score';
import Footer from '../Footer/Footer';
import Federation from '../Card/Federation';
import Middle_widget_Heading from './widgets/Middle_widget_Heading';
import Caroufredsel_federation from '../Carousel/carousel_federation';
import WorldChampion from './widgets/WorldChampion';
import Twitter from './widgets/Twitter';
import {IoIosArrowForward , IoLogoTwitter} from 'react-icons/io'
import {BiWorld, BiCalendarEvent} from 'react-icons/bi'
import LatestEvents from './widgets/LatestEvents';




const Main_page = () => {

  const [latestnews , setlatestnews] = useState([]);
  const [sponsor , setSponsor] = useState([])
  const [eventFront , seteventFront] = useState([]);
  

  useEffect(()=>
  {
    
  axios.get("http://billiardsports.in/api/news/latest/")
          .then((response) => setlatestnews(response.data.data))

        
          axios.get("http://billiardsports.in/api/sponsers/")
        .then((response) => setSponsor(response.data.data))

        
        axios.get("http://billiardsports.in/api/event/front/")
        .then((response)=>seteventFront(response.data.data))


        
      

  } , [])
  

  return (
    <>

    <Header active="home"/>
    <div style={{height:"auto"}}>
      
    
      <div >
        <ControlledCarousel/>
      
</div>  

  
    <div className="headlines">

          <div style={{width:"100%"  , backgroundColor: "rgba(0, 0, 0, 0.9)"}}>

          <Caroufredsel_federation/>
          <br></br>
          {
                  eventFront && eventFront.map((data ,i)=>
                  {
                    if(!data.is_active)
                    return(<></>)

                  return(
                    
                    <>
                    <div className="headlines_title">
                    <h2>{data.event_name}</h2>

                    </div>
                    
                    <hr></hr>

                    <div className="headlines_current_score" style={{display:"flex" , flexWrap:"wrap" ,flexDirection:"row"}}>
                          {
                            (
                              <>
                            <Current_Score title={data.name1} />
                            <Current_Score title = {data.name2}/>
                            <Current_Score title = {data.name3}/>
                            <Current_Score title = {data.name4}/>
                            <Current_Score title = {data.name5}/>
                            <Current_Score title = {data.name6}/>
                              </>
                            )
                          }
                      </div>

                      </>

                  )})
            }

            
        </div>
        </div>


      </div>
      <div className="middle_widgets">
            <div className="current_champion">
              <Middle_widget_Heading icon={BiWorld} link="champion" text="World Champion"/>
              <WorldChampion/>

            </div>

            <div className="tweeter_field">
            <Middle_widget_Heading icon={IoLogoTwitter} text="Tweets"/>
            <Twitter/>

            </div>

            <div className="event_name">
            <Middle_widget_Heading icon={BiCalendarEvent} link="events" text="Latest Events"/>
            <LatestEvents/>

            </div>

      </div>
      <br></br>
      <br></br>

    <div className="news_section" style={{display:"flex" , margin:"0 3rem" , flexDirection:"row" , justifyContent:"center" , flexWrap:"wrap"}}>
  
    {latestnews&&latestnews.slice(0 , 3).map((e , index)=>
    (
  
        <Card key={index} data={e} />
    ))    
    }


     
    </div>
   

    <br></br>

    <Caroufredsel_wrapper data = {sponsor}/>
      
    <Footer/>
      </>
  );
};

export default Main_page;