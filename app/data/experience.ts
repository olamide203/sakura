export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  link: string;
  responsibilities: Array<string>;
}
const experiences: Array<Experience> = [
  {
    id: 1,
    role: "Data Science Intern",
    company: "Mahcnester Cancer Research Center",
    duration: "July 2024 - Present",
    link: "https://www.mcrc.manchester.ac.uk/",
    responsibilities: [
      "Conduct advanced statistical analysis using R to establish significant correlations between patient outcomes and clinical reports in breast cancer research.",
      "Implement data imputation techniques using the 'mice package' in R to address missing data, ensuring unbiased analysis and improving data integrity by 15%.",
      "Develop complex data visualizations, including agreement heatmaps, to effectively communicate relationships between patient and clinical outcome measures, enhancing data interpretation for stakeholders.",
      "Perform comprehensive statistical analyses, including balance accuracy scores, intra-class correlations, f1-scores, and Kappa scores, to evaluate result reliability and model performance.",
      "Streamline data preparation processes by utilizing Excel for initial formatting before transitioning to R for in-depth analysis, reducing overall analysis time by 20%. ",
    ],
  },
  {
    id: 2,
    role: "Monitoring and Evaluation Assistant",
    company: "Society for Family Health",
    duration: "January 2022 - November 2023",
    link: "https://sfhnigeria.org/",
    responsibilities: [
      "Coordinated data collection from multiple state offices, managing and auditing Excel files to ensure data quality and adherence to set standards.",
      "Conducted analysis on key indicators to track HIV care services progress for key populations across 5 hotspot areas in Nigeria, contributing to a 10% improvement in service delivery.",
      "Collaborated with cross-functional teams to develop and implement data entry standards, improving data consistency by 25%. Created impactful data visualizations using Excel and Tableau, effectively communicating findings to stakeholders and informing strategic decisions.",
      "Managed administrative functions, including document sorting and filing, enhancing overall team efficiency.",
    ],
  },
];

export default experiences;
