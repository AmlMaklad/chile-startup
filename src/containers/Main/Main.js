import React, { Component } from "react";
import Slider from "react-slick";
import {WelcomeLeft,WelcomeRight} from "../../components/Welcome/Welcome";
import {AttendeeScreen,InstructorScreen} from "../../components/VirsualClassroom/VirsualClassroom";
import {SolutionRight,SolutionLeft} from "../../components/SolutionAntomy/SolutionAntomy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./Main.module.css";




class Main extends Component{
    constructor(props){
        super(props);
        this.slide = this.slide.bind(this);
    }
    state = {
        nav1: null,
        // nav2: null,
        nav3:null,
        exchangeVideo:{
            rightvideo:2,
            leftvideo:1,
        },
    }
    slide(y){
        if(y > 0) {
            this.slideRight.slickPrev();
            this.sliderleft.slickPrev();
        }else{
            this.slideRight.slickNext();
            this.sliderleft.slickNext();
        }
    }
    componentWillMount(){
        console.log(this.slideRight)
        this.setState({
            nav1: this.slideRight,
            nav3:this.dots
            // nav2: this.sliderleft,
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
        let settings = {
            arrows:false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            slickPrev:" ",
            slickNext:" ",
            dotsClass:Style.sliderDots,
            className:Style.slideItem,
            speed: 500,
            cssEase: "cubic-bezier(0, 0, 0.2, 1)"
          };
          let settingRight={
            arrows:false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            slickPrev: " ",
            slickNext:' ',
            dotsClass:Style.sliderDotsright,
            className:Style.slideItem  ,
            speed: 500,
            cssEase: "cubic-bezier(0, 0, 0.2, 1)",
          }
          let dots = {
            arrows:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical:true,
            slickPrev:" ",
            slickNext:" ",
            className:Style.sliderDots,
            speed: 500,
          };
          
        return(
            <React.Fragment>
                <section className={Style.main}>
                    <div className={Style.container}>
                        <Slider   
                                asNavFor={this.state.nav1 } 
                                ref={slider => (this.dots = slider)}  
                                className={Style.sliderDots}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                {...dots}
                            >
                                <button>welcome</button>
                                <button>video</button>
                                <button>Component</button>
                        </Slider >
                        <div  className={Style.leftContent}>
                            <Slider  
                                asNavFor={this.state.nav3}
                                ref={slider => (this.slideRight = slider)}
                                {...settings} 
                             >
                                <WelcomeLeft  index={0}/>
                                <AttendeeScreen  mouseover= {this.screenExchange} videoNum= {this.state.exchangeVideo.leftvideo}/>
                                <SolutionLeft />
                            </Slider>
                        </div>
                        <div  className={Style.rightContent}>
                            <Slider  
                            // asNavFor={this.state.nav1}
                            {...settingRight} 
                            ref={slider => (this.sliderleft = slider) }    >
                                <WelcomeRight index={0}/>
                                <InstructorScreen  mouseover= {this.screenExchange} videoNum= {this.state.exchangeVideo.rightvideo} />
                                <SolutionRight />
                            </Slider>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default Main;