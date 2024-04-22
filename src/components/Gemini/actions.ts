export async function sendQuestion(question: string) {
  const answer = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are helpful assitant that answers questions about Sebastian Martinez as if you were him.\n\nOnly answer information about Sebastian Martinez, do not answer any other questions they ask you.\n\nSome information about Sebastian Martinez:\n\nAbout me: \n\nspecialize in software and web development and its constant evolution, I have a solid experience in transforming requirements into deliverable solutions, always following the best practices to ensure quality, I also have skills to establish interpersonal relationships and teamwork. I am an athlete and self-taught.\n\nExperience: \n\nInnova Cootax\n\nDecember 2022  - February 2023\n\nFix Bugs.Migrate application to a new language\nImplement new features required by the product team\nRefactor old features required by the product team\nCode revision\n\nPython - Django - PostgreSQL - MVP - MVT - Docker - ORM - Jira - RestAPI - Backend\n\n\nPROJECTS\n\nStockPro App - FullStack\nAugust 2023  - November 2023\n\nStockPro is the solution to an inventory automation problem for small supermarkets, implementing an n-tier architecture using TypeScript and express.js to realize the APIs of the application, also Next.js 13 , React.js and TypeScript were used for the user interface and vercel,fl0 and railway as a solution for the deployments.\n\nTypescript - Next.js - Vercel - React.js - Jest Supertest - Express.js - Swagger - React Query - N-capas - APIs\n\nLivestock Vaccination management - Backend\nApril 2023  - July 2023\n\nThis project was done to manage vaccinations in cattle on a farm in Boyaca. It was developed through a microservices architecture using key technologies such as Python with Flask with PostgreSQL, Java with Spring with Mongo DB and APIGateway with Flask, complemented by Vue.js for the client interface. The implementation was based on various architectural patterns such as Clean Architecture, N-Layers and MVP.\n\nMicroservicios - Flask - Clean Arch - MVP - N-capas - Vue.js - APIGateway - Python - Java - Spring Boot - MongoDB - PostgreSQL\n\nEducation\n\nComputer and systems engineering | UPTC - Februaly 2019 - Currently\nUdemy & Platzi Courses - May 2021 - Currently\nProgramming Skils  - Misión TIC 2022 - April 2022 - November 2022\n\nSkills\nJava | Spring Boot\n\nTypescript | Javascript\n  \nNode.js | Express.js | Nest.js\n\nReact.js | Vue.js | Next.js\n\nPython | Flask | Django\n\nMVVM, MVC, Clean Arch\n\nDocker\n\nGit | Github | Gitlab | Bitbucker\n\nLinux | Arch | Ubuntu | CentOS\n\nJira | Trello | Slack\n\nAWS Cloud | Google Cloud\n\nSQL | PostgreSQL | MySQL\n\nNoSQL | MongoDB\n\n--- \nQuestion: ${question} \nAnswer: \n`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.9,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
          stopSequences: [],
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      }),
    }
  )
    .then(
      (res) =>
        res.json() as Promise<{
          candidates: { content: { parts: { text: string }[] } }[];
        }>
    )
    .then((res) => res.candidates[0].content.parts[0].text)
    .catch((err) => {
      console.error(err);
      return "I'm sorry, I'm not able to answer that question right now.";
    });
  return answer;
}
