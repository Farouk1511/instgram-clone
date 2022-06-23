import {ActivityIndicator,Text,ViewPropTypes,SafeAreaView} from 'react-native'
import PropTypes from 'prop-types'
import React, { useEffect, useState }  from 'react'

import { fetchImages } from '../utils/api'
import CardList from '../components/CardList'


const Feed = ({style,onPressComments,commentsForItem}) => {

    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [items,setItems] = useState([])

    useEffect(() => {
       const getData = async () => {
           try{
               const data = await fetchImages()

               setLoading(false)
               setItems(data)
           }catch(err){
               
            setLoading(true)
            setError(true)
           }
       } 

       getData()
    },[])

   
        if(loading) {
            return <ActivityIndicator size="large"/>
        }
        if(error) {
            return <Text>Error!!</Text>
        }

        return (
            <SafeAreaView style={style}>
                <CardList item={items} commentsForItem={commentsForItem} onPressComments = {onPressComments}/>
            </SafeAreaView>
        )
    
}

Feed.propTypes = {
    styles: ViewPropTypes.style,
    commentsForItem:PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    onPressComments:PropTypes.func.isRequired
}

Feed.defaultProps = {
    style:null
}

export default Feed