import { EuiText } from '@elastic/eui'
import { useRecoilValue } from "recoil"

import { CHARACTER_PRIORITIES } from "../../../../../recoil"


const MetatypeQualities = () => {
  const metatype = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_METATYPE)
  const getQualityText = (quality: string) => <EuiText key={`metatype-quality-${quality}`} size="s">{quality}</EuiText>

  const qualities = () => {
    if(metatype.qualities) {
      const content = metatype.qualities.map(quality => getQualityText(quality))
      return (
        <>
          <EuiText size="m">Qualities</EuiText>
          {content}
        </>
      )
    }
  }

  return (
    <>
      {qualities()}
    </>
  )
}

export default MetatypeQualities