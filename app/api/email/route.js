import { ConnectDB } from "../../../lib/config/db"
import EmailModel from '../../../lib/models/EmailModel'
import { NextResponse }  from "next/server";


const LoadDB = async () => {

    await ConnectDB();
}

LoadDB();

export async function POST(request){

    const formData = await request.formData();
    const emailData = {
        email:`${formData.get("email")}`,
    }
        await EmailModel.create(emailData);
        console.log("Email Saved")
        return NextResponse.json({success: true, msg: "Email Added Successfully"});



}