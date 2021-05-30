import React, { useState } from 'react';
import NewCard from '../components/card/card'


export default function News() {

    const initialState = [
        {
            id: "1",
             title: "title1",
            body: "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iusto. Nihil, ea iste minima blanditiis ipsam vitae est molestiae illum rem magnam ipsa, natus soluta."
        },{
            id: "2",
            title: "title2",
            body: "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iusto. Nihil, ea iste minima blanditiis ipsam vitae est molestiae illum rem magnam ipsa, natus soluta."
        },{
            id: "3",
            title: "title3",
            body: "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iusto. Nihil, ea iste minima blanditiis ipsam vitae est molestiae illum rem magnam ipsa, natus soluta."
        },{
            id: "4",
            title: "title4",
            body: "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iusto. Nihil, ea iste minima blanditiis ipsam vitae est molestiae illum rem magnam ipsa, natus soluta."
        },
        {
            id: "5",
            title: "title5",
            body: "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iusto. Nihil, ea iste minima blanditiis ipsam vitae est molestiae illum rem magnam ipsa, natus soluta."
        },
        {
            id: "6",
            title: "title6",
            body:"lLorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iusto. Nihil, ea iste minima blanditiis ipsam vitae est molestiae illum rem magnam ipsa, natus soluta."
        },
        {
            id: "7",
            title: "title7",
            body: "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iusto. Nihil, ea iste minima blanditiis ipsam vitae est molestiae illum rem magnam ipsa, natus soluta."
        },
        {
            id: "8",
            title: "title8",
            body: "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iusto. Nihil, ea iste minima blanditiis ipsam vitae est molestiae illum rem magnam ipsa, natus soluta."
        },
    ];

     const [news, setNews] = useState(initialState);
    
    return (
        <div>
            {
                news.map(item => <NewCard item={item}/>)
            }
            {/* <NewsRow news={news.filter(item => item.category === "soccer")}/>
            <NewsRow news={news.filter(item => item.category === "rugby")}/>
            <NewsRow news={news.filter(item => item.category === "basketball")}/> */}
        </div>
    )
}