const React = require('react');
const ReactDOM = require('react-dom');

		//NavBar Component
		var Navbar = React.createClass({
			render : function(){
				return(
					<div>
						<nav className="navbar navbar-default">
							<div className="container-fluid">
							<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">{this.props.brand}</a>
							</div>

							<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
							<li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
							<li><a href="#">About</a></li>

							</ul>
							</div>
							</div>
						</nav>
					</div>
				)
			}
		});
		
		//Jumbotron Component
			var Jumbotron = React.createClass({
				render : function(){
					return(
						<div>
							<div className="jumbotron">
							  <div className="container">
								<h1>Hello, world!</h1>
								<p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
								<p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
							  </div>
							</div>
						</div>
					)
				}
			});

		//Home Page Content
			var PageHome = React.createClass({
				render : function(){
					return(
						<div className="container">
							<div className="row">
								<div className="col-md-4">
								  <h2>Heading</h2>
								  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
								  <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
								</div>
								<div className="col-md-4">
								  <h2>Heading</h2>
								  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
								  <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
							   </div>
								<div className="col-md-4">
								  <h2>Heading</h2>
								  <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
								  <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
								</div>
						  </div>
						</div>
					)
				}			
			});

		//footer Component
			var FooterBar = React.createClass({
				render : function(){
					return(
						<div className="container">
						  <hr />
							  <footer>
								<p>&copy; 2016 My First React Web Page, Inc.</p>
							  </footer>
						</div> 
					)
				}
			});

		//Main  Root Component
		var Root = React.createClass({
			render : function(){
				return(
					<div>
						<Navbar  brand="My First React WebPage"/>
						<Jumbotron />
						<PageHome/>
						<FooterBar/>
					</div>
				)				
			}			
		});
			
			
			ReactDOM.render(
				<Root />,
				document.getElementById("root")
			);