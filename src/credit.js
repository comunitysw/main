import React from 'react';

import './CU.css';
import './App.css';
import logo from './logo.jpg';

const comunity=[
    "강혁준(부장) / 박상준 / 이무영",
    "김희선(차장)",
    "김지예",
    "윤상천"
]

const role=[
    "감독스크립트, 컨트롤러 스크립트 등 유니티 프로그래밍",
    "UI디자인, 저작권에셋관련, 씬제작, 카메라스크립트, 앱변환, 사이트제작",
    "게임아이디어기획, 난이도별 맵 기획, 테스팅",
    "주제곡과 인게임에서의 노래, 효과음 등 음악제작"
]


const credit=() =>{
    return(
        <div className="container">
        	<div className="App_header">
			<img src={logo} alt={logo}/>
			<h2> Sangwon Highschool </h2>
			</div>
            <h1>상원고 게임제작 동아리 'ComUnity'</h1>         
            <div className="Credit">
                <div className="CU__comunity" >	
                        <h1>{comunity[0]}</h1>
                </div>    
                <div className="CU__role">
                    <h1>{role[0]}</h1>
                </div>
		    </div>	
            <div className="Credit">
                <div className="CU__comunity" >	
                    <h1>{comunity[1]}</h1>
                </div>    
                <div className="CU__role">
                    <h1>{role[1]}</h1>
                </div>
		    </div>	
            <div className="Credit">
                <div className="CU__comunity" >	
                    <h1>{comunity[2]}</h1>
                </div>    
                <div className="CU__role">
                    <h1>{role[2]}</h1>
                </div>
		    </div>	
            <div className="Credit">
                <div className="CU__comunity" >	
                     <h1>{comunity[3]}</h1>
                </div>    
                <div className="CU__role">
                    <h1>{role[3]}</h1>
                </div>
		    </div>          
        </div>    
    )
}

export default credit;