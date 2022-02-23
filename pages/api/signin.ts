import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import prisma from '../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req:NextApiRequest ,res:NextApiResponse) => {
   // const salt =bcrypt.genSaltSync()
    const {email ,password} =req.body

       const user =await prisma.user.findUnique({
         where :{
             email ,

         },
        })
       if (user && bcrypt.compareSync(password,user.password)){
        const token =jwt.sign({
            id :user.id,
            email:user.email,
            time :Date.now()
        },
        'hello',
        {expiresIn :'48h'}
        ) 
       
    res.setHeader(
        'Set-Cookie',
        cookie.serialize('NABIL_SPOTIFY_ACCESS_TOKEN',token,{
            httpOnly :true ,
            maxAge:8*60*60 ,
            path:'/',
            sameSite:'lax',
            secure:process.env.NODE_ENV==='production'
        })
    )


    res.json(user) 
   }else{
       res.status(401).json({
           error :'Email or Password is wrong'
           
       })
   }
}