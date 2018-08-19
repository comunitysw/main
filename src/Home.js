import React from 'react';
import { Link }	from 'react-router-dom';

import './CU.css';
import './App.css';
import logo from './logo.jpg';

const cutitle=[
	"Find The Path v0.18.1",
	"To Be Continued...",
	"Credit",
	"Documents"

]

const cuposter=[
	"https://cafeptthumb-phinf.pstatic.net/MjAxODA3MjZfMjE5/MDAxNTMyNTk5NzcyODQ1.XOGgFkXZIt4eINKwc3_KZuPWuKppvy9nHO2PQLrRmMAg.LnITdQjN1sCWabeAW-GHa66J7ZI3zwdXLJdQ3N8Fe4Eg.PNG.khss314/%EA%B7%B8%EB%A6%BC2.png?type=w740",
	"https://cafeptthumb-phinf.pstatic.net/MjAxODA3MjZfMTI3/MDAxNTMyNTk5NzcyNTAy.TDiIjouWoQ55ZhbRis-rCM5e7_E_Hg9FT0wy9VePyTAg.0TpwpNS86wHCi4LDVUM89KXkBeAVaiwfYuol0Koh_m8g.PNG.khss314/%EA%B7%B8%EB%A6%BC1.png?type=w740",
	"https://cafeptthumb-phinf.pstatic.net/MjAxODA3MjZfNzQg/MDAxNTMyNTk5NzczMTE5.n9KBx3tRt44R0lQRa2r76C5zd_h1zMl_0nDQxVlHgYQg.6a47tTZ2khYL-cvLbe02xW3KKvoDag1iscvxiaZTDs4g.PNG.khss314/%EA%B7%B8%EB%A6%BC3.png?type=w740",
	"https://cafeptthumb-phinf.pstatic.net/MjAxODA3MjZfMjcz/MDAxNTMyNTk5NzczMzM0.c9LqWYld1ZV2WUvGm7Zetzzj5Le3Z8OiEzTTEHc-ju8g.rymkOdL5ysoM1iZN2lMm7NJ3gYIGzD2Cj3N10o0iAOog.PNG.khss314/%EA%B7%B8%EB%A6%BC4.png?type=w740"
]



const Home = (alt) =>{
    return (	
		<div className="container">

			<div className="App_header">
				<img src={logo} alt={logo}/>
				<h2> Sangwon Highschool </h2>
			</div>
			<div className="App">
				<Link to ="/findthepath" className="CU">
            		<div className="CU__Column">
						<img src={cuposter[0]} alt={alt} className="CU__Poster" />
						<h1>{cutitle[0]}</h1>
					</div>
				</Link>	
				<div className="CU">	
					<div className="CU__Column">
						<img src={cuposter[1]} alt={alt} className="CU__Poster" />
						<h1>{cutitle[1]}</h1>
					</div>
				</div>	
				<Link to = "/credit" className="CU">	 
        	    	<div className="CU__Column">
						<img src={cuposter[2]} alt={alt} className="CU__Poster" />
						<h1>{cutitle[2]}</h1>
					</div> 
				</Link>	
				<Link to="/document" className="CU">	
        	    	<div className="CU__Column">	
						<img src={cuposter[3]} alt={alt} className="CU__Poster" />
						<h1>{cutitle[3]}</h1> 
    	        	</div>    
        		</Link>
			</div>
		</div>
    );
}



export default Home;