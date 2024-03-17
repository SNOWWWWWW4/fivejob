import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Image from 'react-bootstrap/Image';
import firstImg from '../Assets/googledriving.jpg';
import secondImg from '../Assets/nasa-n463SoeSiVY-unsplash.jpg';
import thirdImg from '../Assets/nasa-wAkLQnT2TC0-unsplash.jpg';
import fourthImg from '../Assets/netflix.jpg';
import fifthImg from '../Assets/microft.jpg';
import HeroImg from '../Assets/suit.jpg';

const HomePageComponent = () => {
  return (
    <div >
      <Container>
            <Row>
                <Col>
                    
                    <Image className='heroImg' src={HeroImg} alt='Hero Img' fluid/>
                    <h1>This is the Home Page</h1>
                </Col>
            </Row>
            {/* Start of Main Section */}
            <Row>
                <Col xs={12} sm={6} >
                    <Image className='frstImg' src={firstImg} alt="google"/>
                </Col>
                <Col xs={12} sm={6}>

                    <div className='box2'>
                        <h1 className='Header'>1# Google</h1>
                    </div>

                    <div className='box'>
                    <div className='Details'>
                            <h6>Details: Full Time, 134k yearly</h6>
                        </div>
                        <div className='Description'>
                            <h5 className='Subheader'>Current open position</h5>
                            <h6>Computer Engineer, AST, Software Systems </h6>
                            <button>hi</button>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row >
                <Col xs={12} sm={6} >
                <div className='box2 mt-2'>
                        <h1 className='Header'>2# NASA</h1>
                    </div>

                    <div className='box'>
                        <div className='Details'>
                            <h6>Details: Full Time, 134k yearly</h6>
                        </div>
                        <div className='Description'>
                            <h5 className='Subheader'>Current open position</h5>
                            <h6>Computer Engineer, AST, Software Systems  </h6>
                            <button>hi</button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={6} className='colTwo mx-auto'   >
                    <Image  className='scndImg' src={secondImg} alt="Nasa Img one"/>
                </Col>
            </Row>

            <Row>
                <Col xs={12} sm={6} className='colTwo'>
                    <Image className='thrdImg'  src={thirdImg} alt='Nasa Img Two'/>
                </Col>
                <Col xs={12} sm={6} >
                <div className='box2 mt-2'>
                        <h1 className='Header'>3# NASA... Again Lol</h1>
                    </div>

                    <div className='box'>
                    <div className='Details'>
                            <h6>Details: Full Time, 134k yearly</h6>
                        </div>
                        <div className='Description'>
                            <h5 className='Subheader'>Current open position</h5>
                            <h6>Computer Engineer, AST, Software Systems  </h6>
                            <button>hi</button>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} sm={6} >
                <div className='box2 mt-2'>
                        <h1 className='Header'>4# Netflix</h1>
                    </div>

                    <div className='box'>
                    <div className='Details'>
                            <h6>Details: Full Time, 134k yearly</h6>
                        </div>
                        <div className='Description'>
                            <h5 className='Subheader'>Current open position</h5>
                            <h6>Computer Engineer, AST, Software Systems  </h6>
                            <button>hi</button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={6} className='colTwo' >
                    <Image className='frthImg img-fluid' src={fourthImg} alt='Netflix Img'/>
                </Col>
            </Row>

            <Row>
                <Col xs={12} sm={6} className='colFive mt-2' >
                    <Image className='ffthImg ' src={fifthImg} alt='Microsoft'/>
                </Col>
                <Col xs={12} sm={6} >
                <div className='box2 mt-2'>
                        <h1 className='Header'>5# Microsoft</h1>
                    </div>

                    <div className='box'>
                        <div className='Details'>
                            <h6>Details: Full Time, 134k yearly</h6>
                        </div>
                        <div className='Description'>
                            <h5 className='Subheader'>Current open position</h5>
                            <h6>Computer Engineer, AST, Software Systems</h6>
                            <button>hi</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HomePageComponent
