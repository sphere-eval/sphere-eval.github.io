import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

import { ScrollArea } from "@/components/ui/scroll-area"
import { ToggleGroup } from "@/components/ui/toggle-group"
import { TooltipToggleItem } from './tooltip-toggle-item';

import { CardTemplate } from "./card-display"
import { FormSchema, defaultContent, defaultAspects, aspectDefs } from "./templates-variables"

export function CardWithForm() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<z.infer<typeof FormSchema> | null>(null)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // content: defaultContent,
      aspects: defaultAspects,
    },
  });
  
  function onSubmit(data: z.infer<typeof FormSchema>) {
    setSubmittedData(data);
    setDialogOpen(true);
  }
  
  const handleToggleChange = (item: keyof z.infer<typeof FormSchema>['aspects']) => {
    form.setValue(`aspects.${item}`, !form.getValues(`aspects.${item}`));
  };

  return (
    <div>
    {/* display/preview entered card */}
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
    <DialogContent className="max-w-2xl w-[600px]">
      <CardTemplate
        sysname={submittedData?.sysname || ''}
        aspects={submittedData?.aspects || defaultAspects}
        content={submittedData?.content || defaultContent}
        />
      {/* use a button to download submittedData as a json file */}
      <Button onClick={() => {
        const blob = new Blob([JSON.stringify(submittedData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sphere-card.json';
        a.click();
        URL.revokeObjectURL(url);
      }}>Download JSON</Button>

    </DialogContent>
    </Dialog>

    <Card className="w-[710px] h-[520px]">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <CardHeader>
        <div className="flex items-center justify-between space-x-5">
            <CardTitle>Create a SPHERE card for your Human-AI system</CardTitle>
            <Button type="submit">Export</Button>
        </div>
        <FormField control={form.control} name="sysname" render={({ field }) => (
          <FormItem> <FormControl>
            <Input placeholder="Your system's name" className="w-40" {...field} />
          </FormControl> <FormMessage /> </FormItem> )} />
      </CardHeader>

      <ScrollArea className="h-[370px] w-[700px] rounded-md">
      <CardContent id="card-content">
          <div className="grid w-full items-center gap-4">
            {/* WHAT */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-what" className="sphere-what-color font-bold">What is being evaluated?</Label>
                <ToggleGroup variant="outline" type="multiple">
                  <TooltipToggleItem value="system" tooltipContent={aspectDefs.system} onClick={() => handleToggleChange('system')} />
                  <TooltipToggleItem value="model" tooltipContent={aspectDefs.model} onClick={() => handleToggleChange('model')} />
                  <TooltipToggleItem value="effectiveness" tooltipContent={aspectDefs.effectiveness} onClick={() => handleToggleChange('effectiveness')} />
                  <TooltipToggleItem value="efficiency" tooltipContent={aspectDefs.efficiency} onClick={() => handleToggleChange('efficiency')} />
                  <TooltipToggleItem value="satisfaction" tooltipContent={aspectDefs.satisfaction} onClick={() => handleToggleChange('satisfaction')} />
                </ToggleGroup>
              </div>
              <FormField control={form.control} name="content.what" render={({ field }) => (
                <FormItem> <FormControl>
                  <Textarea id="sphere-what" placeholder="Describe what is being evaluated and select the aspects applied." {...field} />
                </FormControl> <FormMessage /> </FormItem> )} />
            </div>
            {/* HOW */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-how" className="sphere-how-color font-bold">How is the evaluation conducted?</Label>
                <ToggleGroup variant="outline" type="multiple">
                  <TooltipToggleItem value="intrinsic" tooltipContent={aspectDefs.intrinsic} onClick={() => handleToggleChange('intrinsic')} />
                  <TooltipToggleItem value="extrinsic" tooltipContent={aspectDefs.extrinsic} onClick={() => handleToggleChange('extrinsic')} />
                  <TooltipToggleItem value="quantitative" tooltipContent={aspectDefs.quantitative} onClick={() => handleToggleChange('quantitative')} />
                  <TooltipToggleItem value="qualitative" tooltipContent={aspectDefs.qualitative} onClick={() => handleToggleChange('qualitative')} />
                </ToggleGroup>
              </div>
              <FormField control={form.control} name="content.how" render={({ field }) => (
                <FormItem> <FormControl>
                  <Textarea id="sphere-how" placeholder="Describe how the evaluation is conducted and select the aspects applied." {...field} />
                </FormControl> <FormMessage /> </FormItem> )} />
            </div>
            {/* WHO */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-who" className="sphere-who-color font-bold">Who is participating in the evaluation?</Label>
                <ToggleGroup variant="outline" type="multiple">
                  <TooltipToggleItem value="static" tooltipContent={aspectDefs.static} onClick={() => handleToggleChange('static')} />
                  <TooltipToggleItem value="generative" tooltipContent={aspectDefs.generative} onClick={() => handleToggleChange('generative')} />
                  <TooltipToggleItem value="expert" tooltipContent={aspectDefs.expert} onClick={() => handleToggleChange('expert')} />
                  <TooltipToggleItem value="user" tooltipContent={aspectDefs.user} onClick={() => handleToggleChange('user')} />
                </ToggleGroup>
              </div>
              <FormField control={form.control} name="content.who" render={({ field }) => (
                <FormItem> <FormControl>
                  <Textarea id="sphere-who" placeholder="Describe who is participating in the evaluation and select the aspects applied." {...field} />
                </FormControl> <FormMessage /> </FormItem> )} />
            </div>
            {/* WHEN */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-when" className="sphere-when-color font-bold">When is the evaluation conducted (duration)?</Label>
                <ToggleGroup variant="outline" type="multiple">
                  <TooltipToggleItem value="immediate" tooltipContent={aspectDefs.immediate} onClick={() => handleToggleChange('immediate')} />
                  <TooltipToggleItem value="short-term" tooltipContent={aspectDefs.shortterm} onClick={() => handleToggleChange('shortterm')} />
                  <TooltipToggleItem value="long-term" tooltipContent={aspectDefs.longterm} onClick={() => handleToggleChange('longterm')} />
                </ToggleGroup>
              </div>
              <FormField control={form.control} name="content.when" render={({ field }) => (
                <FormItem> <FormControl>
                  <Textarea id="sphere-when" placeholder="Describe when the evaluation is conducted and select the aspects applied." {...field} />
                </FormControl> <FormMessage /> </FormItem> )} />
            </div>
            {/* META HOW */}
            <div className="flex flex-col space-y-1.5">
             <div className="flex flex-wrap items-center space-x-2">
                <Label htmlFor="sphere-metahow" className="sphere-metahow-color font-bold">How is the evaluation validated?</Label>
                <ToggleGroup variant="outline" type="multiple">
                  <TooltipToggleItem value="validity" tooltipContent={aspectDefs.validity} onClick={() => handleToggleChange('validity')} />
                  <TooltipToggleItem value="reliability" tooltipContent={aspectDefs.reliability} onClick={() => handleToggleChange('reliability')} />
                </ToggleGroup>
              </div>
              <FormField control={form.control} name="content.metahow" render={({ field }) => (
                <FormItem> <FormControl>
                  <Textarea id="sphere-metahow" placeholder="Describe how the evaluation is validated and select the aspects applied." {...field} />
                </FormControl> <FormMessage /> </FormItem> )} />
            </div>
          </div>
        </CardContent>
        </ScrollArea>

      {/* <Button variant="outline">Upload Paper</Button> */}
    </form>
    </Form>
    </Card>

  </div>
  )
}
