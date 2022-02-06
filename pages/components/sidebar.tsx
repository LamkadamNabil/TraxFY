import NextLink from 'next/link'
import NextImage from 'next/image'
import {
    Box ,
    List ,
    ListItem,
    ListIcon ,
    Divider ,
    Center,
    LinkBox ,
    LinkOverlay
} from '@chakra-ui/layout'
import {
    MdHome ,
    MdSearch ,
    MdLibraryMusic ,
    MdPlaylistAdd ,
    MdFavorite
} from 'react-icons/md'
import { usePlaylist } from '../../lib/hooks'
const navMenu =[
    {
    name:'Home',
    route:'/',
    icon:MdHome
   },
   {
    name:'Search',
    route:'/search',
    icon:MdSearch
   },
   {
    name:'Your Library',
    route:'/library',
    icon:MdLibraryMusic
   },
]
const musicMenu =[
  {
  name:'Create PlayList',
  route:'/',
  icon:MdPlaylistAdd
 },
 {
  name:'Favorites',
  route:'/favorites',
  icon:MdFavorite
 },
]
const playlists=new Array(50).fill(1).map((_,i)=> `Playlist ${i+1}`)
const Sidebar = ()=>{
//  const {playlists} =usePlaylist()
  console.log(usePlaylist())
    return(
     <Box width="100%" 
        height="calc(100vh - 100px)"
        bg="black" 
        paddingX="5px" 
        color="gray">
            <Box paddingY="20px" height="100%">
                    <Box width="120px"
                    marginBottom="20px" 
                    paddingX="20px"
                    >
                      <NextImage src="/LogoTrax.svg" height={80} width={120}/>
                    </Box>
                    <Box marginBottom="20px">
                        <List spacing={2}>
                            {  
                                navMenu.map((menu)=>(
                                  <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                                      <LinkBox>
                                        <NextLink href={menu.route} passHref>
                                           <LinkOverlay>
                                           <ListIcon
                                             as ={menu.icon}
                                             color ="white"
                                            marginRight="20px"     
                                                 />
                                                 {menu.name}
                                           </LinkOverlay>
                                        </NextLink>
                                      </LinkBox>
                                  </ListItem> 
                                ))
                            }

                        </List>
                    </Box>
                    <Box marginTop="20px"  marginBottom="20px" >
                      <List spacing={2}>
                                    {musicMenu.map(item =>(
                                      <ListItem paddingX="20px" fontSize="16px" key={item.name}>           
                                         <LinkBox>
                                        <NextLink href={item.route} passHref>
                                           <LinkOverlay>
                                           <ListIcon
                                             as ={item.icon}
                                             color ="white"
                                            marginRight="20px"     
                                                 />
                                                 {item.name}
                                           </LinkOverlay>
                                        </NextLink>
                                      </LinkBox>
                                      </ListItem>
                                    ))}
                      </List>
                    </Box>
                    <Divider color="gray.800" paddingTop="20 px"/>
                    <Box height="66%" overflowY="auto" paddingY="20px" >
                        <List spacing={2} >
                        {playlists.map(playlist =>(
                                      <ListItem paddingX="20px" key={playlist.id}>           
                                         <LinkBox>
                                        <NextLink href='/' passHref>
                                           <LinkOverlay>
                                                {playlist.name}
                                           </LinkOverlay>
                                        </NextLink>
                                      </LinkBox>
                                      </ListItem>
                                    ))}
                        </List>
                    </Box>
           </Box>
      </Box>
    )
}
export default Sidebar ;


