import React,{Component} from 'react'
import {Link} from 'react-router'
import BottomTab from './BottomTab'
import style from '../css/discover.css'

let DiscoverTop = ()=>(<div className={style.discoverTop}>发 现</div>);

class DiscoverTopRow extends Component{
    render(){
        return (<div>DiscoverTopRow</div>)
    }
}

class DiscoverSection extends Component{
    render(){
        return (
            <div className={style.discoverSection}>
                <h3>{this.props.name}</h3>
                <p>{this.props.number + ' 篇推荐'}</p>
                <div className={style.sectionImgBox}>
                    <div className={style.sectionImg}></div>
                    <div className={style.sectionImg}></div>
                    <div className={style.sectionImg}></div>
                </div>
            </div>
        )
    }
}

class DiscoverBanner extends Component{
    render(){
        return (<div>DiscoverBanner</div>)
    }
}

class RecommendSection extends Component{
    render(){
        return (<div>RecommendSection</div>)
    }
}

class DiscoverBox extends Component{
    render(){
        return (
            <div className={style.discoverBox}>
                <DiscoverTopRow />
                <DiscoverSection name="火球精选" number="34" />
                <DiscoverBanner />
                <DiscoverSection name="吃点儿好的" number="31" />
                <DiscoverSection name="品质生活" number="18" />
                <DiscoverSection name="新奇酷玩" number="25" />
                <DiscoverSection name="型格指南" number="34" />
                <DiscoverSection name="穿衣搭配" number="26" />
                <DiscoverSection name="礼物指南" number="13" />
                <RecommendSection />
            </div>
        )
    }
}

class Discover extends Component{
    render(){
        return (
            <div>
                <DiscoverTop />
                <DiscoverBox />
                <BottomTab />
            </div>
        )
    }
}

export default Discover;