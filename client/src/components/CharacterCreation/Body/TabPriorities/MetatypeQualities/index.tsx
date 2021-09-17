import { EuiText } from '@elastic/eui'
// import { useRecoilValue } from "recoil"

// import { CHARACTER_PRIORITIES } from "../../../../../recoil"
// import { METATYPE,  } from '../../../../../data'

const MetatypeQualities = ({
  metatypeData
}: MetatypeQualitiesProps) => {
  const getQualityText = (quality: string) => <EuiText size="s">{quality}</EuiText>

  const qualities = () => {
    if(metatypeData?.qualities) {
      const content = metatypeData.qualities.map(quality => getQualityText(quality))
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
  metatypeData?: Metatype
}

export default MetatypeQualities