import React from 'react';
import './App.css';
import githubicon from './assets/githublogo.png';
import linkedin from './assets/linkedInLogo.png';
import Patrick from './assets/Patrick.jpg';
import Rebecca from './assets/Rebecca.jpg'
import Bonjay from './assets/BonJay1.png'
import Nicole from './assets/ND.png'
import WhiteLogo from './assets/logo2.png'
import ExGif from './assets/opticQL1.gif'


function App () {
	return (
		<div className="App">
			<header className="App-header">
				<img src={WhiteLogo} alt='opticql logo' style={{ padding: "0px 0px 0px 70px" }} />
				{/* <div id="title">
					<div><img src={Icon} alt='opticql logo' style={{ width: "110px", height: "110px", padding: "0px 15px 0px 0px" }} /></div>
					<div><h1 id="opticQL">OpticQL</h1></div>
				</div> */}
				<h3> Schema Visualizer | Performance Metrics Tool | GraphQL Playground</h3>
				<div class="social-container">
					<button><a href='https://github.com/oslabs-beta/OpticQL' target="_blank" rel='noopener noreferrer' >Star us on <i class="fab fa-github fa-90x"></i></a></button>
					<button><a href='http://twitter.com/osiris_io' target="_blank" rel='noopener noreferrer'>Download on <i class="fab fa-app-store-ios fa-90x"></i></a></button>
					<button><a href='https://medium.com/osiris-component-generator-and-ui-library/many-minds-one-solution-9deaf3101789' target="_blank" rel='noopener noreferrer'> Read about us on <i class="fab fa-medium-m fa-90x"></i></a></button>
				</div>
			</header>
			<h1 className='main-header'>Features</h1>
			<body>
				<div className='feature1wrap'>
					<div className='feature1'>
						<h1>Color Coded Schema Visualization</h1>
						<ul>
							<li>Import in your schema to render a graphical representation of all fields, edges, and nodes. All type names are connected to their fields in color-coded and dynamic view.</li>
							<br></br>
							<li> . . . </li>
							<br></br>
							<li>Input a query or mutation, all endpoints of the schema that have been "hit" by the request will turn green</li>
						</ul>
					</div>
					<div className="feature1img">
						<img className="gif" src={ExGif} alt='generator demo gif' />
					</div>
				</div>

				<div className='feature2wrap'>
					<div className="feature2img">
						<img className="gif" src={ExGif} alt='build page demo' />
					</div>
					<div className='feature2'>
						<h1>GraphQL Playground</h1>
						<ul>
							<li>Submit a query or mutation for response data and performance metrics of all requested fields</li>
							<br></br>
							<li> . . . </li>
							<br></br>
							<li>Metrics include overall tracing data and individual resolver times</li>
						</ul>
					</div>
				</div>
				<div className='feature1wrap'>
					<div className='feature3'>
						<h1>Performance Metrics Tool </h1>
						<ul>
							<li>Edit the hierarchy with simple arrow buttons</li>
							<br></br>
							<li> . . . </li>
							<br></br>
							<li>Choose to build your React page with/without State or Hooks. You can also build a Vue page with or without State </li>
							<li>Download your page directly.</li>
						</ul>
					</div>
					<div className="feature3img">
						<img className="gif" src={ExGif} alt='build page demo 2' />
					</div>
				</div>
				<div className='feature3wrap'>
					<div className="feature3img">
						<img className="gif" src={ExGif} alt='build page demo' />
					</div>
					<div className='feature3'>
						<h1>GraphQL Playground</h1>
						<ul>
							<li>Submit a query or mutation for response data and performance metrics of all requested fields</li>
							<br></br>
							<li> . . . </li>
							<br></br>
							<li>A graphical overview of the request’s performance time will be generated, along with an expanded performance metrics popup which includes an elaborate rundown of all fields affected by query </li>
						</ul>
					</div>
				</div>
			</body>
			<footer>
				<h1 className='engineer-team'>Our Team of Engineers</h1>
				<div className="profiles">
					<div className="profile">
						<p>Bon-Jay Tseng</p>
						<img src={Bonjay} alt='Bonjay Profile pic' className='profilepic' />
						<div className='profileLinks'>
							<a href='https://github.com/bj-tseng' target="_blank" rel='noopener noreferrer' ><img className='githubicon' alt='github' src={githubicon} /></a>
							<a href='https://www.linkedin.com/in/bon-jay-tseng/' target="_blank" rel='noopener noreferrer' ><img className='githubicon' alt='github' src={linkedin} /></a>
						</div>
					</div>
					<div className="profile">
						<p>Nicole Du</p>
						<img src={Nicole} alt='Nicole Profile pic' className='profilepic' />
						<div className='profileLinks'>
							<a href='https://github.com/Nikkkidew' target="_blank" rel='noopener noreferrer'><img className='githubicon' alt='github' src={githubicon} /></a>
							<a href='https://www.linkedin.com/in/nicole-du-05299472/' target="_blank" rel='noopener noreferrer' ><img className='githubicon' alt='github' src={linkedin} /></a>
						</div>
					</div>
					<div className="profile">
						<p>Patrick Mullen</p>
						<img src={Patrick} alt='Patrick Profile pic' className='profilepic' />
						<div className='profileLinks'>
							<a href='https://github.com/patrick934' target="_blank" rel='noopener noreferrer'><img className='githubicon' alt='github' src={githubicon} /></a>
							<a href='https://www.linkedin.com/in/patrick-mullen-834a4255/' target="_blank" rel='noopener noreferrer'><img className='githubicon' alt='github' src={linkedin} /></a>
						</div>
					</div>
					<div className="profile">
						<p>Rebecca Miller</p>
						<img src={Rebecca} alt='Rebecca Profile pic' className='profilepic' />
						<div className='profileLinks'>
							<a href='https://github.com/millerreb' target="_blank" rel='noopener noreferrer'><img className='githubicon' alt='github' src={githubicon} /></a>
							<a href='https://www.linkedin.com/in/rebecca-miller-18466552/' target="_blank" rel='noopener noreferrer'><img className='githubicon' alt='github' src={linkedin} /></a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;