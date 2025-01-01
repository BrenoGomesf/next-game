import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./helpers/session";

export async function middleware(request: NextRequest) {
  const updatedSession = await updateSession();

  if (updatedSession) {
    const res = NextResponse.next();

    res.cookies.set(updatedSession.name, updatedSession.value, {
      expires: updatedSession.expires,
      httpOnly: updatedSession.httpOnly,
    });

    return res;
  }

  return NextResponse.next();
}