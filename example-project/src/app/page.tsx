import prisma from '../../lib/prisma';
import React from 'react';

interface User {
    id: number;
    name: string | null;
}

export default async() => {
    const users: User[] = await prisma.test.findMany();

    return (
        <div>
            {users.map((user)=>{
                return <div>{user.name}</div>
            })}
        </div>
    );
}
