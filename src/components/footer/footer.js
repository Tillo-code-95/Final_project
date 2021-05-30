import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {


    return (
        
            <footer className="bg-dark text-center text-white">

                <div className="text-center  mt-6 p-3" >
                    © 2021 Copyright:
                    <NavLink to = "/news"  className="text-white" > <br/> More information</NavLink>
                </div>

            </footer>
        
    )
}