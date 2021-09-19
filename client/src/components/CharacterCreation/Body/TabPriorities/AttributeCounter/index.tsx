import { useEffect } from "react"
import { EuiButtonIcon, EuiText } from '@elastic/eui'
import { useRecoilState } from 'recoil'

import { ATOM } from '../../../../../recoil'

import "./styles.sass"

const AttributeCounter = ({
  atom,
  attribute,
  disableInputs = false,
  metaMax,
  maxed = false,
  metaMin,
}: AttributeSelectProps) => {
  const [ score, setScore ] = useRecoilState<number>(ATOM.characterAttribute(`${atom}`))
  const [ max, setMax ] = useRecoilState<number>(ATOM.characterAttribute(`${attribute.toUpperCase()}_MAX`))

  useEffect(() => {
    if ( metaMax ) {
      setMax(metaMax)
    }
  })

  const onIncrease = () => {
    const increase = score + 1
 
    if ( increase <= max) {
      setScore(increase)
    }
  }

  const onDecrease = () => {
    const decrease = score - 1

    if( decrease >= metaMin ) {
      setScore(decrease)
    }

  }

  const textColorWhenMax = maxed ? "warning" : score === max ? "success" : "default"

  return(
    <div className="attribute-select-grid">
      <EuiText color={textColorWhenMax}>
        {attribute}
      </EuiText>
      <div className="attribute-select-icons">
        <EuiButtonIcon 
          aria-label={`increase ${attribute}`}
          isDisabled={disableInputs || score === max}
          iconType="arrowUp" 
          onClick={onIncrease} 
        /> 
        <EuiText color={textColorWhenMax}>
          {score}
        </EuiText>
        <EuiButtonIcon 
          aria-label={`decrease ${attribute}`}
          isDisabled={score === metaMin}
          iconType="arrowDown" 
          onClick={onDecrease}
        /> 
      </div>
    </div>
  )
}

type AttributeSelectProps = {
  atom: string,
  attribute: AttributeNames,
  disableInputs?: boolean
  maxed: boolean,
  metaMax: number,
  metaMin: number,
}

export default AttributeCounter