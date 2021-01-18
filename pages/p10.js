import Tag from "../components/Tag";
import SmallPJ from "../components/SmallProject";
export default function p10() {
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">Activites/Projects</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"80%",width:"70%",marginTop:"15px"}}>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        <SmallPJ pjimg="yearbook" framework={['nextjs','react']}  url="yearbook.thistine.com/" twobytwo={true}>
            Yearbook - an Alumni website for Deputy director of 2020's Chachoengsao provincial educational office using data filled from google form. 
        </SmallPJ>
        <SmallPJ pjimg="ourop" framework={['nextjs','react']} url="thistine.com/ouropinions/" framework={['react']} twobytwo={true}>
        School Questionnaire website using data filled from google form and pull those data realtime to compute and display on website.
        </SmallPJ>

        <SmallPJ pjimg="rotc" framework={['nextjs','react']} url="thistine.com/rotc/" framework={['php','jquery']} twobytwo={true}>
        School TROTCS website to check attendance student in eachday using Barcode on TROTCS card and 
        print out all students status in eachday.
        </SmallPJ>

        <SmallPJ pjimg="googlehome" framework={['nodejs','gcp','twitterdev']}  url="s.thistine.com/twapi" twobytwo={true}>
        Twitter Api - open source project to get data from Twitter api and use these data to compute using nodejs and
        send to google home api using voice to activate function.
        </SmallPJ>

        <SmallPJ pjimg="cheer" framework={['react','firebase']}  url="pinkcheer.thistine.com" twobytwo={true}>
        Pinkcheer - a online realtime cheer songs lyric applaction to reduce lyrics papers and easier for student to browser the lyrics.
        </SmallPJ>

        <SmallPJ pjimg="wallet" framework={['react']}  url="pinkwallet.thistine.com" twobytwo={true}>
        Pinkwallet - A realtime public money-statement report for pink team in school sportday using google sheet api.
        </SmallPJ>

        </div></div>
      </div>
    )
  }
  