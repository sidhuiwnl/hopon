"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/fetch";
import { updateIntegration } from "../integrations/queries";

export async function onCurrentUser() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  return user;
}

export async function onBoardUser() {
  const user = await onCurrentUser();

  try {
    const found = await findUser(user.id);
    if (found) {
      if (found?.integration.length > 0) {
        const today = new Date();
        const time_left =
          found?.integration[0].expiresAt?.getTime()! - today.getTime();
        const days = Math.round(time_left / (1000 * 3600 * 24));

        if (days < 5) {
          console.log("refresh");

          const refresh_token = await refreshToken(
            found?.integration[0].token!
          );

          const today = new Date();
          const new_expiry_date = new Date(today.setDate(today.getDate() + 60))

          const update_token = await updateIntegration(refresh_token.access_token,new_expiry_date,found.integration[0].id);

          if(!update_token){
            console.error("Update token failed")
          }
        }
      }
      return {
        status : 200,
        data : {
            firstname : found.firstname,
            lastname : found.lastname
        }
      }
    }
    const  created = await createUser(
        user.id,
        user.firstName!,
        user.lastName!,
        user.emailAddresses[0].emailAddress
    )
    return{
        status : 201,
        data : created
    }

  } catch (error) {
    console.error(error);
    return {
        status : 500
    }
  }
}


export async function onUserInfo(){
  const user = await onCurrentUser();

  try {
    const profile = await findUser(user.id);

    if(profile){
      return{
        status : 200,
        data : profile
      }
    }
    return { status : 404 }
  } catch (error) {
    return  { status : 500 }
  }
}