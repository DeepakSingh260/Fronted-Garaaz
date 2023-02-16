import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Select,
    Table,
    Thead,
    Td,
    Tbody,
    Tr
  } from '@chakra-ui/react'
import axios from 'axios';
import {
    useEffect,
    useState
  } from 'react';
import './form.css'
export const AddSalesData = () =>{

    const [date,setDate] = useState("dd/mm/yy")
    const [brand , setBrand] = useState("")
    const [transactionType , setTransactionType] = useState("")
    const [totalOrders , setTotalOrders] = useState(0)
    const [totalOrderValue , setTotalOrderValue] = useState(0)
    const [grossMarginPercentage , setGrossMarginPercentage] = useState(0)
    
    
    const curr_date = new Date()
    const date_str:String = String(curr_date.getDate()) +"-" +String( curr_date.getMonth()+1 )+"-" +String(curr_date.getFullYear())

    let param = {
        'date':date_str,
        'brand' : brand,
        'transactionType' : transactionType,
        'totalOrders' : totalOrders,
        'totalOrderValue' : totalOrderValue,
        'grossMarginPercentage': grossMarginPercentage,
        'createdAt' : date_str,
        'updatedAt':date_str
    }   
    interface param_type {
        'date':String,
        'brand' : String,
        'transactionType' : String,
        'totalOrders' : number,
        'totalOrderValue' : number,
        'grossMarginPercentage': number,
        'createdAt' : String,
        'updatedAt':String
    }   
    const [mapList , setMapList] = useState<param_type[]>([])
    const list:any  = []

    useEffect(()=>{
        setMapList(list)
    },[])

    const AddBtnHandler =() =>{

        setMapList([...mapList,param])
        console.log("list",list)
        param = {
            'date':date_str,
            'brand' : brand,
            'transactionType' : transactionType,
            'totalOrders' : totalOrders,
            'totalOrderValue' : totalOrderValue,
            'grossMarginPercentage': grossMarginPercentage,
            'createdAt' : date_str,
            'updatedAt':date_str
        }   
    }

    const submitBtnHandler = async()=>{
        console.log(param)
       
        mapList.forEach(async(item)=>{
             await axios.post("http://localhost:5000/List/postList?+",{},{params:item}).then(()=>{
            console.log("sucessfully")
        })
        })
       
    }

    return (
        <div className='FormClass'>
        {/* <FormControl isRequired >
            <FormLabel style={{fontSize:16}}>
                Date
            </FormLabel>
            <Input type='date' onChange={(event)=>setDate(event.target.value)}/>
        </FormControl> */}
        <FormControl isRequired >
            <FormLabel>
                Brand
            </FormLabel>
            <Input type='text' onChange={(event)=>setBrand(event.target.value)}/>
        </FormControl>
        <FormControl isRequired >
            <FormLabel>
            Transaction Type
            </FormLabel>
            <Input type='text' onChange={(event)=>setTransactionType(event.target.value)}/>
        </FormControl>
        <FormControl isRequired>
            <FormLabel>
            Total Orders
            </FormLabel>
            <Input type='number' onChange={(event)=>setTotalOrders(Number(event.target.value))}/>
        </FormControl>
        <FormControl isRequired>
            <FormLabel>
            Total Order Value
            </FormLabel>
            <Input type='number' onChange={(event)=>setTotalOrderValue(Number(event.target.value))}/>
        </FormControl>
        <FormControl isRequired>
            <FormLabel>
            Gross Margin Percentage
            </FormLabel>
            <Input type='number' onChange={(event)=>setGrossMarginPercentage(Number(event.target.value))}/>
        </FormControl>
        {/* <FormControl isRequired>
            <FormLabel>
            Created At
            </FormLabel>
            <Input type='date' onChange={(event)=>setCreatedAt(String(event.target.value))}/>
        </FormControl> */}
        <FormControl>
            <Button colorScheme='blue' style={{marginTop:'2%'}} onClick={AddBtnHandler}>Add</Button>
        </FormControl>

        <Table>
            <Thead>
                <Td>New Data Added</Td>
                <Td>Date</Td>
            </Thead>
            <Tbody>
                {
                mapList.map((item:any)=>(
                   <Tr>
                    <Td>New Data </Td>
                    <Td>{item['date']}</Td>
                   </Tr>
                ))
                }
            </Tbody>
        </Table>
        <FormControl>
            <Button colorScheme='blue' style={{marginTop:'2%'}} onClick={submitBtnHandler}>Submit</Button>
        </FormControl>
        </div>
    )
}