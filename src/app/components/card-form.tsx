import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  ToggleGroup,
} from "@/components/ui/toggle-group"


import { ScrollArea } from "@/components/ui/scroll-area"
import { TooltipToggleItem } from './tooltip-toggle-item';


export function CardWithForm() {
  return (
    <Card className="w-[710px] h-[520px]">
      <CardHeader>
        <div className="flex items-center justify-between space-x-5">
            <CardTitle>Create a SPHERE card for your Human-AI system</CardTitle>
            {/* <div className="flex items-center space-x-2"> */}
            <Button>Export</Button>
        </div>
        <Input id="sysname" placeholder="Your system's name." className="w-40"/>
      </CardHeader>

      <ScrollArea className="h-[370px] w-[700px] rounded-md">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {/* WHAT */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-what" className="sphere-what-color font-bold">What is being evaluated?</Label>
                <ToggleGroup variant="outline" type="multiple">
                    <TooltipToggleItem value="system" tooltipContent="The evaluation covers the system as a whole to understand how these design choices may impact user experiences, including different layers of the system, such as interfaces or interactions." /> 
                    <TooltipToggleItem value="model" tooltipContent="The evaluation focuses on the model or algorithm, including its performance, accuracy, and robustness." />
                    <TooltipToggleItem value="effectiveness" tooltipContent="The evaluation focuses on the effectiveness of the system, including how well it achieves its intended goals or objectives." />
                    <TooltipToggleItem value="efficiency" tooltipContent="The evaluation focuses on the efficiency of the system, including how well it performs with minimal resources or time." />
                    <TooltipToggleItem value="satisfaction" tooltipContent="The evaluation focuses on user satisfaction, including how well the system meets user needs or expectations." />
                </ToggleGroup>
              </div>
              <Textarea id="sphere-what" placeholder=""/>
            </div>
            {/* HOW */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-how" className="sphere-how-color font-bold">How is the evaluation conducted?</Label>
                <ToggleGroup variant="outline" type="multiple">
                    <TooltipToggleItem value="intrinsic" tooltipContent="The evaluation is conducted in a controlled environment, such as a lab setting, to understand the system's performance under specific conditions." />
                    <TooltipToggleItem value="extrinsic" tooltipContent="The evaluation is conducted in a real-world setting to understand how the system performs in a natural environment." />
                    <TooltipToggleItem value="quantitative" tooltipContent="The evaluation uses quantitative methods to collect and analyze data, such as surveys, questionnaires, or performance metrics." />
                    <TooltipToggleItem value="qualitative" tooltipContent="The evaluation uses qualitative methods to collect and analyze data, such as interviews, observations, or open-ended questions." />
                </ToggleGroup>
              </div>
              <Textarea id="sphere-how" placeholder="" />
            </div>
            {/* WHO */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-who" className="sphere-who-color font-bold">Who is participating in the evaluation?</Label>
                <ToggleGroup variant="outline" type="multiple">
                    <TooltipToggleItem value="static" tooltipContent="The evaluation participants are recruited based on specific criteria, such as domain expertise or intended users." />
                    <TooltipToggleItem value="generative" tooltipContent="The evaluation participants are recruited to generate ideas or concepts for the system." />
                    <TooltipToggleItem value="expert" tooltipContent="The evaluation participants are experts in the domain or field related to the system." />
                    <TooltipToggleItem value="user" tooltipContent="The evaluation participants are intended users of the system." />
                </ToggleGroup>
              </div>
              <Textarea id="sphere-who" placeholder="" />
            </div>
            {/* WHEN */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-when" className="sphere-when-color font-bold">When is the evaluation conducted (duration)?</Label>
                <ToggleGroup variant="outline" type="multiple">
                  <TooltipToggleItem value="immediate" tooltipContent="The evaluation is conducted immediately after the system is used to understand initial reactions or feedback." />
                  <TooltipToggleItem value="short-term" tooltipContent="The evaluation is conducted within a short period after the system is used to understand short-term effects or outcomes." />
                  <TooltipToggleItem value="long-term" tooltipContent="The evaluation is conducted over an extended period after the system is used to understand long-term effects or outcomes." />
                </ToggleGroup>
              </div>
              <Textarea id="sphere-when" placeholder="" />
            </div>
            {/* META HOW */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-metahow" className="sphere-metahow-color font-bold">How is the evaluation validated?</Label>
                <ToggleGroup variant="outline" type="multiple">
                  <TooltipToggleItem value="validity" tooltipContent="The evaluation is validated to ensure that it measures what it intends to measure." />
                  <TooltipToggleItem value="reliability" tooltipContent="The evaluation is validated to ensure that it produces consistent and stable results." />
                </ToggleGroup>
              </div>
              <Textarea id="sphere-metahow" placeholder="" />
            </div>
          </div>
        </form>
        </CardContent>
        </ScrollArea>

      {/* <CardFooter className="flex justify-end">
        <Button variant="outline">Upload Paper</Button>
        <Select>
        <SelectTrigger id="output-format">
        <SelectValue placeholder="Choose file format" />
        </SelectTrigger>
        <SelectContent position="popper">
        <SelectItem value=".png">PNG</SelectItem>
                <SelectItem value=".md">Markdown</SelectItem>
                <SelectItem value=".tex">LaTex</SelectItem>
            </SelectContent>
        </Select> 
      </CardFooter> */}
    </Card>
  )
}
