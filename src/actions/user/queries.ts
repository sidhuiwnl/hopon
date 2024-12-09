"use server"

import { client } from "@/lib/prisma"

export async function findUser(clerkId : string){
    return await client.user.findUnique({
        where : {
            clerkId
        },
        include : {
            subscription : true,
            integration : {
                select : {
                    id : true,
                    token : true,
                    expiresAt : true,
                    name : true
                }
            }
        }
    })
}

export async function createUser( clerkId : string, firstname : string, lastname : string, email :string){
    return await client.user.create({
        data : {
            clerkId,
            firstname,
            lastname,
            email,
            subscription : {
                create : {}
            }
        },
        select : {
            firstname : true,
            lastname : true
        }
        
    })
}