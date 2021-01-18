import Tag from "../components/Tag";
import Project from "../components/Project";

export default function p8() {
    const img0 = [{src:'/img/paalumnus/1.jpg'},'/img/paalumnus/2.jpg','/img/paalumnus/3.jpg']
    const img1 = {folder:"paalumnus", file:[["1"],["2"],["3","gone"]]}
    const img2 = {folder:"randomi", file:[["2"],["1"],["3","gone"]]}
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">Activites/Projects</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"80%",width:"70%",marginTop:"15px"}}>
        <Project description="Alumni Website of Phanom Adun Witthaya school to add/see
            Alumni students from the past." picConHeight="45%" framework={['react','nodejs','graphql','mongodb']} url="thistine.com/paalumnus/">
            
            { img1.file.map(item=>{return(
                <img key={Math.random()} src={`/img/${img1.folder}/${item[0]}.jpg`} className={item[1] ? `pj-img ${item[1]}` : "pj-img"} alt="test" />
            )})}
            
        </Project>
        <Project description="RANDOMI Application a (RNG) random number generator Application
        with a richful features including Repeat number,effect and beautiful easy to use UI,
        coming in Native Appication on Playstore and PWA  (PROGRESSIVE WEB APPLICATION )." picConHeight="60%" mode="min" framework={['flutter','react']} url="app.thistine.com/randomi/">
            {img2.file.map(item=>{return(
                <img key={Math.random()} src={`/img/${img2.folder}/${item[0]}.jpg`} className={item[1] ? `pj-img ${item[1]}`: "pj-img"} />
            )})}
            
        </Project>

        </div>
      </div>
    )
  }
  