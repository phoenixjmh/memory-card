import { useState } from "react";
import React from 'react';
import Card from "./Card";
const  DisplayPanel = (props)=>{
    console.log('-------------');
    const scrambleArray=()=>{

        let cardsCopy=cards.slice();
        let sorted=cardsCopy.sort((a,b)=> Math.random() - .5 );
        console.log(sorted);
        setCards(sorted);
        console.log(cards);

    }

    const imageLinks={
        
            orange:' https://i5.peapod.com/c/AO/AOSGD.jpg',
           
            banana: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
           
            tomato: 'https://images.tokopedia.net/img/cache/500-square/product-1/2020/3/28/88348670/88348670_bad94540-d6f0-4b1a-98bb-2c4cda206f03_700_700',
           
            apple:  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg',
           
            brocolli:  'https://www.hopkinsmedicine.org/sebin/t/y/broccoli-content.jpg',
           
            carrot:  'https://daisyfarms.com/wp-content/uploads/2019/12/p9.jpg' ,
           
            lemon:  'https://www.kroger.com/product/images/large/front/0000000004053',
           
            bell: 'https://i5.walmartimages.com/asr/7be94a8e-9a5d-4f87-842f-5fe4084138ba.c95d36e140f5e0d492ca632b42e4543c.jpeg',
           
            kiwi:  'https://i5.walmartimages.com/asr/dc067e54-f2cd-4571-982f-999fcb336261_1.b0503c52628000d0ea76f5ae4cfd694a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
           
            onion: ' https://images.albertsons-media.com/is/image/ABS/184450056?$ng-ecom-pdp-desktop$&defaultImage=Not_Available',
           
            garlic:' https://i5.walmartimages.com/asr/a4f114d9-93ab-4d39-a8d6-9170536f57a9.f9f8e58c8e3e74894050c7c2267437e3.jpeg',
           
            grapefruit: 'https://i5.walmartimages.com/asr/c23d870b-225f-4818-afe3-0b4add48afe6.b78126a7bd277fd29afbeb21dac10e04.jpeg',
           
            strawberry: 'https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2015/08/single_strawberry__isolated_on_a_white_background.jpg',
           
            potato: ' https://images.heb.com/is/image/HEBGrocery/000318982-1'

    }
    

    let cardsArray=[
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'orange'}/>,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'banana'} />,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'tomato'} />,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'apple'}/>,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'brocolli'} />,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'carrot'}/>,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'lemon'} />,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'grapefruit'} />,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'bell'}/>,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'kiwi'} />,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'onion'}/>,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'garlic'} />,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'strawberry'} />,
    <Card {...props}scrambleArray={scrambleArray}imgs={imageLinks}id={'potato'}/>,
    
    


];
    const [cards,setCards]=useState(cardsArray)


    
    return  <div className="display-panel">
            { cards.map((card,index)=><React.Fragment key={card.props.id}>{card}</React.Fragment>)}

            </div>

    
}

export default DisplayPanel;