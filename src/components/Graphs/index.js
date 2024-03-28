import {Component} from 'react'
import { MdWavingHand } from "react-icons/md"; 

import PriceCard from '../PriceCard'

import './index.css'

import {
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Legend,
    Tooltip,
    LineChart,
  } from "recharts"
  

class Graphs extends Component{
    state={GraphData:[],PriceDetails:[]}

    componentDidMount=()=>{
        this.getData()
        this.getPriceDetails()
    }

    getData=async()=>{
        const url='https://datausa.io/api/data?drilldowns=Nation&measures=Population'
        const options={
            method:"GET"
        }
        const response=await fetch(url,options) 
        const data=await response.json()
        const updatedData=data.data
        this.setState({GraphData:updatedData})
    }

    getPriceDetails=async()=>{
        const url='https://api.coindesk.com/v1/bpi/currentprice.json'
        const options={
            method:'GET'
        }
        const response=await fetch(url,options) 
        const data=await response.json()
       const  updatedData1=data.bpi.USD
       const  updatedData2=data.bpi.GBP
       const  updatedData3=data.bpi.EUR 
       const value=[updatedData1,updatedData2,updatedData3]
       console.log(value)
       this.setState({PriceDetails:value})
    }

    DataFormatter = (number) => {
        if (number > 100000000) {
          return `${(number / 100000000).toString()}B`
        }
        return number.toString()
      }

    render()
    {
        const{GraphData,PriceDetails}=this.state
        return (
            <div className='HomeContainer'>
                <div className='right-bg-container'>
                    <div className='handshake'>
        <div className='greeting-container'>
            <h1 className='greeting-heading'>Hello,<span className='name-span'>Raj Kumar</span></h1>
            <MdWavingHand  className='hand-wave-icon'/>
        </div>
        <p className='description'>Welcome to <span className='span-description'>Spot trading!</span></p>
        </div>
        <button className='startTradeButton' type='button'>Start Trading</button>
        </div>
                <h1 className='PricesHeading'>Population Graph </h1>
                <LineChart width={850} height={450} data={GraphData} className='chart'
                    margin={{ top: 25, right: 30, left: 70, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Year"  domain={['dataMin', 'dataMax']}/>
                    <YAxis tickFormatter={this.DataFormatter} dataKey="Population" domain={['auto', 'auto']}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Year" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Population" stroke="#82ca9d" />
                </LineChart>
                <LineChart width={400} height={350} data={GraphData} className='Mbchart'
                    margin={{ top: 25, right: 30, left: 30, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Year"  domain={['dataMin', 'dataMax']}/>
                    <YAxis tickFormatter={this.DataFormatter} dataKey="Population" domain={['auto', 'auto']}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Year" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Population" stroke="#82ca9d" />
                </LineChart>
                <h1 className='PricesHeading'>Prices</h1>
                <ul className='UnorderedList'>
                    {PriceDetails.map((each=><PriceCard item={each} key={each.code}/>))}
                </ul>
            </div>
        )
    }
}
export default Graphs