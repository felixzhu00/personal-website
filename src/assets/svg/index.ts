// Import all icons
import BashIcon from './bash.svg?react'
import CIcon from './c.svg?react'
import CSSIcon from './css.svg?react'
import ElectronIcon from './electron.svg?react'
import ExpressIcon from './express.svg?react'
import HTMLIcon from './html.svg?react'
import JavaIcon from './java.svg?react'
import JavaScriptIcon from './javascript.svg?react'
import JotaiIcon from './jotai.svg?react'
import JupyterIcon from './jupyter.svg?react'
import MATLABIcon from './matlab.svg?react'
import MatplotlibIcon from './matplotlib.svg?react'
import MIPSIcon from './mips.svg?react'
import MongoDBIcon from './mongodb.svg?react'
import MySQLIcon from './mysql.svg?react'
import NodeIcon from './node.svg?react'
import PandasIcon from './pandas.svg?react'
import PowerShellIcon from './powershell.svg?react'
import PythonIcon from './python.svg?react'
import ReactIcon from './react.svg?react'
import ScikitIcon from './scikit.svg?react'
import SeabornIcon from './seaborn.svg?react'
import TailwindIcon from './tailwind.svg?react'
import TypeScriptIcon from './typescript.svg?react'
import OcamlIcon from './ocaml.svg?react'
import NextjsIcon from './nextjs.svg?react'
import DockerIcon from './docker.svg?react'
import DjangoIcon from './django.svg?react'
import NumpyIcon from './numpy.svg?react'

// Create and export an icon map
export const iconMap: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  java: JavaIcon,
  python: PythonIcon,
  c: CIcon,
  mips: MIPSIcon,
  html: HTMLIcon,
  css: CSSIcon,
  javascript: JavaScriptIcon,
  typescript: TypeScriptIcon,
  react: ReactIcon,
  node: NodeIcon,
  tailwind: TailwindIcon,
  express: ExpressIcon,
  electron: ElectronIcon,
  jotai: JotaiIcon,
  mongodb: MongoDBIcon,
  mysql: MySQLIcon,
  jupyter: JupyterIcon,
  pandas: PandasIcon,
  matplotlib: MatplotlibIcon,
  seaborn: SeabornIcon,
  scikit: ScikitIcon,
  bash: BashIcon,
  powershell: PowerShellIcon,
  matlab: MATLABIcon,
  ocaml: OcamlIcon, //
  nextjs: NextjsIcon,
  docker: DockerIcon,
  django: DjangoIcon,
  numpy: NumpyIcon
}
