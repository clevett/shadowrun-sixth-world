import { useRecoilValue } from 'recoil';
import { EuiAvatar, EuiDescriptionList } from '@elastic/eui'

import { WITH_CHARACTER } from "../../../../recoil"

const SummarySidebar = () => {
  const character = useRecoilValue(WITH_CHARACTER);

  //TODO: Make dynamic with runner's info
  const avatar = "https://source.unsplash.com/64x64/?cat"
  const runnerName = "Rocinante"

  console.log(character)

  const listItems = [
    {
      title: character.name,
      description: `${character.role} (${character.metatype})`,
    },
    {
      title: "Priority",
      description: `
        A: ${character.priorities.A}
        B: ${character.priorities.B}
        C: ${character.priorities.C}
        D: ${character.priorities.D}
        E: ${character.priorities.E}
      `,
    },
  ]

  return (
    <>
      <EuiAvatar 
        imageUrl={avatar}
        name={runnerName} 
        size="l" 
        type="space"
      />
      <EuiDescriptionList
        compressed
        listItems={listItems}
      />
    </>
  )
}

export default SummarySidebar