import DbTable from '../Components/table';
import { Button } from '@chakra-ui/react'
import {useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
export const Home = () =>{
    
    const [salesList , setSalesList] = useState([])

    useEffect(()=>{
      const getSales=async()=>{
        const list = await axios.get("http://localhost:5000/List/getList")
        await setSalesList(list.data)
        console.log(salesList )
        console.log(list.data)
      }

      getSales()
    },[])
    return (
        <div>
             <DbTable salesList={salesList}/>
            <Button colorScheme='blue' style={{marginLeft:'80%' , width:'12%' , maxWidth:80 , marginTop:10}}><Link to='/create'>Create</Link></Button>

        </div>
    )
}