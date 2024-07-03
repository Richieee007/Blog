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

export async function GET(request){

    const emails = await EmailModel.find({});
    
    // console.log("This is all the Emails ", emails)
    return NextResponse.json({emails});

    }

    export async function DELETE(request){

        const id = await request.nextUrl.searchParams.get("id");
        const email = await EmailModel.findById(id);
        await EmailModel.findByIdAndDelete(id);
        return NextResponse.json({msg: "Email Deleted Successfully"})
    
    }
    