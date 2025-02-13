# Labeling Instruction and Taxonomy

Reminder of our inclusion criteria:
1. Introduce a new human-AI system that have features harnessing AI capabilities that are directly exposed to the human end user
2. Use an LLM as at least one of the AI components in their system

Examples of papers that do not meet our inclusion criteria:
1. [INTERVENOR: Prompting the Coding Ability of Large Language Models with the Interactive Chain of Repair](https://aclanthology.org/2024.findings-acl.124): This paper does not make any explicit mention of the human end user although theu introduce a coding assistant
2. [Empowering Calibrated (Dis-)Trust in Conversational Agents: A User Study on the Persuasive Power of Limitation Disclaimers vs. Authoritative Style](https://doi.org/10.1145/3613904.3642122): This paper presents a study rather than a novel system

## What is being evaluated? 

### Component types 
1. `what_model`: The evaluation focuses on only the model capabilities, including the model's performance pre-deployment in traditional benchmarking settings and performance in-situ as users continue to interact with the model. Mark 1 if the authors evaluate the model and 0 if the authors do not evaluate the model.
   - For example: The authors benchmark the performance of a fine-tuned model used in their system
2. `what_system`: The evaluation covers the system as a whole to understand how these design choices may impact users' experiences, including different layers of the system, such as interfaces or interactions. Mark 1 if the authors evaluate the system and 0 if not.
 

### Design goals
For each design goal, mark 1 if the authors include evaluation that covers the concept and 0 otherwise. 
1. `what_effectiveness`: Evaluating the accuracy, completeness and lack of negative consequences with which users achieved specified goals. 
   - For example: Are users able to successfully complete the task the system is designed for? What is the performance of the model? 
2. `what_efficiency`: Evaluating resources (such as time or effort) needed by users to achieve their goals. 
   - For example: How long did it take for a user to complete the task? What was the cognitive burden or mental load required to complete the task?
3. `what_satisfaction`: Evaluating positive attitudes, emotions and/or comfort resulting from use of a system, product or service. 
   - For example: What was the user’s satisfaction with the overall system or parts of the system? How much did the user trust the system? 


## How is the evaluation being conducted? 
### Scope
1. `how_intrinsic`: assessing the system or the internal model components on specific tasks that they are designed to perform, by evaluating how well they achieve these tasks according to some predefined criteria or benchmarks. Mark 1 if they include intrinsic evaluation and 0 if not. 
    - For example, in a writing assistant system, intrinsic evaluation might involve assessing the system's accuracy on grammatical correctness with automatic metrics or how users might rate the functionality of different system features.
2. `how_extrinsic`: measuring the effectiveness of the system in the context of its application in real-world scenarios, when interacting with users. Mark 1 if they include extrinsic evaluation and 0 if not. 
   - For example, in a writing assistant system, extrinsic evaluation might involve recruiting users to co-write with the system and seeing how this impacts their writing style, productivity, and satisfaction.

### Method
1. `how_quantitative`: measuring and analyzing numerical data to assess system performance and impact. Examples include measuring Likert scale ratings or running benchmark evaluations on the model. Mark 1 if the authors included any quantitative methods and 0 if not. 
2. `how_qualitative`: analyzing non-numerical data to gain deeper insights into user experiences, perceptions, and the contextual factors influencing system performance. Examples include conducting semi-structured interviews with users. Mark 1 if the authors included any qualitative methods and 0 if not.
   - For example, in NarrativePlay, the authors include some brief analysis of responses. However, we do *not* count listing examples as qualitative analysis. 


## Who is participating in the evaluation process? 
### Automated Evaluators
Use these tags *only* when evaluation not involving human participants is used. 
1. `who_static`: Mark 1 if any static evaluation not directly performed by a human or LLM is included and 0 if not. For example, benchmarking a model's capability is an example of static evaluation.
2. `who_generative`: Mark 1 if the authors use a language model in a generative capacity and 0 if not. for evaluation. For example, simulating participants with LLMs, using LLM to annotate and rate text, or using LLM-as-a-judge. Using a technique like BERTScore is *not* generative since it is embedding-based. 

### Human Evaluators
Use these tags *only* when human evaluation is used. 
1. `who_expert`: if the human evaluator is a domain expert or has equivalent expertise in the area that the system is designed for. Mark 1 if expert evaluators are included and 0 otherwise. 
    - For example, if the system is a tutoring system, a teacher would be considered an expert.
    - For example, in AngleKindling which helps journalists come up with framings for papers, the evaluation is conducted with NYC journalists, who are domain experts in this field. 

2. `who_user`: if the evaluator is a direct user or target audience of the system. Mark 1 if the intended user is included as a human evaluator and 0 otherwise. 
   - For example, for a student-facing tutoring system, student evaluators will be the design target, but a teacher will not. We would mark 0 in this case. 
   - For example, in AngleKindling, the journalists are also the intended user for the system, so we would mark 1.
   - If you have a general-purpose system, any user (including crowdworkers, PhD students) would be user


## When is evaluation conducted? 
The time-scale over which the evaluation occurs. 
1. `when_instant`: evaluating real-time or immediate interactions. Mark 1 if any instant evaluation is conducted and 0 otherwise. 
   - For example, instant evaluation includes looking at telemetry data and automatic benchmarking
   - For example, human labeling for instant evaluation includes example of annotator labeling if a dog is an image

2. `when_shortterm`: evaluation is deployed for a short duration of time to measure short-term benefits of using the system. Mark 1 if any shortterm evaluation is conducted and 0 otherwise. 
   - For example, a one-hour user study where participants interact with the system in the lab or an online experiment with crowdworkers who test the system for 15 minutes
   - For example, if the evaluation uses LLM agents and it explicitly mentions that the evaluation takes >= 1 minute, then it will be considered short-term. Note: in this case, please add a comment with the quote from the paper in the document
  
3. `when_longterm`: evaluation is conducted over a longer duration of time. This is typically done to understand long-term behavioral changes, practical feasibility, etc. Mark 1 if any longterm evaluation is conducted and 0 otherwise. 
   - For example, a one week in-the-wild deployment study of the system or a longitudinal study


## How is evaluation validated? 
The methods for ensuring the reliability and validity of the evaluation methods. Mark 1 only if the authors *explicitly* mention any techniques for reliability and validity. Also, include as a comment in the Google Sheet, what exactly the authors do to ensure reliability or validity/  

1. `reliability`: Mark 1 if the authors include techniques or measures to ensure that the evaluation judgements are consistent
   - For example, looking at internal consistency (e.g., inter-rater reliability, Cronbach alpha, split-half reliability), consistency over time (test-retest reliability), and reproducibility of results. If the results include statistical tests, do they make mention of statistical power? 

2. `validity`: Mark 1 if the authors include techniques or measures to ensure that the evaluation method measure the correct constructs. 
   - For example, methods include trying to remove human biases using experiment designs, using statistical methods like factor analysis, mentioning ecological validity in their experiment setup, etc.
   - Please add a comment in the document with the quote from the paper if you mark validity as 1
