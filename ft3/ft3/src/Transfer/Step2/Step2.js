import React from 'react';
import './Step2.css';
import {Link} from 'react-router-dom';
import Arrow from '../../img/arrow.svg';
import Timeline from '../../img/timeline2.png';
import Louky from '../../img/louky.svg'

function Step1() {
    return (

        <div className = "Step1">

            <Link className="link" to = "/Step1"><img className = "Arrow" src = {Arrow}></img></Link>
            <img className = "Timeline" src = {Timeline}></img>

            <div className = "Background">
                <h1 className = "txt1"> Nouveau virement </h1>
                <div className = "Block2"> 
                    <h1 className = "title">Compte émetteur</h1>
                    <Link className ="link" to = "/Step3" >
                        <div className="Emetteur">
                            <div className = "Block3">
                                <h1 className = "txt5"> 
                                    Compte de dépôts <br></br>
                                    01234 0000005678A
                                </h1>
                            </div>
                            <p className = "money">136,53 €</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className = "ChatBot">
                 <Link className = "link" to = "/Chatbot" ><img className = "Louky" src = {Louky}></img></Link>
            </div>

            <div className = "Menu">
                <div className = "Compte">
                    <div className = "Block">
                        <div className = "img2"></div>
                        <p className = "t1">Compte</p>
                    </div>
                </div>
                <div className = "Virements">
                    <div className = " Block">
                        <div className = "img3"></div>
                        <p className = "t2" >Virements</p>
                    </div>
                </div>
                <div className = "Carte">
                    <div className = " Block">
                        <div className = "img4"></div>
                        <p className = "t3" >Carte</p>
                    </div>
                </div>
                <div className = "RIB">
                    <div className = " Block">
                        <div className = "img5"></div>
                        <p className = "t4" >RIB</p>
                    </div>  
                </div>
                <div className = "Bilan">
                    <div className = " Block">
                        <div className = "img6"></div>
                        <p className = "t5" >Bilan</p>
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default Step1;
