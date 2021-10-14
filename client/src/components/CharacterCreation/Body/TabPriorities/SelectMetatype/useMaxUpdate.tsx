import { useSetRecoilState } from 'recoil'
import { ATOM } from '../../../../../recoil'

const useMaxUpdate = ({ name, max }: { name: string, max: number }) => {
  const setMax = useSetRecoilState<number>(ATOM.characterAttribute(`${name.toUpperCase()}_MAX`))


}

export default useMaxUpdate