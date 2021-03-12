import React, { useState } from 'react';
import "./style.css";
import 'font-awesome/css/font-awesome.min.css';
import logo from './logo.png';
import { useHistory } from "react-router-dom";

export const Header: React.FC<{content:string}> = ({content}) => {
    const [border1, setBorder1] = useState('header-primary-ul-a')
    const [border2, setBorder2] = useState('header-primary-ul-a')
    const [border3, setBorder3] = useState('header-primary-ul-a')
    const [border4, setBorder4] = useState('header-primary-ul-a')

    const [borderLi1, setBorderLi1] = useState('header-li')
    const [borderLi2, setBorderLi2] = useState('header-li')
    const [borderLi3, setBorderLi3] = useState('header-li')
    const [borderLi4, setBorderLi4] = useState('header-li')
    const [borderLi5, setBorderLi5] = useState('header-li')

    const history = useHistory()

    const onLogOutClick = () => {
        localStorage.clear()
        history.push('/');
    }
    const onClick1 = ()=>{setBorder1('header-primary-ul-a-green'); setBorder2('header-primary-ul-a'); setBorder3('header-primary-ul-a'); setBorder4('header-primary-ul-a');
        setBorderLi1('header-li-green');
        setBorderLi2('header-li');
        setBorderLi3('header-li');
        setBorderLi4('header-li');
        setBorderLi5('header-li');
    }

    const onClick2 = ()=>{setBorder2('header-primary-ul-a-green'); setBorder1('header-primary-ul-a'); setBorder3('header-primary-ul-a'); setBorder4('header-primary-ul-a');
        setBorderLi2('header-li-green');
        setBorderLi1('header-li');
        setBorderLi3('header-li');
        setBorderLi4('header-li');
        setBorderLi5('header-li');
    }

    const onClick3 = ()=>{setBorder3('header-primary-ul-a-green'); setBorder1('header-primary-ul-a'); setBorder2('header-primary-ul-a'); setBorder4('header-primary-ul-a');
        setBorderLi3('header-li-green');
        setBorderLi1('header-li');
        setBorderLi2('header-li');
        setBorderLi4('header-li');
        setBorderLi5('header-li');
    }

    const onClick4 = ()=>{setBorder4('header-primary-ul-a-green'); setBorder1('header-primary-ul-a'); setBorder3('header-primary-ul-a'); setBorder2('header-primary-ul-a');
        setBorderLi4('header-li-green');
        setBorderLi1('header-li');
        setBorderLi2('header-li');
        setBorderLi3('header-li');
        setBorderLi5('header-li');
    }

    const onClick5 = ()=>{
        setBorderLi5('header-li-green');
        setBorderLi1('header-li');
        setBorderLi2('header-li');
        setBorderLi4('header-li');
        setBorderLi3('header-li');
    }
    return (
        <header className="header"> 
            <div className="header-inner">  
                <a className="header-logo">
                    <img src={logo} width="159" height="22"/>
                </a>
                <div className="header-primary">
                    <ul className="header-primary-ul"> 
                        <li className={borderLi1}> 
                        <a onClick={onClick1}className={border1}>
                                <span className="header-primary-span">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </span>
                                <span className="header-span"> Découvrir </span>
                            </a>
                        </li>
                        <li className={borderLi2}> 
                            <a onClick={onClick2} className={border2}> 
                                <span className="header-primary-span">
                                    <i className="fa fa-transgender" aria-hidden="true"></i>
                                </span>
                                <span className="header-span"> Croisez vos destins </span>
                            </a>
                        </li>
                        <li className={borderLi3}> 
                            <a onClick={onClick3} className={border3}> 
                                <span className="header-primary-span">
                                    <i className="fa fa-comments-o" aria-hidden="true"></i>
                                </span>
                                <span className="header-span"> Messages </span>
                            </a>
                        </li>
                        <li className={borderLi4}> 
                            <a onClick={onClick4} className={border4}> 
                                <span className="header-primary-span">
                                <i className="fa fa-bell" aria-hidden="true"></i>
                                </span>
                                <span className="header-span"> Notifications </span>
                            </a>
                        </li>
                        <li className={borderLi5}> 
                            <a onClick={onClick5}  className='header-primary-ul-a-1'> 
                                <span className="header-primary-span">
                                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                </span>
                            </a>
                        </li> 
                    </ul>
                </div>
                <div className="header-aside"> 
                    <div className="flex-row">
                        <a className="header-aside-a"> 
                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                            <span className="header-span1"> Mon Compted </span>
                        </a>
                        <button type="button" onClick={onLogOutClick} className="header-btn"> 
                            <i className="fa fa-power-off" aria-hidden="true"></i>
                        </button>
                    </div>
                </div> 
            </div>
        </header>
    )

}



