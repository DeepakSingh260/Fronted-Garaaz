import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Select
  } from '@chakra-ui/react'
import axios from 'axios';
import {
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
    const [createdAt , setCreatedAt] = useState("dd/mm/yy")

    const param = {
        'date':date,
        'brand' : brand,
        'transactionType' : transactionType,
        'totalOrders' : totalOrders,
        'totalOrderValue' : totalOrderValue,
        'grossMarginPercentage': grossMarginPercentage,
        'createdAt' : createdAt,
        'updatedAt':createdAt
    }   

    const submitBtnHandler = async()=>{
        console.log(param)
        await axios.post("http://localhost:5000/List/postList?+",{},{params:param}).then(()=>{
            return console.log("sucessfully")
        })
    }

    return (
        <div className='FormClass'>
        <FormControl isRequired >
            <FormLabel style={{fontSize:16}}>
                Date
            </FormLabel>
            <Input type='date' onChange={(event)=>setDate(event.target.value)}/>
        </FormControl>
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
        <FormControl isRequired>
            <FormLabel>
            Created At
            </FormLabel>
            <Input type='date' onChange={(event)=>setCreatedAt(String(event.target.value))}/>
        </FormControl>
        <FormControl>
            <Button colorScheme='blue' style={{marginTop:'2%'}} onClick={submitBtnHandler}>Submit</Button>
        </FormControl>
        </div>
    )
}