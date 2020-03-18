import React, { Component } from "react";
import Slider from "react-slick";
import {WelcomeLeft,WelcomeRight} from "../../components/Welcome/Welcome";
import {AttendeeScreen,InstructorScreen} from "../../components/VirsualClassroom/VirsualClassroom";
import {SolutionRight,SolutionLeft} from "../../components/SolutionAntomy/SolutionAntomy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./Main.module.css";
import Grid from "@material-ui/core/Grid";

class Main extends Component{
    constructor(props){
        super(props);
        this.slide = this.slide.bind(this);
    }
    state = {
        nav1: null,
        // nav3:null,
        exchangeVideo:{
            leftvideo:1,
            rightvideo:2,
        },
    }
    slide(y){
        if(y > 0) {
            this.slideRight.slickPrev();
            // this.sliderleft.slickPrev();
        }else{
            this.slideRight.slickNext();
            // this.sliderleft.slickNext();
        }
    }
    componentWillMount(){
        this.setState({
            nav1: this.slideRight,
        });
        window.addEventListener('wheel', (e) => {
            this.slide(e.wheelDelta);
        });
    }
 
    screenExchange = (video) =>{
        if(video === 1){
            this.setState({exchangeVideo:{ 
                leftvideo:1,
                rightvideo:2,
            }});
        }else{
            this.setState({exchangeVideo:{
                leftvideo:2,
                rightvideo:1,
            }});

        }
    }
    render(){
          let slickSetting={
            arrows:false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            slickPrev: " ",
            slickNext:' ',
            dots: true,
            dotsClass:Style.sliderDotsright,
            className:Style.slideItem  ,
            speed: 500,
            cssEase: "cubic-bezier(0, 0, 0.2, 1)",
          }

        return(
            <React.Fragment>
                <section className={Style.main}>
                    <div className={Style.container}>
                        <Slider {...slickSetting} ref={slider => (this.slideRight = slider) }  >
                            {/* // asNavFor={this.state.nav1} */}                                  
                                <section  className={Style.welcome}>
                                    <Grid container >
                                        <Grid item xs={12}  md={6}>
                                            <div  className={Style.leftContent}>
                                                <WelcomeLeft  index={0}/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}  md={6}>
                                            <div  className={Style.rightContent}>
                                                <WelcomeRight index={0}/>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </section>                            
                                <section >
                                    <Grid container >
                                        <Grid item xs={12}  md={6}>
                                            <div  className={Style.leftContent}>
                                                <AttendeeScreen  mouseover= {this.screenExchange} videoNum= {this.state.exchangeVideo.leftvideo}/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}  md={6}>
                                            <div  className={Style.rightContent}>
                                                <InstructorScreen  mouseover= {this.screenExchange} videoNum= {this.state.exchangeVideo.rightvideo} />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </section>                            
                                <section >
                                    <Grid container >
                                        <Grid item xs={12}  md={5}>
                                            <div  className={Style.leftContent}>
                                                <SolutionLeft />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}  md={7}>
                                            <div  className={Style.rightContent}>
                                                <SolutionRight />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </section>                            
                        </Slider>
                    </div>
                </section>
            </React.Fragment>        
        )
    }
}
export default Main;