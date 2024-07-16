import {create} from 'zustand'
import { boardData } from '../data/data'


const useBoard = create((set) => ({
    board: boardData,
    setBoard: (board) => set(({board}))
}))

export default useBoard