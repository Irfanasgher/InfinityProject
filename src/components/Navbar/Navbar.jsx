import React, { Component } from 'react';
import './Navbar.scss';


class NavbarClass extends Component {
	render() {
		return (
			<div id='nav'>
				<nav className={'navbar navbar-expand-xl '}>
					<div className='container-fluid'>
						<a className='navbar-brand ml-5' href='#'>
							INDEX.
						</a>
						<button className='navbar-toggler' data-toggle='collapse' data-target='#navbarNav'>
							<span className='fa fa-navicon' />
						</button>
						<div className='collapse navbar-collapse' id='navbarNav'>
							<ul className='navbar-nav ml-auto d-flex align-md-items-center'>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        SERVICES
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Gifts</a>
                                        <a class="dropdown-item" href="#">Diploma Framing</a>
                                        {/* <div class="dropdown-divider"></div> */}
                                        <a class="dropdown-item" href="#">Jersey Framing</a>
                                        <a class="dropdown-item" href="#">Canvas Framing</a>
                                        <a class="dropdown-item" href="#">Instagram Framing</a>
                                        <a class="dropdown-item" href="#">Designer's Choice Framing</a>
                                        <a class="dropdown-item" href="#">Gallery Wall Framing</a>
                                        <a class="dropdown-item" href="#">Business Framing</a>
                                        <a class="dropdown-item" href="#">Artist And Vendor Framing</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        FRAMES
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Our Frames</a>
                                        <a class="dropdown-item" href="#">What We Frame?</a>
                                    </div>
                                </li>

								<li className='nav-item'>
									<a className='nav-link' href='#'>
										BLOG
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										CONTACT US
									</a>
								</li>
							</ul>
                            <form class="form-inline my-2 my-lg-0 ml-md-5 ml-3 mr-5">
                                <img src='./person_outline-24px-01.png' alt='image'  height='50'/>
                                <img src='./shopping_basket-24px-01.png' alt='image'  height='40' class='ml-3'/>
                            </form>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
export default NavbarClass;
