import bannerpic from '../../img/michelangelodavid.jpg'
import BoxBasic from "../Box"
import './Banner.css'
export default function Banner(){
    return(
<BoxBasic typ={"section"} custom={{position:"relative" , height:"100vh"}}>
<img className='WH100 banner-img' src={bannerpic} alt="" />




</BoxBasic>
    )


}