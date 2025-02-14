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

interface CardTemplateProps {
  sysname: string;
  tags: {
    system: boolean;
    model: boolean;
    effectiveness: boolean;
    efficiency: boolean;
    satisfaction: boolean;
    intrinsic: boolean;
    extrinsic: boolean;
    quantitative: boolean;
    qualitative: boolean;
    static: boolean;
    generative: boolean;
    expert: boolean;
    user: boolean;
    immediate: boolean;
    shortterm: boolean;
    longterm: boolean;
    validitiy: boolean;
    reliability: boolean;
  };
  content: {
    what: string;
    how: string;
    who: string;
    when: string;
    metahow: string;
  };
}

const AngleKindling = {
    sysname: "AngleKindling",
    tags: {
        system: true,
        model: false,
        effectiveness: true,
        efficiency: true,
        satisfaction: true,
        intrinsic: false,
        extrinsic: true,
        quantitative: true,
        qualitative: true,
        static: false,
        generative: false,
        expert: true,
        user: true,
        immediate: false,
        shortterm: true,
        longterm: false,
        validitiy: true,
        reliability: false
    },
    content: {
        what: "AngleKindling evaluated their system component on various goals: effectiveness (how many pursuable angles were created), efficiency (mental demand), and user satisfaction (how much they liked different features and overall helpfulness) were evaluated.",
        how: "In the within-subjects user study (extrinsic), participants use both AngleKindling and INJECT to brainstorm angles for a press release. They participated in a semi-structured interview (qualitative). Participants rate the systems' helpfulness, pursuable angles, and mental demand on a 7-point Likert scale in questionnaire (quantitative). Participants also rated how helpful individual features were on both systems. Paired-sample Wilcoxon tests with Bonferroni correction between the Likert scale ratings for AngleKindling versus INJECT.",
        who: "Recruited 12 professional journalists (domain experts & intended users) who worked in any medium (e.g., digital publications, newspapers, radio, TV) and were English speakers based in the US. Participants must have written press releases in the past. No automated evaluators.",
        when: "Short-term evaluation (60 minutes user study, $30 compensation). Participants were shown a video demonstration in each system and then asked to brainstorm a story idea.",
        metahow: "The tool and press release order were counterbalanced to prevent a learning effect (validity). There's no reliability measures."
    }
    };

const CardTemplate = ({ sysname, tags, content }: CardTemplateProps) => {
  return (
    <Card className="w-[530px] h-[480px]">
      <CardHeader>
        <div className="flex items-center justify-start space-x-1">
          <CardTitle>SPHERE Eval Card: {sysname}</CardTitle>
          <a href="https://dl.acm.org/doi/10.1145/3544548.3580907" className='dsiiwa-link'>(paper)</a>
        </div>
      </CardHeader>
      
      <ScrollArea className="h-[380px] w-[510px] rounded-md">
      <CardContent>
        <div className="grid w-full items-center gap-4">
          {/* WHAT */}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center space-x-1">
              <Label htmlFor="sphere-what" className="sphere-what-color font-bold">What is being evaluated?</Label>
                {tags.system && <Badge variant="outline" className='sphere-what-color font-light'>system</Badge>}
                {tags.model && <Badge variant="outline" className='sphere-what-color font-light'>model</Badge>}
                {tags.effectiveness && <Badge variant="outline" className='sphere-what-color font-light'>effective</Badge>}
                {tags.efficiency && <Badge variant="outline" className='sphere-what-color font-light'>efficient</Badge>}
                {tags.satisfaction && <Badge variant="outline" className='sphere-what-color font-light'>satisfy</Badge>}
            </div>
            <p id="sphere-what" className="pt-4">{content.what} </p>
          </div>
          {/* HOW */}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center space-x-1">
              <Label htmlFor="sphere-how" className="sphere-how-color font-bold">How is the evaluation conducted?</Label>
                {tags.intrinsic && <Badge variant="outline" className='sphere-how-color font-light'>intrinsic</Badge>}
                {tags.extrinsic && <Badge variant="outline" className='sphere-how-color font-light'>extrinsic</Badge>}
                {tags.quantitative && <Badge variant="outline" className='sphere-how-color font-light'>quant</Badge>}
                {tags.qualitative && <Badge variant="outline" className='sphere-how-color font-light'>qual</Badge>}
            </div>
            <p id="sphere-how" className="pt-4">{content.how}</p>
          </div>
        </div>
      </CardContent>
      </ScrollArea>
    </Card>
  );
};

CardTemplate.displayName = 'CardTemplate';
export {CardTemplate, AngleKindling};