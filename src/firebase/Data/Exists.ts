import { getAllFirebase } from "./GetData"


export const isExist =  async (id: string) =>{
  const data = await getAllFirebase()
  data.forEach(function(value) {
    if(value.id === id)
    {
       return true
    }
  })
  return false
}