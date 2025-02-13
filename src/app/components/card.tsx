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
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

import { ScrollArea } from "@/components/ui/scroll-area"


export function CardWithForm() {
  return (
    <Card className="w-[760px] h-[500px]">
      <CardHeader>
        <div className="flex items-center justify-between space-x-5">
            <CardTitle>Create a SPHERE card for your human-AI system: </CardTitle>
            <Input id="sysname" placeholder="System name. E.g., AngleKindling" className="w-60"/>
        </div>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>

      <ScrollArea className="h-[350px] w-[740px] rounded-md">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {/* WHAT */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-what" className="sphere-what-color font-bold">What is being evaluated?</Label>
                <ToggleGroup variant="outline" type="multiple">
                    <ToggleGroupItem value="system" aria-label="Toggle system">
                        <p>system</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="model" aria-label="Toggle model">
                        <p>model</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="effective" aria-label="Toggle effective">
                        <p>effectiveness</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="efficient" aria-label="Toggle efficient">
                        <p>efficiency</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="satisfy" aria-label="Toggle satisfy">
                        <p>satisfaction</p>
                    </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <Textarea id="sphere-what" placeholder="E.g., AngleKindling evaluated their system component on various goals: 
              effectiveness (how many pursuable angles were created), efficiency (mental demand), and user satisfaction 
              (how much they liked different features and overall helpfulness) were evaluated." />
            </div>
            {/* HOW */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-how" className="sphere-how-color font-bold">How is the evaluation conducted?</Label>
                <ToggleGroup variant="outline" type="multiple">
                    <ToggleGroupItem value="intrinsic" aria-label="Toggle intrinsic">
                        <p>intrinsic</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="extrinsic" aria-label="Toggle extrinsic">
                        <p>extrinsic</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="quantitative" aria-label="Toggle quantitative">
                        <p>quantitative</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="qualitative" aria-label="Toggle qualitative">
                        <p>qualitative</p>
                    </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <Textarea id="sphere-how" placeholder="E.g., In the within-subjects user study (extrinsic), participants
              use both AngleKindling and INJECT to brainstorm angles for a press release. They participated in a semi-structured
              interview (qualitative). Participants rate the systems' helpfulness, pursuable angles, and mental demand on a 7-point
              Likert scale in questionnaire (quantitative). Participants also rated how helpful individual features were on both systems.
              Paired-sample Wilcoxon tests with Bonferroni correction between the Likert scale ratings for AngleKindling versus INJECT." />
            </div>
            {/* WHO */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-who" className="sphere-who-color font-bold">Who is participating in the evaluation?</Label>
                <ToggleGroup variant="outline" type="multiple">
                    <ToggleGroupItem value="static" aria-label="Toggle static">
                        <p>static</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="generative" aria-label="Toggle generative">
                        <p>generative</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="expert" aria-label="Toggle expert">
                        <p>expert</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="user" aria-label="Toggle user">
                        <p>user</p>
                    </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <Textarea id="sphere-who" placeholder="E.g., Recruited 12 professional journalists (domain experts & intended users)
              who worked in any medium (e.g., digital publications, newspapers, radio, TV) and were English speakers based in
              the US. Participants must have written press releases in the past. No automated evaluators." />
            </div>
            {/* WHEN */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-when" className="sphere-when-color font-bold">When is the evaluation conducted (duration)?</Label>
                <ToggleGroup variant="outline" type="multiple">
                    <ToggleGroupItem value="immediate" aria-label="Toggle immediate">
                        <p>immediate</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="short-term" aria-label="Toggle short-term">
                        <p>short-term</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="long-term" aria-label="Toggle long-term">
                        <p>long-term</p>
                    </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <Textarea id="sphere-when" placeholder="E.g., Short-term evaluation (60 minutes user study, $30 compensation).
              Participants were shown a video demonstration in each system and then asked to brainstorm a story idea." />
            </div>
            {/* META HOW */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-metahow" className="sphere-metahow-color font-bold">How is the evaluation validated?</Label>
                <ToggleGroup variant="outline" type="multiple">
                    <ToggleGroupItem value="validity" aria-label="Toggle validity">
                        <p>validity</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="reliability" aria-label="Toggle reliability">
                        <p>reliability</p>
                    </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <Textarea id="sphere-metahow" placeholder="E.g., The tool and press release order were counterbalanced to prevent a 
              learning effect (validity). There's no reliability measures." />
            </div>
          </div>
        </form>
        </CardContent>
        </ScrollArea>

      <CardFooter className="flex justify-between">
        <Button variant="outline">Upload Paper</Button>
        <Button>Export</Button>
        {/* <Select>
            <SelectTrigger id="output-format">
                <SelectValue placeholder="Choose file format" />
            </SelectTrigger>
            <SelectContent position="popper">
                <SelectItem value=".png">PNG</SelectItem>
                <SelectItem value=".md">Markdown</SelectItem>
                <SelectItem value=".tex">LaTex</SelectItem>
            </SelectContent>
        </Select> */}
      </CardFooter>
    </Card>
  )
}
