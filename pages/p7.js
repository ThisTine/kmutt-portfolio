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
        <Award imgp="/img/certi/solo_c.jpg" caption="Completed the C course" captionsec="from Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/solo_html.jpg" caption="Completed the HTML course " captionsec="from Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/solo_java.jpg" caption="Completed the java course" captionsec="from Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/solo_jquery.jpg" caption="Completed the jquery course" captionsec="from Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/solo_php.jpg" caption="Completed the PHP course" captionsec="from Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/solo_python.jpg" caption="Completed the jquery Python3 course" captionsec="from Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/solo_javascript.jpg" caption="Completed the jquery Javascript course" captionsec="from Sololearn" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/eng.jpg" caption="Silver medal in  English program lower seconday level (Zone C)'s Multi-Skills" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/engtran.jpg" caption="Scored 98/100 in Multimedia and Webpage Design from Clayton Highschool USA" />
        </div>
            
        </div>

        </div>
      </div>
    )
  }
  