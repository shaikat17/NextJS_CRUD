import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


export const POST = async () => {
    const {title, description} = await Request.json()
    await  connectMongoDB()
    await Topic.create({title, description})
    return NextResponse.json({message: "Topic Created"}, {status: 201})
};

export const Get = async () => {
    await connectMongoDB()
    const topics = await Topic.find()
    return NextResponse.json({topics})
}

export const DELETE = async (request) => {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await Topic.findOneAndDelete(id)
    return NextResponse.json({message: "Topic Deleted"}, {status: 200})
}