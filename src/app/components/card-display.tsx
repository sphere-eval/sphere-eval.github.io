import * as React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CardTemplateProps } from "./templates-variables";

const CardTemplate = ({ sysname, paperurl, aspects, content }: CardTemplateProps) => {
  return (
    <Card className="h-[480px]" style={{ width: 'calc(100%)' }}>
      <CardHeader>
        <div className="flex items-center justify-start space-x-1">
          <CardTitle>SPHERE Eval Card: {sysname}</CardTitle>
          {paperurl && <a href={paperurl} className='dsiiwa-link' target='_blank' rel='noreferrer'>(paper) </a>}
        </div>
      </CardHeader>
      
      <ScrollArea className="h-[380px]" style={{ width: 'calc(100% - 20px)' }}>
      <CardContent id="card-content">
        <div className="grid w-full items-center gap-4">
          {/* WHAT */}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center space-x-1">
              <Label htmlFor="sphere-what" className="sphere-what-color font-bold">What is being evaluated?</Label>
                {aspects.system && <Badge variant="outline" className='sphere-what-color font-light'>system</Badge>}
                {aspects.model && <Badge variant="outline" className='sphere-what-color font-light'>model</Badge>}
                {aspects.effectiveness && <Badge variant="outline" className='sphere-what-color font-light'>effective</Badge>}
                {aspects.efficiency && <Badge variant="outline" className='sphere-what-color font-light'>efficient</Badge>}
                {aspects.satisfaction && <Badge variant="outline" className='sphere-what-color font-light'>satisfy</Badge>}
            </div>
            <p id="sphere-what" className="pt-4">{content.what} </p>
          </div>
          {/* HOW */}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center space-x-1">
              <Label htmlFor="sphere-how" className="sphere-how-color font-bold">How is the evaluation conducted?</Label>
                {aspects.intrinsic && <Badge variant="outline" className='sphere-how-color font-light'>intrinsic</Badge>}
                {aspects.extrinsic && <Badge variant="outline" className='sphere-how-color font-light'>extrinsic</Badge>}
                {aspects.quantitative && <Badge variant="outline" className='sphere-how-color font-light'>quant</Badge>}
                {aspects.qualitative && <Badge variant="outline" className='sphere-how-color font-light'>qual</Badge>}
            </div>
            <p id="sphere-how" className="pt-4">{content.how}</p>
          </div>
          {/* WHO */}
            <div className="flex flex-col">
                <div className="flex flex-wrap items-center space-x-1">
                <Label htmlFor="sphere-who" className="sphere-who-color font-bold">Who is participating in the evaluation?</Label>
                    {aspects.static && <Badge variant="outline" className='sphere-who-color font-light'>static</Badge>}
                    {aspects.generative && <Badge variant="outline" className='sphere-who-color font-light'>generative</Badge>}
                    {aspects.expert && <Badge variant="outline" className='sphere-who-color font-light'>expert</Badge>}
                    {aspects.user && <Badge variant="outline" className='sphere-who-color font-light'>user</Badge>}
                </div>
                <p id="sphere-who" className="pt-4">{content.who}</p>
            </div>
            {/* WHEN */}
            <div className="flex flex-col">
                <div className="flex flex-wrap items-center space-x-1">
                <Label htmlFor="sphere-when" className="sphere-when-color font-bold">When is the evaluation conducted?</Label>
                    {aspects.immediate && <Badge variant="outline" className='sphere-when-color font-light'>immediate</Badge>}
                    {aspects.shortterm && <Badge variant="outline" className='sphere-when-color font-light'>short-term</Badge>}
                    {aspects.longterm && <Badge variant="outline" className='sphere-when-color font-light'>long-term</Badge>}
                </div>
                <p id="sphere-when" className="pt-4">{content.when}</p>
            </div>
            {/* METAHOW */}
            <div className="flex flex-col">
                <div className="flex flex-wrap items-center space-x-1">
                <Label htmlFor="sphere-metahow" className="sphere-metahow-color font-bold">How is the evaluation conducted?</Label>
                    {aspects.validity && <Badge variant="outline" className='sphere-metahow-color font-light'>valid</Badge>}
                    {aspects.reliability && <Badge variant="outline" className='sphere-metahow-color font-light'>reliable</Badge>}
                </div>
                <p id="sphere-metahow" className="pt-4">{content.metahow}</p>
            </div> 

        </div>
      </CardContent>
      </ScrollArea>
    </Card>
  );
};

CardTemplate.displayName = 'CardTemplate';
export {CardTemplate};