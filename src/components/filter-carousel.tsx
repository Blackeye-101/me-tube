"use client"

import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Carousel, CarouselApi, CarouselContent, CarouselItem,CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useState, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";

interface FilterCarouselProps{
    value?: string | null;
    isLoading?:boolean;
    onSelect: (value:string | null)=>void;
    data:{
        value:string;
        label: string;
    }[];
}

export const FilterCarousel = ({
    value,
    onSelect,
    data,
    isLoading
}:FilterCarouselProps) => {
    const [api,setApi ]=useState<CarouselApi>()
    const [current, setCurrent]=useState(0)
    const [count, setCount]=useState(0)

    useEffect(()=>{
        if(!api){
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap()+1)

        api.on("select",()=>{
            setCurrent(api.selectedScrollSnap()+1)
        })
    },[api])

  return (
    <div className="relative w-full">
        {/* Left fade */}
        <div className={cn(
            "absolute left-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none",
            current===1 && "hidden"
        )}></div>

        <Carousel setApi={setApi} 
        opts={{
            align:'start',
            dragFree:true
        }}
        className="w-full px-12">
            <CarouselContent className="-ml-3">
                {!isLoading && (
                    <CarouselItem onClick={()=>onSelect(null)} className="pl-3 basis-auto">
                        <Badge variant={value===null?'default':'secondary'} className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm font-semibold">
                            All
                        </Badge>
                    </CarouselItem>
                )}
                {isLoading && Array.from({length:12}).map((_, index)=>(
                    <CarouselItem key={index} className="pl-3 basis-auto">
                        <Skeleton className="rounded-lg px-3 py-1 h-full text-sm w-[100px] font-semibold">
                            &nbsp;
                        </Skeleton>
                    </CarouselItem>
                ))}
                {!isLoading && data.map((item)=>(
                    <CarouselItem onClick={()=>onSelect(item.value)} key={item.value} className="pl-3 basis-auto">
                        <Badge variant={value===null?'default':'secondary'} className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm font-semibold">
                            {item.label}
                        </Badge>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 z-20"></CarouselPrevious>
            <CarouselNext className="right-0 z-20"></CarouselNext>
        </Carousel>

        {/* Right fade */}
        <div className={cn(
            "absolute right-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none",
            current===count && "hidden"
        )}></div>
    </div>
  )
}