import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { site, api, mobile, monitor, speed, search } from '@icon/regular.icon'


const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    yearsOfPractice: '7+ Years',
    name: 'HTML'
  },
  {
    icon: api,
    yearsOfPractice: '7+ Years',
    name: 'CSS'
  },
  {
    icon: monitor,
    yearsOfPractice: '4+ Years',
    name: 'Javascript'
  },
  {
    icon: mobile,
    yearsOfPractice: '4+ Years',
    name: 'Angular'
  },
  // {
  //   icon: monitor,
  //   yearsOfPractice: '4+ Years',
  //   name: 'Javascript'
  // },
  {
    icon: speed,
    yearsOfPractice: '2+ Years',
    name: 'AWS'
  },
  {
    icon: search,
    yearsOfPractice: '4+ Years',
    name: 'Bitbucket'
  },
]

export default expertiseAreaData
