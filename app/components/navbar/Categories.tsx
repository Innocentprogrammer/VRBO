'use client';

import { TbBeach, TbPool } from "react-icons/tb";
import Container from "../Container";
import { 
    GiBoatFishing,  
    GiDesert, 
    GiForestCamp, 
    GiIsland, 
    GiMountains, 
    GiRiver, } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
    {
        label:'Beach',
        icon : TbBeach,
        description: 'This property is close to the beach'
    },
    {
        label:'Modern',
        icon : MdOutlineVilla,
        description: 'This property is modern'
    },
    {
        label:'Mountains',
        icon : GiMountains,
        description: 'This property is on mountains'
    },
    {
        label:'Pools',
        icon : TbPool,
        description: 'This property has a pool'
    },
    {
        label:'Islands',
        icon : GiIsland,
        description: 'This property is on an island'
    },
    {
        label:'Lake',
        icon : GiBoatFishing,
        description: 'This property is close to a lake'
    },
    {
        label:'Camping',
        icon : GiForestCamp,
        description: 'This property has camping activities'
    },
    {
        label:'Snow',
        icon : BsSnow,
        description: 'This property has camping activitites'
    },
    {
        label:'Desert',
        icon : GiDesert,
        description: 'This property is in the desert'
    },
    {
        label:'Lux',
        icon : IoDiamond,
        description: 'This property is luxurious'
    },
    {
        label:'River',
        icon : GiRiver,
        description: 'This property is close to river'
    },

]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname ==='/';

    if(!isMainPage){
        return null;
    }


    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox key={item.label} label = {item.label} selected = {category === item.label} icon ={item.icon} />
                ))}
            </div>
        </Container>
    );
}
export default Categories;