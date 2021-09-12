import { EuiAvatar, EuiDescriptionList } from '@elastic/eui'

import { useRecoilValue } from 'recoil';
import { GET_CHARACTER } from "../../state"

const SummarySidebar = () => {
  const character = useRecoilValue(GET_CHARACTER);

  //TODO: Make dynamic with runner's info
  const avatar = "https://source.unsplash.com/64x64/?cat"
  const runnerName = "Rocinante"

  console.log(character)

  const listItems = [
    {
      title: character.name,
      description: 'Ork',
    },
    {
      title: "Role",
      description: character.role,
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