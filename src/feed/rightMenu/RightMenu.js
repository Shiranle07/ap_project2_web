import {react, useState} from 'react'
import bank from "./images/bank.jpg"
import vacation from "./images/vacation.jpg"
import "./RightMenu.css"
import RightMenuItem from './RightMenuItem';
import p1 from "./images/p1.jpg"
import p2 from "./images/p2.jpg"
import p3 from "./images/p3.jpg"
import p4 from "./images/p4.jpg"
import p5 from "./images/p5.jpg"
import p6 from "./images/p6.jpg"
import Contact from './Contact';

function RightMenu(){
    return(
        <div class="right-menu-container list-group mt-2" >
            <p className="fw-bolder">
                Sponsored
            </p>

            <RightMenuItem imgSrc={bank} text1={"<< Join Future Bank"} text2={"Save your money in the future"}/>
            <RightMenuItem imgSrc={vacation} text1={"<< Click here"} text2={"for your next vacation"}/>

            <hr></hr>
            <p className="fw-bolder">
                Contacts
            </p>   
            
            <Contact imgSrc={p1} name={"Itay Cohen"}/>
            <Contact imgSrc={p2} name={"Sharon Amir"}/>
            <Contact imgSrc={p3} name={"Yair Nave"}/>
            <Contact imgSrc={p4} name={"Ariel Segal"}/>
            <Contact imgSrc={p5} name={"Shoval Yafe"}/>
            <Contact imgSrc={p6} name={"Noa Shai"}/>


        </div>
    );

}
export default RightMenu;