import BlogModel from "../../../lib/models/BlogModel";
import { ConnectDB } from "../../../lib/config/db"
import { writeFile } from 'fs/promises'
const { NextResponse } = require("next/server")

const LoadDB = async () => {

    await ConnectDB();
}

LoadDB();

export async function GET(request){

    
    return NextResponse.json({msg: "API Working"})
}

export async function POST(request){

    const formData = await request.formData();
    const timeStamp = Date.now();

    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData)
    const path = `./public/${timeStamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = `/${timeStamp}_${image.name}`;

const blogData = {
    title:`${formData.get("title")}`,
    description:`${formData.get("description")}`,
    category:`${formData.get("category")}`,
    author:`${formData.get("author")}`,
    image:`${imgUrl}`,
    authorImg:`${formData.get("authorImg")}`,
}

await BlogModel.create(blogData);
console.log("Blog Saved")


    return NextResponse.json({success: true, msg: "Blog Done"})
}
