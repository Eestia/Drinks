import './cards.css'
import Limonade from '../../assets/Limonade.png'
import orange from '../../assets/orange.png'
import vert from '../../assets/vert.png'
import Tea from '../../assets/Tea.png'
function Cards() {
    return (
    <section id='card'>
        <div id='img-card'>
            <img src={Limonade} alt="" />
            <img src={orange} alt="" />
            <img src={vert} alt="" id='vert'/>
            <img src={Tea} alt="" id='tea'/>
        </div>
    </section>
    );
}
export default Cards;