import { useRecoilValue } from 'recoil';
import { EuiAvatar, EuiDescriptionList } from '@elastic/eui'

import { GET_CHARACTER } from "../../../../recoil"

const SummarySidebar = () => {
  const character = useRecoilValue(GET_CHARACTER);

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
      title: "Qualities",
      description: 'Ea deserunt magna amet nostrud sunt esse magna eu.',
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
        listItems={listItems}
      />
    </>
  )
}

export default SummarySidebar