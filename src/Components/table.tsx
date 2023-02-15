import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer,} from '@chakra-ui/react'
const DbTable = (props: any)=>{
    console.log("DbTable",props.salesList)
    return (
        <>
     <TableContainer  sx={{maxWidth:'80%',display:'flex' , marginLeft:'auto' , marginRight:'auto' , marginTop:10 , border:'.5px solid' , borderRadius:5 , padding:10}}>
        <Table variant='striped' colorScheme='teal' size={'md'}>
            <TableCaption>Brands Daily Sales Data Table</TableCaption>
            <Thead>
            <Tr>
                <Th>date</Th>
                <Th>brand</Th>
                <Th isNumeric>transactionType</Th>
                <Th>totalOrders</Th>
                <Th>totalOrderValue</Th>
                <Th>grossMarginPercentage</Th>
                <Th>createdAt</Th>
                <Th>updatedAt</Th>
            </Tr>
            </Thead>
            <Tbody>
           
            {   
                props.salesList.map((sales:any)=>(
                    
                    <Tr>
                    <Td>{sales["date"]}</Td>
                    <Td>{sales["brand"]}</Td>
                    <Td>{sales["transactionType"]}</Td>
                    <Td>{sales["totalOrders"]}</Td>
                    <Td>{sales["totalOrderValue"]}</Td>
                    <Td>{sales["grossMarginPercentage"]}</Td>
                    <Td>{sales["createdAt"]}</Td>
                    <Td>{sales["updatedAt"]}</Td>
                    </Tr>
                ))
            }
            
            </Tbody>
        </Table>
        </TableContainer>
    </>
    )
}

export default DbTable;