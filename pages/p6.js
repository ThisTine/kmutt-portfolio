import Tag from "../components/Tag";
import Award from "../components/Award";
export default function p6() {
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">Honors/Certificates</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"50%",width:"80%",marginTop:"15px"}}>

        <div className="sixbytwo">
        <div className="haf">
        <Award imgp="/img/certi/cefr.jpg" caption="B1 rated in Oxford CEFR (2019)" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/efsetctf.jpg" caption="C1 rated in  EFset CEFR ระดับ C1 (2020)" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/movie.jpg" caption="69th National Sillapa-Hattagam Competition in Short film (National silver medal)" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/rotc.jpg" caption="Jonied TROTCS innovation competition 2019" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/oeg.jpg" caption="Joined 1 in 200 OEG's 2019-2020 UnitedState Of America exchange students" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/etech.jpg" caption="Golen medal in E-tech's Computer Graphic & Homepage Contest " />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/Nextjs.png" caption="Jonied nextjs conf 2020. a conference about nextjs (Javascript framework)" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/aws.jpg" caption="Joined AWS | AWSOME DAY online conference to learn about Amazon Web Service" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/webapp2.jpg" caption="69th Educational Service Area Sillapa-Hattagam Competition in Web applications (1st golden medal)" />
        </div>
            
        </div>


        {/* <div className="sixbytwo">
        <div className="haf">
        <Award imgp="/img/certi/oeg.jpg" caption="เข้าร่วมโปรแกรมนักเรียนแลกเปลี่ยน ณ ประเทศ สหรัฐอเมริกา ปี 2019-2020" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/etech.jpg" caption="รางวัลชนะเลิศ Computer Graphic & Homepage Contest E-tech" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/Nextjs.png" caption="เข้าร่วมงานสัมมนา nextjs conf 2020" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/aws.jpg" caption="เข้าร่วม AWS | AWSOME DAY งานสัมมนา online เรียนรู้เกี่ยวกับบริการต่าง ๆ ภายใน amazon web service" />
        </div>
            
        </div> */}

        </div>
      </div>
    )
  }
  