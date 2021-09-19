import { EuiText } from '@elastic/eui'
// import { useRecoilValue } from "recoil"

// import { CHARACTER_PRIORITIES } from "../../../../../recoil"
// import { METATYPE,  } from '../../../../../data'

const MetatypeQualities = ({
  metatype
}: MetatypeQualitiesProps) => {
  const getQualityText = (quality: string) => <EuiText key={`metatype-quality-${quality}`} size="s">{quality}</EuiText>

  const qualities = () => {
    if(metatype?.qualities) {
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

export type MetatypeQualitiesProps = {
  metatype?: Metatype
}

export default MetatypeQualities