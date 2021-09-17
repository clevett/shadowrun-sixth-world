import { useRecoilValue } from 'recoil'
import { findPriorityKey } from '../PriorityTable/PriorityCell/helpers'
import { WITH_PRIORITIES } from "../../../../../recoil"
import { PRIORITIES } from '../../../../../data'

const SkillBuy = () => {
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)
  const skillPriorityLetter = findPriorityKey(priorities, PRIORITIES.OPTIONS.skills)
  const skillPoints = skillPriorityLetter && PRIORITIES.SKILL_POINTS[skillPriorityLetter]

  return (
    <div>Skill Buy (0 / {skillPoints} )</div>
  )
}

export default SkillBuy