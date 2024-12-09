"use server";

import { onCurrentUser } from "../user";
import { createAutomation, getAutomation,findAutomation, updateAutomation } from "./queries";


export async function createAutomations(id? : string) {
  const user = await onCurrentUser();

  try {
    const create = await createAutomation(user.id,id);

    if (create) {
      return {
        status: 200,
        data: "Automation created",
      };
    }
    return {
      status: 404,
      data: "Oops! something went wrong while creating",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      data: "Internal Server Error",
    };
  }
}


export async function getAllAutomations(){
  const user = await onCurrentUser();

  try {
    const automations = await getAutomation(user.id);
    if (automations) {
      return {
        status: 200,
        data: automations.automation
      };
    }
    return {
      status: 404,
      data: []
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      data: [],
    };
  }
}


export async function getAutomationInfo( id : string){
  await onCurrentUser();

  try {
    const automation = await findAutomation(id);
    if(automation){
      return {
        status : 200,
        data : automation
      }
    }
    return {
      status: 404,
      data: "No automation found"
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      data: "Intenral server error",
    };
  }
}




export async function updateAutomationName(
  automationId : string,
  data : {
      name? : string,
      active? :boolean,
      automation? : string
  }
){
  await onCurrentUser();
  
  try {
    const update = await updateAutomation(
      automationId,
      data
    )

    if(update){
      return{
        status : 200,
        data : "Automation successfully updated"
      }
    }
    return {
      status : 404,
      data : "oops couldn't update"
    }
  } catch (error) {
    return {
      status: 500,
      data: "Intenral server error",
    };
  }
}