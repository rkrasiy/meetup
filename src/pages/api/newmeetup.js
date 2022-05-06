import fs from "fs";
import path from "path";

export function buildRegisterPath() {
  return path.join(process.cwd(), "data", "/data.json");
}

export function extractUser(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  return data;
}

export default function handler(req, res) {
  if (req.method === "POST") {
  console.log('POST')
    // const email = req.body.email;

    // const newUser = {
    //   id: getUnicID(),
    //   email: email,
    // };
    

    const filePath = buildRegisterPath();
    const data = extractUser(filePath);

    // if(data.find( user => user.email === newUser.email)){
    //   res.status(409).json({message: "This user already exist!"})
    // }else{
    //   data.push(newUser);
    //   fs.writeFileSync(filePath, JSON.stringify(data));
    //   res.status(201).json({ message: "Success!", logedIn: newUser });
    // } 
  } else {
  console.log('DNNAOSD')
   // const data = extractUser(buildRegisterPath());
   // res.status(200).json({ logedIn: data });
  }
}

// function getUnicID() {
//   return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//     return v.toString(16);
//   });
// }