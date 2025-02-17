import { z } from "zod"

export interface CardTemplateProps {
    sysname: string;
    paperurl?: string;
    aspects: {
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
      validity: boolean;
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
    paperurl: "https://dl.acm.org/doi/10.1145/3544548.3580907",
    aspects: {
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
        validity: true,
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


const FormSchema = z.object({
    sysname: z.string()
      .min(1, { message: "System name must be at least 1 characters." })
      .max(30, { message: "System name must not be longer than 30 characters."}),
    aspects: z.object({
      system: z.boolean(),
      model: z.boolean(),
      effectiveness: z.boolean(),
      efficiency: z.boolean(),
      satisfaction: z.boolean(),
      intrinsic: z.boolean(),
      extrinsic: z.boolean(),
      quantitative: z.boolean(),
      qualitative: z.boolean(),
      static: z.boolean(),
      generative: z.boolean(),
      expert: z.boolean(),
      user: z.boolean(),
      immediate: z.boolean(),
      shortterm: z.boolean(),
      longterm: z.boolean(),
      validity: z.boolean(),
      reliability: z.boolean(),
    }),
    content: z.object({
      what: z.string(), // .min(1, { message: "This field is required." }),
      how: z.string(),
      who: z.string(),
      when: z.string(),
      metahow: z.string(),
    }),
  })
   
  const defaultAspects = {
    system: false,
    model: false,
    effectiveness: false,
    efficiency: false,
    satisfaction: false,
    intrinsic: false,
    extrinsic: false,
    quantitative: false,
    qualitative: false,
    static: false,
    generative: false,
    expert: false,
    user: false,
    immediate: false,
    shortterm: false,
    longterm: false,
    validity: false,
    reliability: false,
  };

  const defaultContent = {
    what: 'N/A', how: 'N/A', who: 'N/A', when: 'N/A', metahow: 'N/A'
  };

  const aspectDefs = {
    system: "The evaluation covers the system as a whole to understand how these design choices may impact user experiences, including different layers of the system, such as interfaces or interactions.",
      model: "The evaluation on only the model capabilities, including the model's performance pre-deployment in traditional benchmarking settings and performance in-situ as users continue to interact with the model.",
      effectiveness: "Evaluating the accuracy, completeness and lack of negative consequences with which users achieved specified goals.",
      efficiency: "Evaluating resources (such as time or effort) needed by users to achieve their goals.",
      satisfaction: "Evaluating positive attitudes, emotions and/or comfort resulting from use of a system, product or service.",
      intrinsic: "assessing the system or the internal model components on specific tasks that they are designed to perform, by evaluating how well they achieve these tasks according to some predefined criteria or benchmarks.",
      extrinsic: "measuring the effectiveness of the system in the context of its application in real-world scenarios, when interacting with users.",
      quantitative: "measuring and analyzing numerical data to assess system performance and impact.",
      qualitative: "analyzing non-numerical data to gain deeper insights into user experiences, perceptions, and the contextual factors influencing system performance.",
      static: "automated static evaluation not directly performed by a human or LLM, e.g., benchmarking, BERTScore (since it's embedding based).",
      generative: "use a language model in a generative capacity and 0 if not. for evaluation. For example, simulating participants with LLMs, using LLM to annotate and rate text, or using LLM-as-a-judge.",
      expert: "human evaluator is a domain expert or has equivalent expertise in the area that the system is designed for.",
      user: "evaluator is a direct user or target audience of the system.",
      immediate: "evaluating real-time or immediate interactions in time scale of seconds, e.g., benchmarking, telemetry.",
      shortterm: "evaluation is deployed for a short duration of time (minutes or hours) to measure short-term benefits.",
      longterm: "evaluation is conducted for a longer duration of time (days, weeks, months).",
      validity : "used techniques or measures to ensure that the evaluation method measure the correct constructs.",
      reliability: "used techniques or measures to ensure that the evaluation judgements are consistent."
  };

export { AngleKindling, FormSchema, defaultAspects, defaultContent, aspectDefs };
  
