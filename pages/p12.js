import Tag from "../components/Tag";
import SmallPJ from "../components/SmallProject";
import Project from "../components/Project";
import { SRLWrapper } from "simple-react-lightbox";
export default function p10() {
  const img1 = {folder:"billdora", file:[["main"],["p2"],["p4.1"],["p5"],["p4"],["p3","gone"]]}
    return (
      <div className="page" style={{background:"url(/img/p12.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div style={{position:"absolute",bottom:"0",background:"white",padding:" 0 10px",borderRadius:"5px"}}><p>*Back cover</p></div>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">Favorable comment
</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"80%",width:"70%",marginTop:"15px"}}>
          <div className="feword-center">
            <SRLWrapper>
          <img src="/img/certi/favorablecommet.jpg" className="feword" />                   
            </SRLWrapper>
       
          </div>
          <h1 className="newproject">New project</h1>
          <Project mode="small" description="
          Billdora - An application to shared bills with a function to calculate bill, Check paid people and create bill page with you Promptpay's QR code for faster and easier paying.
          Free to download in playstore" picConHeight="60%" framework={['flutter']} url="app.thistine.com/billdora/">
            
            { img1.file.map(item=>{return(
                <img key={Math.random()} src={`/img/${img1.folder}/${item[0]}.jpg`} className={item[1] ? `pj-img ${item[1]}` : "pj-img"} alt="test" />
            )})}
            
        </Project>

        {/* <Project description="เว็บไซต์ทำเนียบศิษย์เก่าโรงเรียนพนมอดุลวิทยาสำหรับเพิ่ม/ดู
            รายชื่อศิษย์เก่าที่จบจากโรงเรียน มีระบบเช็ครายชื่อซ้ำและอื่น ๆ" picConHeight="45%" framework={['react','nodejs','graphql','mongodb']} url="thistine.com/paalumnus/">
            
            { img1.file.map(item=>{return(
                <img key={Math.random()} src={`/img/${img1.folder}/${item[0]}.jpg`} className={item[1] ? `pj-img ${item[1]}` : "pj-img"} alt="test" />
            )})}
            
        </Project>
        <Project description="RANDOMI แอพพลิดชั่นสุ่มตัวเลขที่มีฟังก์ชั่นหลากหลายและ
ปรับแต่งโดยคำนึงถึงการใช้งานในชีวิตประจำวันให้ได้มากที่สุด
มีทั้งรูปแบบแอพพลิเคชั่น (Playstore) และ PWA (PROGRESSIVE WEB APPLICATION )" picConHeight="60%" mode="min" framework={['flutter','react']} url="app.thistine.com/randomi/">
            {img2.file.map(item=>{return(
                <img key={Math.random()} src={`/img/${img2.folder}/${item[0]}.jpg`} className={item[1] ? `pj-img ${item[1]}`: "pj-img"} />
            )})}
            
        </Project> */}

        </div>
      </div>
    )
  }
  