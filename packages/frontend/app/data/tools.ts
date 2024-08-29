import pythonLogo from "~/assets/python.svg";
import RLogo from "~/assets/R.svg";
import JupyterLogo from "~/assets/jupyter.svg";
import mysqlLogo from "~/assets/mysql.svg";
import excelLogo from "~/assets/excel.svg";
import powerBiLogo from "~/assets/power-bi.svg";

export interface Tool {
  id: number;
  name: string;
  logo: string;
}

const tools: Tool[] = [
  {
    id: 1,
    name: "python",
    logo: pythonLogo,
  },
  {
    id: 2,
    name: "R",
    logo: RLogo,
  },
  {
    id: 3,
    name: "jupyter notebook",
    logo: JupyterLogo,
  },
  {
    id: 4,
    name: "power bi",
    logo: powerBiLogo,
  },
  {
    id: 5,
    name: "excel",
    logo: excelLogo,
  },
  {
    id: 6,
    name: "mysql",
    logo: mysqlLogo,
  },
];

export default tools;
