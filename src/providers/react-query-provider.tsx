"use client";

import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

type Props = {
    children : React.ReactNode
}

const client = new QueryClient();

export const ReactQueryProvider = ({children} : Props) =>{
    return(
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}