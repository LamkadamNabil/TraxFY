import { redirect } from "next/dist/server/api-utils"
import { validateToken } from "../../lib/auth"
import prisma from "../../lib/prisma"
import GradientLayout from "../components/gradientLayout"
import SongTable from "../components/songsTable"
const getBG =id =>{
    const color =[
        'red',
        'green',
        'blue',
        'orange',
        'purple',
        'gray',
        'teal',
        'yellow',
      ]
    
    return color[id -1] || color[Math.floor(Math.random()*color.length)]
}
const Playlist=({playlist})=> {
    const  color =getBG(playlist.id) ;
  return (
  <GradientLayout 
    color={color}
    roundImage={false}
    title={playlist.name}
    subtitle="playlist"
    description={`${playlist.songs.length} songs`}
    image={`https://picsum.photos/400?random=${playlist.id}`}
  >
<SongTable songs={playlist.songs} />
  </GradientLayout>
    )
}
export const getServerSideProps =async({query ,req })=>{
    let user ;
  try {
   user=validateToken(req.cookies.NABIL_SPOTIFY_ACCESS_TOKEN)  ;
  }catch(e) {
      return { 
        redirect :{
            permanent :false ,
            destination :'/signin'
        }  
  }
}
  const [playlist ] =await prisma.playlist.findMany({
      where :{
          id :+query.id ,
          userId :user.id ,
      },
      include :{
          songs :{
              include :{
                  artist :{
                      select :{
                          name :true ,
                          id :true ,
                      }
                  }
              }
          }
      }
  })
  return {
      props :{playlist},
  }

}
export default Playlist ;