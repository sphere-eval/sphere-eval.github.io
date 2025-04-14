# SPHERE: An Evaluation Card for Human-AI Systems

This is the repository for the website of the paper [SPHERE: An Evaluation Card for Human-AI Systems
 (Ma & Zhao, et al., 2025)](https://arxiv.org/abs/2504.07971). 

---

## How to Add Your Paper

***If you have paper(s) that evaluate human-AI system(s), we would love to feature them on our website!***

* You can use our issue template to `Add a new paper` [here](https://github.com/sphere-eval/sphere-eval.github.io/issues/new/choose).
* If you have multiple papaers to add, you can create a pull request (PR) to update `./data/annotated_papers.csv` in this repository.
* Otherwise, you can also use the interface we provide on the website by Export > Add Paper to Website.


We will try to monitor the issue and PR regularly, but in case there is considerable delay, please feel free to send an email to us.

For those who have direct edit access to the repository, you can follow the steps below to update the website:
1. Update `./data/annotated_papers.csv` with the new paper information.
2. Run `./data/convert_json.py` to convert the CSV file to JSON.
3. Test the website locally (`npm run dev`) to make sure the new paper is displayed correctly.

#### Contact

* [Qianou Ma](https://qianouma.com/) \<qianouma@cmu.edu\>
* [Dora Zhao](https://dorazhao99.github.io/) \<dorothyz@stanford.edu\>

---

## How to Contribute

***We welcome your feedback and contribution!***

#### Running the website locally

1. Clone the repository

```bash
git clone 
cd 
```

2. Install required libraries

```bash
npm ci
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Development notes

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

---

## Acknowledgements

This website/repo is adapted from [https://writing-assistant.github.io/](https://writing-assistant.github.io/).