import { generateReport } from "./api"

export const  getData =  async(id)=>{
const res =  await generateReport(id); 
console.log(res);
return res.data.data; 
}