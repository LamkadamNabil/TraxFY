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
const Sidebar = ()=>{
    return(
     <Box width="100%" 
        height="calc(100vh - 100px)"
        bg="black" 
        paddingX="5px" 
        color="gray">
            <Box paddingY="20px">
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
           </Box>
      </Box>
    )
}
export default Sidebar ;


