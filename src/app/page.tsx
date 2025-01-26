"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import React, { RefObject, useEffect, useRef, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { GitHubLogoIcon, EnvelopeClosedIcon, RocketIcon, ReaderIcon, ClipboardIcon } from '@radix-ui/react-icons'
import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "./components/page-header";

import TaskPage from "./paper";
import next from "next";

const TITLE = "SPHERE: An Evaluation Card for Human-AI Systems";

const FORM_URL = ""; //"https://forms.gle/iyk5DiECGDdc9vSQA";
const PAPER_URL = ""; // "http://arxiv.org/abs/2403.14117";
const GITHUB_URL = ""; // "https://github.com/writing-assistant/writing-assistant.github.io";
const BASE_PATH = "";

interface Author {
  name: string;
  role: string;
  affiliation: string;
  email?: string;
  website?: string;
  avatar?: string;
}

const AUTHORS:Author[] = [
  {"name": "Qianou Ma", "role": "Project leads", "affiliation": "Carnegie Mellon University"},
  {"name": "Dora Zhao", "role": "Project leads", "affiliation": "Stanford University"},
  {"name": "Xinran Zhao", "role": "Team members", "affiliation": "Carnegie Mellon University"},
  {"name": "Chenglei Si", "role": "Team members", "affiliation": "Stanford University"},
  {"name": "Chenyang Yang", "role": "Team members", "affiliation": "Carnegie Mellon University"},
  {"name": "Ryan Louie", "role": "Team members", "affiliation": "Stanford University"},
  {"name": "Ehud Reiter", "role": "Advisors", "affiliation": "University of Aberdeen"},
  {"name": "Diyi Yang", "role": "Advisors", "affiliation": "Stanford University"},
  {"name": "Tongshuang Wu", "role": "Advisors", "affiliation": "Carnegie Mellon University"},
];

const AuthorHoverCard = (author: Author) => (
  <HoverCard openDelay={100} closeDelay={100}>
    <HoverCardTrigger className="pr-4" style={{ marginLeft: 0 }}>
      <Button className="px-0" variant="link">
        {author.name}
      </Button>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="flex justify-between">
        <Avatar className="mr-4">
          <AvatarImage src={author.avatar} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">{author.name}</h4>
          <p className="text-sm">{author.affiliation}</p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);


const AuthorHoverCard2 = (author: (typeof AUTHORS)[0]) => (
  <HoverCard openDelay={100} closeDelay={100}>
    <HoverCardTrigger className="">
      <Avatar className="mr-0.5 my-0.5">
          <AvatarImage src={author.avatar} />
          <AvatarFallback>{`${author.name.split(' ')[0][0]}${author.name.split(' ').pop()?.[0]}`}</AvatarFallback>
      </Avatar>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="flex justify-between">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">{author.name}</h4>
          <p className="text-sm">{author.affiliation}</p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);


