"use server";

import { client } from "@/lib/prisma";

export async function createAutomation(clerkId: string, id? :string) {
  return await client.user.update({
    where: {
      clerkId,
    },
    data : {
      automation : {
        create : {
          ...( id && { id })
        }
      }
    }
  });
}

export async function getAutomation(clerkId: string) {
  return await client.user.findUnique({
    where: {
      clerkId,
    },
   select : {
    automation : {
      orderBy : {
        createdAt : "asc",
      },
      include : {
        keyword : true,
        listener :true
      }
    }
   }
  });
}

export async function findAutomation(id : string){
  return await client.automation.findUnique({
    where : {
      id,
    },
    include : {
      keyword : true,
      trigger : true,
      post : true,
      listener :true,
      User : {
        select : {
          subscription : true,
          integration : true,
        }
      }
    }
  })
}



export async function updateAutomation( id : string,
  update : {
    name?  :string,
    active? : boolean,

  }
){
  return await client.automation.update({
    where : {
      id
    },
    data : {
      name : update.name,
      active : update.active

    }
  })
}