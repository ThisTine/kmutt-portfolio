import Tag from "../components/Tag";
import SmallPJ from "../components/SmallProject";
import {SRLWrapper} from 'simple-react-lightbox'
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
        <SmallPJ pjimg="thistine" widthbg={true} framework={['nextjs','graphql','apollo','nodejs','react']} url="www.thistine.com" >
          My personal website to see more Award, Projects, Pictures and personal data, written in Javascript using nextjs and nodejs.
        </SmallPJ>
        <SRLWrapper>
        <div className="activity">
            
            <div className="activity-con">
            <img src="/img/act/foodrive.jpg" className="activity-pic" />
            <p className="activity-parag">
              USA food drive for people who got effected by Herrican Florence in 2018  </p>
            </div>

            <div className="activity-con">
            <img src="/img/act/bed.jpg" className="activity-pic" />
            <p className="activity-parag">
              Chirstmas songs delivery - an activity to sing christmas song for disabled people by Church of Christ In Clayton </p>
            </div>

            <div className="activity-con">
            <img src="/img/act/christ.jpg" className="activity-pic" />
            <p className="activity-parag">
              USA bed building for people who got effected by Herrican Florence in 2018   </p>
            </div>

            <div className="activity-con">
            <img src="/img/act/cookie.jpg" className="activity-pic" />
            <p className="activity-parag"> 
             USA christmas's cookie baking for disable people. </p>
            </div>
            
        </div>
        </SRLWrapper>
        </div>
      </div>
    )
  }
  