const Headline = () => (
  <PageHeader className="page-header pb-12 pt-4">
    <PageHeaderHeading className="tracking-tight">{TITLE} </PageHeaderHeading>
    <Separator className="my-2" />
    <section className="flex w-full items-center space-x-4 pb-1 pt-4 md:pb-1">
      <Link
        href={PAPER_URL}
        target="_blank"
        className={cn(buttonVariants({ variant: "outline" }), "rounded-[6px]")}
      >
        <ReaderIcon className="ml-0 h-4 w-4" />
        <Separator className="mx-2 h-4" orientation="vertical" />{" "}
        <span>Paper</span>
      </Link>
      <Link
        href={GITHUB_URL}
        target="_blank"
        className={cn(buttonVariants({ variant: "outline" }), "rounded-[6px]")}
      >
        <GitHubLogoIcon className="ml-0 h-4 w-4" />
        <Separator className="mx-2 h-4" orientation="vertical" />{" "}
        <span>Code</span>
      </Link>
      <Link
        href="#annotated-papers"
        className={cn(buttonVariants({ variant: "outline" }), "rounded-[6px]")}
      >
        <RocketIcon className="ml-0 h-4 w-4" />
        <Separator className="mx-2 h-4" orientation="vertical" />{" "}
        <span>Interactive Demo</span>
      </Link>
    </section>

    <div className="pt-4 font-sans">
      <p className="pb-4">Welcome to our SPHERE evaluation card for human-AI systems! 
      The <span className="font-bold">SPHERE</span> evaluation card consists of five dimensions (five leading questions): 
      <span className="sphere-what-color font-bold"> What</span> is being evaluated? 
      <span className="sphere-how-color font-bold"> How</span> is the evaluation conducted?
      <span className="sphere-who-color font-bold"> Who</span> is participating in the evaluation?
      <span className="sphere-when-color font-bold"> When</span> is evaluation conducted (duration)? and
      <span className="sphere-metahow-color font-bold"> (Meta) How</span> is evaluation validated?
      
      Within each dimension, we define category (i.e., fundamental components of an dimension) and aspect (i.e., potential options for each category). 
      Please refer to <a href={PAPER_URL} target="_blank" className="dsiiwa-link">our paper</a> for the detailed definitions.
      </p>
      
      <p className="pb-4">To create this evaluation card, we collaborated with researchers from a variety of disciplines, including Human-Computer Interaction (HCI), Natural Language Processing (NLP), Information Systems, and Education, and annotated 39 papers from HCI and NLP fields to understand the current landscape of human-LLM systems. 
      We hope SPHERE offers researchers and developers a practical tool a design and document human-AI system evaluation. As a design tool, SPHERE helps structure conversations around key areas of evaluation to consider. As a documentation tool, SPHERE contributes to the transparency and reproducibility of evaluation methods.</p>

      <p className="pb-4">Here we also provide an interface to help you <span className="font-bold">create your own evaluation card using SPHERE</span>. We invite the community to contribute by adding new papers, annotations, and discussions to track future developments in this space.</p>
    </div>
    
    {/* TODO: add an interface to create an eval card using llm */}

    <div className="dsiiwa-figure pt-8">
      <Image
          src="/images/eval-card.png"
          width={400}
          height={500}
          alt="The figure shows the integrated evaluation card for writing assistants. It is comprised of five boxes, Ecosystem, Task, User, Interaction, and Technology. \n Ecosystem is the biggest box that surrounds the rest, and has the following items: Digital infrastructure (e.g., usability consistency, technical interoperability), Social factors (e.g., designing with stakeholders, desigining for social writing), Locale (e.g., local writing, remote writing), Access model (e.g., free and/or open-source software, commercial software), Norms and Rules (e.g., laws, conventions), and Change over time (e.g., authors, readers, writing, information environment). \n The top part inside Ecosystem box is occupied by Task box, which overlaps with User, Interaction, and Technology boxes. Task box has the following items: Writing stage (e.g., planning, drafting, revision), Writing context (e.g., academic, journalistic, technical), Purpose (e.g., expository, narrative, descriptive), Specificity (e.g., general direction, detailed requirements), and Audience (e.g., specified, implied).\n Interaction box is positioned in the middle of the User and Technology boxes, with arrows connecting to and from these boxes. Interaction has the following points: User - Steering the system (e.g., explicit, implicit, no control), User - Integrating system output (e.g., selection,  inspiration), UI - Interface paradigm (e.g., text editor, chatbot),  UI - Layout (e.g., writing area, separated, input UI), UI - Visual differentiation (e.g., formatting, location), UI - Interaction metaphor (e.g., agent, tool, hybrid), UI - Initiation (e.g., user-initiated, system-initiated), Technology - Output type (e.g., analysis, generation), Technology - Curation type (e.g., deterministic, curated options), and Technology - User Data access (e.g., input text, additional data). \n User box is on the left of the Interaction box, with the following points: Demographic profile (e.g., age, language and culture), User capabilities (e.g., writing expertise, efficiency), Relationship to system (e.g., agency, ownership, trust), and System output preferences (e.g., coherence, diversity). \n Technology box is on the left of Interaction box and below the User box, with the following points: Data - Source (e.g., experts, users), Data - Size (e.g., small, medium, large), Model - Type (e.g., rule-based, foundation models), Model - External resource access (e.g., tool, data), Learning - Problem (e.g., classification, generation), Learning - Algorithm (e.g., supervised, unsupervised), Learning - Training and adaptation (e.g., fine-tuning, prompting), Evaluation - Evaluator (e.g., automatic, machine-learned), Evaluation - Focus (e.g., linguistic quality, controllability), and Scalability (e.g., cost, latency)."
          // className="block"
      />
    </div>

    <div className="pt-8 font-sans">
      <ul className="list-disc pl-4">
        <li><span className="font-bold">Want to add your paper to the list?</span> Please either (i) fill out <a href={FORM_URL} target="_blank" className="form-link">this Google form <span style={{ display: 'inline-block', transform: "translateY(0.5px)" }}><ClipboardIcon /></span></a> or (ii) create a pull request in <a href={GITHUB_URL} target="_blank" className="dsiiwa-link">our GitHub repository <span style={{ display: 'inline-block', transform: "translateY(0.5px)" }}><GitHubLogoIcon /></span></a></li>
        <li><span className="font-bold">Have questions or found incorrect annotation?</span> Please email Qianou Ma <a href="mailto:qianouma@cmu.edu" className="dsiiwa-link"> <span style={{ display: 'inline-block', transform: "translateY(1px)" }}><EnvelopeClosedIcon/></span></a> or Dora Zhao <a href="mailto:dorothyz@stanford.edu" className="dsiiwa-link"> <span style={{ display: 'inline-block', transform: "translateY(1px)" }}><EnvelopeClosedIcon/></span></a></li>
        <li><span className="font-bold">Interested in contributing to the project?</span> Please visit <a href={GITHUB_URL} target="_blank" className="dsiiwa-link">our GitHub repository <span style={{ display: 'inline-block', transform: "translateY(0.5px)" }}><GitHubLogoIcon /></span></a> and start contributing!</li>
      </ul>
    </div>

    {/* <div className="flex flex-wrap justify-start items-start align-start space-x-0">
      {AUTHORS.map((author, index) => (
        <React.Fragment key={index}>{AuthorHoverCard2(author)}</React.Fragment>
      ))}
    </div> */}
  </PageHeader>
);

