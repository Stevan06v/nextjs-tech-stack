import {NextResponse} from "next/server";
import prisma from '../../../../lib/prisma';

export async function GET(request: Request,){
    let test_count =  await prisma.test.count();

    return NextResponse.json({'count': test_count});
}