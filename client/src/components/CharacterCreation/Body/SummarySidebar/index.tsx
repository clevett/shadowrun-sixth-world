import { EuiAvatar, EuiDescriptionList } from '@elastic/eui'

import { useRecoilState } from 'recoil';
import { characterRole } from "../../state"

const SummarySidebar = () => {
  const [ role ] = useRecoilState(characterRole)

  //TODO: Make dynamic with runner's info
  const avatar = "https://source.unsplash.com/64x64/?cat"
  const runnerName = "Rocinante"

  const listItems = [
    {
      title: "Rocinante",
      description: 'Ork',
    },
    {
      title: "Role",
      description: role,
    },
    {
      title: "History",
      description: 'Soldier from Argentina',
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