export default function Home() {
  return (
    <div className="container min-h-screen relative px-16 pt-8 pb-16">
      <Headline />
      <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow" id="annotated-papers">
        <TaskPage />
      </div>

      <div className="pt-16">
        <p className="pb-4">
          <span className="font-bold">Authors</span>: 
          Qianou Ma* <a href="mailto:qianouma@cmu.edu" className="dsiiwa-link"> <span style={{ display: 'inline-block', transform: "translateY(1px)" }}><EnvelopeClosedIcon/></span></a>, 
          Dora Zhao* <a href="mailto:dorothyz@stanford.edu" className="dsiiwa-link"> <span style={{ display: 'inline-block', transform: "translateY(1px)" }}><EnvelopeClosedIcon/></span></a>, 
          Xinran Zhao, Chenglei Si, Chenyang Yang, Ryan Louie, Ehud Reiter, Diyi Yang+, Tongshuang Wu+ (*Equal contribution, +Equal contribution)
        </p>
        <p className="pb-4">
          <span className="font-bold">Acknowledgement</span>: This artifact was adapted from the <a href="https://writing-assistant.github.io/" className="dsiiwa-link">writing assistant evaluation card website</a> designed by Shannon Zejiang Shen and Mina Lee.
        </p>
      </div>
    </div>
  );
}
