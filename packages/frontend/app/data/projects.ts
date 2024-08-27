import covidDashboard from "~/assets/covid.png";
import jobSatisfaction from "~/assets/job-survey.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Array<string>;
  image: string;
  repo?: string;
  link: string;
}
const projects: Array<Project> = [
  {
    id: 1,
    title: "Global Impact of COVID-19 across WHO Regions",
    description:
      "Using Excel, an analysis was carried out to identify the impact of COVID across five WHO regions. The Most impacted and least impacted regions were identified. In addition, the recovery rate across this region was also recognised.",
    technologies: ["Excel"],
    link: "https://1drv.ms/x/s!Ass_OYEcCqxRg2-zRaNQlIKf-6T5?e=ct6tDp",
    image: covidDashboard,
  },
  {
    id: 2,
    title: "Job Satisfaction Survey",
    description:
      "I recently analysed and visualised a dataset from a survey of professionals in the data field. The analysis suggested that the highest number of participants were in data science, which may indicate its growing popularity and demand. On the other hand, the fields with the least number of participants appeared to be database developers and students, potentially reflecting lower representation or interest in these areas. This analysis offers insights into the current landscape of data-related professions and could help guide future educational and career decisions in the data industry. The visualisations created from this data provide a clear and engaging way to understand these trends and are included in my dashboard",
    technologies: ["Power Bi"],

    link: "https://app.powerbi.com/reportEmbed?reportId=b1bf2564-7ee8-4222-9dfa-f71cc97a4bdf&autoAuth=true&ctid=319a61c8-ee1e-4161-8f35-b9553227afd7",
    image: jobSatisfaction,
  },
];

export default projects;
